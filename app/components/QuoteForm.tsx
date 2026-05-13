"use client";

import { useState } from "react";
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

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteData>({
    mode: "onTouched",
  });

  const onSubmit = (data: QuoteData) => {
    console.log("Quote request:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClassName =
    "rounded-lg border border-slate-300 px-4 py-3 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-100";
  const errorClassName = "mt-1 text-sm text-red-600";

  return (
    <div className="h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm">
        {submitted && <div className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-800">Thanks! We will call you shortly.</div>}
        <div className="space-y-4">
          <div>
            <input
              className={`${inputClassName} w-full`}
              placeholder="Full Name"
              {...register("name", {
                required: "Full name is required.",
                minLength: { value: 2, message: "Please enter at least 2 characters." },
              })}
            />
            {errors.name ? <p className={errorClassName}>{errors.name.message}</p> : null}
          </div>

          <div>
            <input
              type="email"
              className={`${inputClassName} w-full`}
              placeholder="Email Address"
              {...register("email", {
                required: "Email address is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email ? <p className={errorClassName}>{errors.email.message}</p> : null}
          </div>

          <div>
            <input
              className={`${inputClassName} w-full`}
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9+\-\s]{10,15}$/,
                  message: "Please enter a valid phone number.",
                },
              })}
            />
            {errors.phone ? <p className={errorClassName}>{errors.phone.message}</p> : null}
          </div>

          <div>
            <input
              className={`${inputClassName} w-full`}
              placeholder="Moving From"
              {...register("movingFrom", { required: "Starting location is required." })}
            />
            {errors.movingFrom ? <p className={errorClassName}>{errors.movingFrom.message}</p> : null}
          </div>

          <div>
            <input
              className={`${inputClassName} w-full`}
              placeholder="Moving To"
              {...register("movingTo", { required: "Destination is required." })}
            />
            {errors.movingTo ? <p className={errorClassName}>{errors.movingTo.message}</p> : null}
          </div>

          <div>
            <input
              type="date"
              className={`${inputClassName} w-full`}
              {...register("moveDate", { required: "Moving date is required." })}
            />
            {errors.moveDate ? <p className={errorClassName}>{errors.moveDate.message}</p> : null}
          </div>

          <div>
            <select className={`${inputClassName} w-full`} {...register("moveType", { required: "Please select a move type." })}>
              <option value="">Select Move Type</option>
              <option value="household">Household</option>
              <option value="office">Office</option>
              <option value="domestic">Domestic</option>
              <option value="loading">Loading</option>
              <option value="storage">Storage</option>
             
              <option value="vehicle">Vehicle</option>
              
            </select>
            {errors.moveType ? <p className={errorClassName}>{errors.moveType.message}</p> : null}
          </div>

          <div>
            <textarea
              rows={4}
              className={`${inputClassName} w-full`}
              placeholder="Tell us about your move, items, floor level, or any special instructions..."
              {...register("message", {
                required: "Please add a short description of your move.",
                minLength: { value: 10, message: "Message should be at least 10 characters." },
              })}
            />
            {errors.message ? <p className={errorClassName}>{errors.message.message}</p> : null}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
        >
          Send Quote Request
        </button>
      </form>
    </div>
  );
}
