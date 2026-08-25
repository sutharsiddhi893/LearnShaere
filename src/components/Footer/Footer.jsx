import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    // Newsletter integration can be added later.
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer-main">

          {/* =========================
              BRAND
          ========================= */}

          <div className="footer-brand-section">
            <Link
              to="/"
              className="footer-brand"
              aria-label="LearnSphere home"
            >
              <span className="footer-brand-icon" aria-hidden="true">
                <img src="/icon.png" alt="LearnSphere logo  " />
              </span>

              <span className="footer-brand-text">
                <strong>LearnSphere</strong>
                <small>SMART LEARNING PLATFORM</small>
              </span>
            </Link>

            <p className="footer-description">
              LearnSphere is your all-in-one student platform for notes,
              previous papers, quizzes, coding practice, placement
              preparation, and semester resources. Learn faster, score
              higher, and build your career.
            </p>

            <div className="footer-brand-highlight">
              <span className="footer-highlight-icon" aria-hidden="true">
                ✓
              </span>

              <span>
                Everything you need to learn, practice and prepare.
              </span>
            </div>
          </div>

          {/* =========================
              FOOTER LINKS
          ========================= */}

          <div className="footer-links-group">

            {/* Quick Links */}

            <div className="footer-column">
              <h3>Quick Links</h3>

              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/quizzes">Quizzes</Link>
              <Link to="/placement-hub">Placement Hub</Link>
              <Link to="/bookmarks">Bookmarks</Link>
            </div>

            {/* Resources */}

            <div className="footer-column">
              <h3>Resources</h3>

              <Link to="/resources/pdf-notes">
                PDF Notes
              </Link>

              <Link to="/resources/previous-papers">
                Previous Papers
              </Link>

              <Link to="/resources/question-bank">
                Question Bank
              </Link>

              <Link to="/resources/syllabus">
                Syllabus
              </Link>

              <Link to="/resources/e-books">
                E-Books
              </Link>
            </div>

            {/* Company */}

            <div className="footer-column">
              <h3>Company</h3>

              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact
              </Link>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

              <Link to="/terms">
                Terms & Conditions
              </Link>

              <Link to="/help-center">
                Help Center
              </Link>
            </div>

            {/* Newsletter */}

            <div className="footer-column footer-newsletter">
              <h3>Stay Updated</h3>

              <p className="footer-newsletter-text">
                Get new study resources, quizzes and placement updates
                delivered directly to your inbox.
              </p>

              <form
                className="footer-newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <label
                  htmlFor="footer-email"
                  className="footer-visually-hidden"
                >
                  Email address
                </label>

                <input
                  id="footer-email"
                  type="email"
                  className="footer-newsletter-input"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

                <button
                  type="submit"
                  className="footer-newsletter-button"
                >
                  Subscribe
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* Social Links */}

              <div
                className="footer-socials"
                aria-label="Social media links"
              >
                <a
                  href="https://github.com/"
                  className="footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/"
                  className="footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/"
                  className="footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  IG
                </a>

                <a
                  href="https://www.youtube.com/"
                  className="footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  ▶
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear}{" "}
            <strong>LearnSphere</strong>. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">
              Privacy
            </Link>

            <span aria-hidden="true">•</span>

            <Link to="/terms">
              Terms
            </Link>

            <span aria-hidden="true">•</span>

            <Link to="/contact">
              Contact
            </Link>
          </div>

          <p className="footer-bottom-message">
            Made with <b>♥</b> for students
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;