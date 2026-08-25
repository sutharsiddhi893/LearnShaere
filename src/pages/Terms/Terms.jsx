import React from "react";
import { Link } from "react-router-dom";
import "./Terms.css";

export default function TermsPage() {
  return (
    <div className="policy-page">
      <section className="policy-card">
        <p className="section-eyebrow">Terms & conditions</p>
        <h1>Use LearnSphere responsibly and keep learning productive.</h1>
        <p>
          By using LearnSphere, you agree to use the platform for educational purposes and to respect the rights of other students and creators.
        </p>
      </section>

      <section className="policy-card">
        <h2>Acceptable use</h2>
        <p>Students may access notes, quizzes, and lab content for personal study and revision. Sharing copyrighted material without permission may violate platform terms.</p>
      </section>

      <section className="policy-card">
        <h2>Account responsibility</h2>
        <p>Keep your account credentials secure and use the platform responsibly when participating in community features.</p>
      </section>

      <section className="policy-card">
        <h2>Contact</h2>
        <p>If you have questions about the terms, please reach out through the <Link to="/contact">contact page</Link>.</p>
      </section>
    </div>
  );
}
