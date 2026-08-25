import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/courses", label: "Courses" },
    { to: "/quizzes", label: "Quizzes" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="navbar" data-testid="navbar">
            <div className="container navbar-inner">
                <Link
                    to="/"
                    className="navbar-brand"
                    data-testid="navbar-brand"
                    onClick={closeMenu}
                    aria-label="Scholar Grid home"
                >
                    <span className="navbar-brand-mark">SG</span>
                    <span className="navbar-brand-name">Scholar Grid</span>
                </Link>

                <nav
                    className={`navbar-links ${open ? "is-open" : ""}`}
                    aria-label="Primary navigation"
                >
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            onClick={closeMenu}
                            data-testid={`nav-link-${link.label.toLowerCase()}`}
                            className={({ isActive }) =>
                                `navbar-link ${isActive ? "is-active" : ""}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    className={`navbar-toggle ${open ? "is-open" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    data-testid="navbar-toggle"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
