"use client";

import { useCallback, useEffect, useState } from "react";
import { Eye, Search } from "lucide-react";
import { toast } from "sonner";

import LeadDetailModal, { type Lead } from "@/components/admin/leads/LeadDetailModal";
import PageHeader from "@/components/admin/shared/PageHeader";
import LoadingSpinner from "@/components/admin/shared/LoadingSpinner";
import StatusBadge from "@/components/admin/shared/StatusBadge";
import { LEAD_STATUSES } from "@/lib/constants";

type StatusCounts = {
  new: number;
  followUp: number;
  converted: number;
  lost: number;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [statusCounts, setStatusCounts] = useState<StatusCounts>({
    new: 0,
    followUp: 0,
    converted: 0,
    lost: 0,
  });
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        search,
        status: statusFilter,
      });
      const res = await fetch(`/api/leads?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.message ?? "Failed to load leads");
        return;
      }
      setLeads(data.leads);
      setTotalPages(data.pagination.totalPages);
      setStatusCounts(data.statusCounts);
    } catch {
      toast.error("Failed to load leads");
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter]);

  useEffect(() => {
    void fetchLeads();
  }, [fetchLeads]);

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.message ?? "Failed to update status");
        return;
      }
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
      toast.success("Status updated");
      void fetchLeads();
    } catch {
      toast.error("Failed to update status");
    }
  };

  const statCards = [
    { label: "New", statusValue: "New", value: statusCounts.new, color: "border-blue-200 bg-blue-50 text-blue-800" },
    { label: "Follow-up", statusValue: "Follow-up", value: statusCounts.followUp, color: "border-amber-200 bg-amber-50 text-amber-800" },
    { label: "Converted", statusValue: "Converted", value: statusCounts.converted, color: "border-emerald-200 bg-emerald-50 text-emerald-800" },
    { label: "Lost", statusValue: "Lost", value: statusCounts.lost, color: "border-rose-200 bg-rose-50 text-rose-800" },
  ];

  return (
    <div>
      <PageHeader title="Leads Management" description="Track and manage all quote requests." />

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            onClick={() => {
              setStatusFilter(card.statusValue);
              setPage(1);
            }}
            className={`cursor-pointer rounded-xl border p-4 transition-all ${card.color} ${statusFilter === card.statusValue ? "ring-2 ring-orange-400" : "hover:shadow-md"}`}
          >
            <p className="text-sm font-medium">{card.label}</p>
            <p className="mt-1 text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search name, phone, email, locations..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-orange-500"
        >
          <option value="">All statuses</option>
          {LEAD_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  {["Name", "Phone", "Moving From", "Moving To", "Move Date", "Status", "Action"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">{lead.name}</td>
                      <td className="px-4 py-3">{lead.phone}</td>
                      <td className="px-4 py-3">{lead.movingFrom}</td>
                      <td className="px-4 py-3">{lead.movingTo}</td>
                      <td className="px-4 py-3">{formatDate(lead.moveDate)}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={lead.status}
                            onChange={(e) => void updateStatus(lead.id, e.target.value)}
                            className="rounded-lg border border-slate-200 px-2 py-1.5 text-xs"
                          >
                            {LEAD_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            onClick={() => setSelectedLead(lead)}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
                          >
                            <Eye size={14} />
                            View More
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 md:hidden">
            {leads.length === 0 ? (
              <p className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500">
                No leads found.
              </p>
            ) : (
              leads.map((lead) => (
                <div key={lead.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-slate-900">{lead.name}</p>
                      <p className="text-sm text-slate-600">{lead.phone}</p>
                    </div>
                    <StatusBadge status={lead.status} />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {lead.movingFrom} → {lead.movingTo}
                  </p>
                  <p className="text-sm text-slate-500">{formatDate(lead.moveDate)}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <select
                      value={lead.status}
                      onChange={(e) => void updateStatus(lead.id, e.target.value)}
                      className="flex-1 rounded-lg border border-slate-200 px-2 py-2 text-sm"
                    >
                      {LEAD_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => setSelectedLead(lead)}
                      className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
                    >
                      View More
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {totalPages > 1 ? (
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-sm text-slate-600">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm disabled:opacity-40"
              >
                Next
              </button>
            </div>
          ) : null}
        </>
      )}

      {selectedLead ? <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} /> : null}
    </div>
  );
}
