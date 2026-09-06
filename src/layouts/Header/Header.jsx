import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const courses = [
  { name: "BCA", path: "/courses/bca/semester/1" },
  { name: "B.Sc IT", path: "/courses/bsc-it/semester/1" },
  { name: "MCA", path: "/courses/mca/semester/1" },
  { name: "M.Sc IT", path: "/courses/msc-it/semester/1" },
  { name: "B.Tech", path: "/courses/btech/semester/1" },
  { name: "M.Tech", path: "/courses/mtech/semester/1" },
];

const resources = [
  { name: "Previous Papers", path: "/resources/previous-papers" },
  { name: "Question Bank", path: "/resources/question-bank" },
  { name: "Cheat Sheets", path: "/resources/cheat-sheets" },
  { name: "E-Books", path: "/resources/e-books" },
  { name: "PDF Notes", path: "/resources/pdf-notes" },
  { name: "Syllabus", path: "/resources/syllabus" },
];

const programmingLabs = [
  { name: "HTML", path: "/programming-lab/html" },
  { name: "CSS", path: "/programming-lab/css" },
  { name: "JavaScript", path: "/programming-lab/javascript" },
  { name: "React", path: "/programming-lab/react" },
  { name: "Python", path: "/programming-lab/python" },
  { name: "Java", path: "/programming-lab/java" },
  { name: "C", path: "/programming-lab/c" },
  { name: "C++", path: "/programming-lab/cpp" },
  { name: "SQL", path: "/programming-lab/sql" },
];

function DropdownMenu({ label, items, isOpen, onToggle, onClose }) {
  return (
    <div className="header-dropdown">
      <button
        type="button"
        className={`header-nav-button ${isOpen ? "header-nav-button-active" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <span className={`header-chevron ${isOpen ? "header-chevron-open" : ""}`}>
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="header-dropdown-menu">
          <div className="header-dropdown-title">{label}</div>

          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="header-dropdown-link"
              onClick={onClose}
            >
              <span className="header-dropdown-icon">→</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((currentDropdown) =>
      currentDropdown === dropdownName ? null : dropdownName
    );
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-container">
        <Link to="/" className="header-brand" onClick={closeMenus}>
          <div className="header-brand-icon" aria-hidden="true">
            <img src="/logo.jpg" alt="LearnSphere Logo" className="header-logo" />
          </div>

          <div className="header-brand-content">
            <span className="header-brand-name">LearnSphere</span>
            <span className="header-brand-tagline">STUDENT PORTAL</span>
          </div>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "header-nav-link-active" : ""}`
            }
          >
            Home
          </NavLink>

          <DropdownMenu
            label="Courses"
            items={courses}
            isOpen={activeDropdown === "courses"}
            onToggle={() => toggleDropdown("courses")}
            onClose={closeMenus}
          />

          <DropdownMenu
            label="Resources"
            items={resources}
            isOpen={activeDropdown === "resources"}
            onToggle={() => toggleDropdown("resources")}
            onClose={closeMenus}
          />

          <DropdownMenu
            label="Programming Lab"
            items={programmingLabs}
            isOpen={activeDropdown === "programming"}
            onToggle={() => toggleDropdown("programming")}
            onClose={closeMenus}
          />
          <NavLink
            to="/placement-hub"
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "header-nav-link-active" : ""}`
            }
          >
            Placement Hub
          </NavLink>


        </nav>

        <div className="header-actions">
          <Link
            to="/search"
            className="header-search-button"
            aria-label="Search learning materials"
            onClick={closeMenus}
          >
            <span className="header-search-icon">⌕</span>
            <span className="header-search-text">Search</span>

          </Link>

          <Link
            to="/profile"
            className="header-profile-button"
            aria-label="Open profile"
            onClick={closeMenus}
          >
            <span className="header-profile-avatar">S</span>

          </Link>

          <button
            type="button"
            className={`mobile-menu-button ${mobileMenuOpen ? "mobile-menu-button-open" : ""
              }`}
            aria-label="Toggle mobile navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              setMobileMenuOpen((isOpen) => !isOpen);
              setActiveDropdown(null);
            }}
          >
            <span className="mobile-menu-line"></span>
            <span className="mobile-menu-line"></span>
            <span className="mobile-menu-line"></span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-navigation">
          <div className="mobile-navigation-content">
            <Link to="/search" className="mobile-search-link" onClick={closeMenus}>
              <span>⌕</span>
              Search courses, notes and topics
            </Link>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={closeMenus}
            >
              Home
            </NavLink>

            <MobileMenuGroup title="Courses" items={courses} onClose={closeMenus} />

            <MobileMenuGroup
              title="Resources"
              items={resources}
              onClose={closeMenus}
            />
            <MobileMenuGroup
              title="Programming Lab"
              items={programmingLabs}
              onClose={closeMenus}
            />

            <NavLink
              to="/placement-hub"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={closeMenus}
            >
              Placement Hub
            </NavLink>

            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={closeMenus}
            >
              Bookmarks
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={closeMenus}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
              }
              onClick={closeMenus}
            >
              Contact
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `mobile-profile-link ${isActive ? "mobile-nav-link-active" : ""
                }`
              }
              onClick={closeMenus}
            >
              <span className="header-profile-avatar">S</span>
              My Student Profile
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileMenuGroup({ title, items, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-group">
      <button
        type="button"
        className="mobile-menu-group-button"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span>{title}</span>
        <span className={open ? "mobile-group-arrow-open" : ""}>⌄</span>
      </button>

      {open && (
        <div className="mobile-submenu">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="mobile-submenu-link"
              onClick={onClose}
            >
              {item.name}
              <span>→</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
