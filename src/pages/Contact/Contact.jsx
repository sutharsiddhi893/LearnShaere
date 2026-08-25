import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState(null); // 'ok' | 'error' | null
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Please enter your name.";
        if (!form.email.trim()) next.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
        if (!form.message.trim() || form.message.trim().length < 10)
            next.message = "Message should be at least 10 characters.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            setStatus("error");
            return;
        }
        // Simulate submission (no backend)
        setStatus("ok");
        setForm(initialForm);
        setErrors({});
    };

    return (
        <div className="contact fade-up" data-testid="contact-page">
            <div className="container contact-inner">
                <div className="contact-intro">
                    <SectionHeader
                        eyebrow="Get in touch"
                        title="Have a question? Send it over."
                        description="Whether you spotted a bug, want to suggest a course, or just want to say hi — this form reaches us."
                    />

                    <ul className="contact-list">
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <span>Email</span>
                                <strong>hello@scholargrid.io</strong>
                            </div>
                        </li>
                        <li>
                            <i className="fa-solid fa-clock"></i>
                            <div>
                                <span>Response time</span>
                                <strong>Within 2 business days</strong>
                            </div>
                        </li>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <span>Studio</span>
                                <strong>Remote-first, globally scattered</strong>
                            </div>
                        </li>
                    </ul>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    data-testid="contact-form"
                >
                    <div className="contact-field">
                        <label htmlFor="name">Your name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Curie"
                            data-testid="contact-input-name"
                            aria-invalid={!!errors.name}
                        />
                        {errors.name && <span className="contact-error">{errors.name}</span>}
                    </div>

                    <div className="contact-field">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@domain.com"
                            data-testid="contact-input-email"
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && <span className="contact-error">{errors.email}</span>}
                    </div>

                    <div className="contact-field">
                        <label htmlFor="subject">Subject (optional)</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="What is this about?"
                            data-testid="contact-input-subject"
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us what is on your mind..."
                            data-testid="contact-input-message"
                            aria-invalid={!!errors.message}
                        ></textarea>
                        {errors.message && (
                            <span className="contact-error">{errors.message}</span>
                        )}
                    </div>

                    <div className="contact-actions">
                        <Button type="submit" data-testid="contact-submit">
                            Send Message <i className="fa-solid fa-paper-plane"></i>
                        </Button>
                        {status === "ok" && (
                            <span className="contact-status contact-status--ok" data-testid="contact-success">
                                <i className="fa-solid fa-circle-check"></i> Message sent — we
                                will get back to you soon.
                            </span>
                        )}
                        {status === "error" && (
                            <span className="contact-status contact-status--err" data-testid="contact-error-summary">
                                <i className="fa-solid fa-triangle-exclamation"></i> Please fix
                                the highlighted fields.
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
