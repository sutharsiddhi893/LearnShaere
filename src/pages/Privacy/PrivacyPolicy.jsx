import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <section className="policy-card">
        <p className="section-eyebrow">Privacy policy</p>
        <h1>We protect student data with thoughtful, transparent practices.</h1>
        <p>
          LearnSphere uses student data to personalize the learning experience, keep bookmarks and progress in sync, and improve study recommendations.
        </p>
      </section>

      <section className="policy-card">
        <h2>What we collect</h2>
        <p>We may collect basic account details, learning activity, and preferences so the experience stays relevant and useful.</p>
      </section>

      <section className="policy-card">
        <h2>How we use it</h2>
        <p>Collected information helps power progress tracking, saved resources, quiz history, and personalized recommendations.</p>
      </section>

      <section className="policy-card">
        <h2>Contact</h2>
        <p>Questions about privacy can be sent to the support team at <a href="mailto:privacy@learnsphere.app">privacy@learnsphere.app</a>.</p>
        <Link to="/contact" className="button-secondary">Contact support</Link>
      </section>
    </div>
  );
}
