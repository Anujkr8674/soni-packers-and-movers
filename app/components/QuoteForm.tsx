"use client";

import { AlertTriangle } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

type QuoteData = {
  name: string;
  email: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  moveDate: string;
  moveType: string;
  message: string;
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 flex items-start gap-1.5 text-sm text-red-600" role="alert">
      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-red-600" strokeWidth={2} aria-hidden />
      <span>{message}</span>
    </p>
  );
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const todayIso = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteData>({
    mode: "onTouched",
  });

  const onSubmit = async (data: QuoteData) => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        setSubmitError(result.message ?? "Something went wrong");
        return;
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitError("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const baseInput =
    "rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-2 disabled:opacity-60";
  const normalRing = "border-slate-300 focus:border-orange-500 focus:ring-orange-100";
  const errorRing = "border-red-500 focus:border-red-500 focus:ring-red-100";

  const inputClass = (hasError: boolean) => `${baseInput} w-full ${hasError ? errorRing : normalRing}`;
  const labelClass = "mb-1 block text-sm font-semibold text-slate-800";

  return (
    <div className="relative h-full">
      {submitted ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="quote-success-title"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl ring-1 ring-black/5">
            <p id="quote-success-title" className="text-base font-medium text-green-800">
              Thanks! We will call you shortly.
            </p>
          </div>
        </div>
      ) : null}

      {submitError ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="quote-error-title"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl ring-1 ring-red-100">
            <p id="quote-error-title" className="text-base font-medium text-red-800">
              {submitError}
            </p>
            <button
              type="button"
              className="mt-5 rounded-lg bg-slate-800 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
              onClick={() => setSubmitError(null)}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="quote-name" className={labelClass}>
              Full Name
            </label>
            <input
              id="quote-name"
              className={inputClass(!!errors.name)}
              placeholder="Full Name"
              autoComplete="name"
              {...register("name", {
                required: "Full name is required.",
                minLength: { value: 2, message: "Please enter at least 2 characters." },
              })}
            />
            <FieldError message={errors.name?.message} />
          </div>

          <div>
            <label htmlFor="quote-email" className={labelClass}>
              Email Address
            </label>
            <input
              id="quote-email"
              type="email"
              className={inputClass(!!errors.email)}
              placeholder="Email Address"
              autoComplete="email"
              {...register("email", {
                required: "Email address is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            <FieldError message={errors.email?.message} />
          </div>

          <div>
            <label htmlFor="quote-phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="quote-phone"
              type="text"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              className={inputClass(!!errors.phone)}
              placeholder="Phone Number"
              {...register("phone", {
                required: "Please enter a phone number.",
                setValueAs: (v) => String(v ?? "").replace(/\D/g, "").slice(0, 10),
                validate: (v) => (v.length === 10 ? true : "Please enter a phone number."),
              })}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          <div>
            <label htmlFor="quote-from" className={labelClass}>
              Moving From
            </label>
            <input
              id="quote-from"
              className={inputClass(!!errors.movingFrom)}
              placeholder="Moving From"
              {...register("movingFrom", { required: "Starting location is required." })}
            />
            <FieldError message={errors.movingFrom?.message} />
          </div>

          <div>
            <label htmlFor="quote-to" className={labelClass}>
              Moving To
            </label>
            <input
              id="quote-to"
              className={inputClass(!!errors.movingTo)}
              placeholder="Moving To"
              {...register("movingTo", { required: "Destination is required." })}
            />
            <FieldError message={errors.movingTo?.message} />
          </div>

          <div>
            <label htmlFor="quote-date" className={labelClass}>
              Moving Date
            </label>
            <input
              id="quote-date"
              type="date"
              min={todayIso}
              className={inputClass(!!errors.moveDate)}
              {...register("moveDate", {
                required: "Moving date is required.",
                validate: (val) =>
                  !val || val >= todayIso ? true : "Please choose today or a future date.",
              })}
            />
            <FieldError message={errors.moveDate?.message} />
          </div>

          <div>
            <label htmlFor="quote-type" className={labelClass}>
              Move Type
            </label>
            <select
              id="quote-type"
              className={inputClass(!!errors.moveType)}
              {...register("moveType", { required: "Please select a move type." })}
            >
              <option value="">Select Move Type</option>
              <option value="household">Household</option>
              <option value="office">Office</option>
              <option value="domestic">Domestic</option>
              <option value="loading">Loading</option>
              <option value="storage">Storage</option>
              <option value="vehicle">Vehicle</option>
            </select>
            <FieldError message={errors.moveType?.message} />
          </div>

          <div>
            <label htmlFor="quote-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="quote-message"
              rows={4}
              className={inputClass(!!errors.message)}
              placeholder="Tell us about your move, items, floor level, or any special instructions..."
              {...register("message", {
                required: "Please add a short description of your move.",
                minLength: { value: 10, message: "Message should be at least 10 characters." },
              })}
            />
            <FieldError message={errors.message?.message} />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Send Quote Request"}
        </button>
      </form>
    </div>
  );
}
