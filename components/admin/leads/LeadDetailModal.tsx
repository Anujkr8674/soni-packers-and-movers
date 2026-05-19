"use client";

import { X } from "lucide-react";

import StatusBadge from "@/components/admin/shared/StatusBadge";
import { formatDateTime } from "@/lib/lead-crm";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  moveDate: string;
  moveType: string;
  message: string;
  status: string;
  createdAt: string;
  nextFollowUpAt?: string | null;
  adminNote?: string | null;
  statusUpdatedAt?: string | null;
};

export default function LeadDetailModal({
  lead,
  onClose,
}: {
  lead: Lead;
  onClose: () => void;
}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-4 sm:items-center">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
          <h2 className="text-lg font-bold text-slate-900">Lead Details</h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-2">
            <StatusBadge status={lead.status} />
            <span className="text-xs text-slate-500">Submitted {formatDateTime(lead.createdAt)}</span>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2">
            {[
              ["Name", lead.name],
              ["Phone", lead.phone],
              ["Email", lead.email],
              ["Move Type", lead.moveType],
              ["Moving From", lead.movingFrom],
              ["Moving To", lead.movingTo],
              ["Move Date", formatDateTime(lead.moveDate)],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Message</dt>
            <dd className="mt-1 whitespace-pre-wrap text-sm text-slate-900">{lead.message}</dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Follow-up Details</h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Current Status</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">
                  <StatusBadge status={lead.status} />
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Next Follow-up</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{formatDateTime(lead.nextFollowUpAt)}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last Updated</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{formatDateTime(lead.statusUpdatedAt)}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Full Admin Note</dt>
                <dd className="mt-1 whitespace-pre-wrap text-sm text-slate-900">{lead.adminNote?.trim() || "-"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
