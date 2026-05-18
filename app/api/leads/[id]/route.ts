import { z } from "zod";

import { getSession } from "@/lib/auth";
import { isLeadStatus } from "@/lib/constants";
import { jsonError, jsonSuccess, unauthorized } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

const updateSchema = z.object({
  status: z.string().min(1),
});

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return unauthorized();

  const { id } = await context.params;
  const lead = await prisma.booking.findUnique({ where: { id } });

  if (!lead) {
    return jsonError("Lead not found", 404);
  }

  return jsonSuccess({
    lead: {
      ...lead,
      moveDate: lead.moveDate.toISOString(),
      createdAt: lead.createdAt.toISOString(),
    },
  });
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return unauthorized();

  const { id } = await context.params;

  try {
    const body = await request.json();
    const parsed = updateSchema.safeParse(body);

    if (!parsed.success || !isLeadStatus(parsed.data.status)) {
      return jsonError("Invalid status", 400);
    }

    const lead = await prisma.booking.update({
      where: { id },
      data: { status: parsed.data.status },
    });

    return jsonSuccess({
      lead: {
        ...lead,
        moveDate: lead.moveDate.toISOString(),
        createdAt: lead.createdAt.toISOString(),
      },
    });
  } catch {
    return jsonError("Failed to update lead", 500);
  }
}
