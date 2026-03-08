"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    trackEvent("contact_submit", {
      source: "home_form",
      has_name: Boolean(name),
      has_email: Boolean(email),
      message_length: message.length,
    });

    const subject = encodeURIComponent(`Contact portfolio - ${name || "Sans nom"}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:selyan.mouhali@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="text-sm text-sand/80" htmlFor="contact-name">
        Nom
      </label>
      <input
        id="contact-name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        className="h-12 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors focus:border-bronze/60"
      />

      <label className="text-sm text-sand/80" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="h-12 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors focus:border-bronze/60"
      />

      <label className="text-sm text-sand/80" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
        className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-bronze/60"
      />

      <button
        type="submit"
        className="mt-2 h-12 rounded-xl bg-bronze px-5 text-sm font-semibold text-black transition hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        Envoyer le message
      </button>
    </form>
  );
}
