"use client";
import { useState } from "react";
import { profile, contactServices } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    const subject = `Portfolio inquiry${form.service ? `: ${form.service}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      ...(form.service ? [`Service: ${form.service}`] : []),
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?${new URLSearchParams({ subject, body })}`;
    setStatus(`Your email app should open with your message. If it doesn't, email ${profile.email}.`);
  }

  return (
    <section id="contact">
      <div className="w ct">
        <div>
          <h2 className="rv">Let’s work <span className="ac">together!</span></h2>
          <p className="sub rv">Tell me about your project and I will reply within a day.</p>
          <form className="rv" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required />
            <select name="service" value={form.service} onChange={update}>
              <option value="">Choose a service</option>
              {contactServices.map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea name="message" rows="4" placeholder="Your message" value={form.message} onChange={update} required />
            <button className="btn" type="submit">Send Message</button>
            {status && <small className="status">{status}</small>}
          </form>
        </div>
        <div className="info rv">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><small>Phone</small><b>{profile.phone}</b></a>
          <a href={`mailto:${profile.email}`}><small>Email</small><b>{profile.email}</b></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><small>LinkedIn</small><b>{profile.linkedinLabel}</b></a>
          <a href="#top"><small>Location</small><b>{profile.location}</b></a>
        </div>
      </div>
    </section>
  );
}
