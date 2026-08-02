"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type SubmissionState = "idle" | "loading" | "success" | "error";

interface ContactFormFields {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function buildFormPayload(data: ContactFormFields) {
    const encoded = new URLSearchParams();
    encoded.append("form-name", "contact");
    Object.entries(data).forEach(([key, value]) => {
      encoded.append(key, value);
    });
    return encoded.toString();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormFields = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setSubmissionState("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: buildFormPayload(payload),
      });

      if (!response.ok) {
        throw new Error("We couldn't send your message. Please try again.");
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again."
      );
    } finally {
      setSubmissionState((previous) =>
        previous === "loading" ? "idle" : previous
      );
    }
  }

  return (
    <div id="contact" className="bg-white w-full mx-auto text-black min-h-112.5 p-2 md:p-8 mb-8">
      <div className="relative flex justify-end max-w-300 mx-auto px-4 md:px-8">
        <Image 
          src="/contact-pitching.png" 
          alt="Contact" 
          width={300} 
          height={300} 
          className="hidden md:block md:absolute md:top-1/2 md:left-0 lg:left-2 md:-translate-y-1/2 max-w-1/3 lg:max-w-1/2"
        />
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-start md:w-3/4 md:min-h-95 p-4 md:p-12 md:pl-24 shadow-[0_0_24px_rgba(0,0,0,0.33)]"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p aria-hidden="true" className="hidden">
            <label>
              Leave this field empty:
              <input name="bot-field" />
            </label>
          </p>
          <div className="text-4xl font-black mb-4">
            Have A Question?
          </div>
          <hr className="w-full border border-[#94bdf3] mb-8" />
          <input 
            id="name"
            name="name"
            type="text" 
            placeholder="Name" 
            className='w-full bg-[#94bdf340] px-4 py-2 rounded-full mb-4 uppercase'
            required
          />
          <input 
            id="email"
            name="email"
            type="email" 
            placeholder="Email" 
            className='w-full bg-[#94bdf340] px-4 py-2 rounded-full mb-4 uppercase'
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full bg-[#94bdf340] px-4 py-2 rounded-xl mb-4 min-h-40 text-left align-top resize-none uppercase"
            required
          />
          <div>
            <button
              type="submit"
              className="bg-[#94bdf3] text-white px-8 py-2 rounded-full uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={submissionState === "loading"}
            >
              {submissionState === "loading" ? "Sending..." : "Submit"}
            </button>
          </div>
          {submissionState === "success" && (
            <p className="sr-only" role="status">
              Message sent successfully.
            </p>
          )}
          {submissionState === "error" && errorMessage && (
            <p className="sr-only" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
