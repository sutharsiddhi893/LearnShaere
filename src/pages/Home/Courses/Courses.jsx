import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import CourseCard from "../../../components/CourseCard";
import SectionHeader from "../../../components/SectionHeader";
import "./Courses.css";

const Courses = () => {
    const { courses, categories } = useApp();
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const initialCategory = searchParams.get("category") || "all";
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    useEffect(() => {
        setActiveCategory(searchParams.get("category") || "all");
    }, [searchParams]);

    const categoryName = (id) => categories.find((c) => c.id === id)?.name;

    const handleCategoryClick = (slug) => {
        setActiveCategory(slug);
        if (slug === "all") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", slug);
        }
        setSearchParams(searchParams);
    };

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return courses.filter((c) => {
            if (activeCategory !== "all") {
                const cat = categories.find((cat) => cat.id === c.categoryId);
                if (!cat || cat.slug !== activeCategory) return false;
            }
            if (!q) return true;
            return (
                c.title.toLowerCase().includes(q) ||
                (c.subtitle || "").toLowerCase().includes(q) ||
                (c.instructor || "").toLowerCase().includes(q)
            );
        });
    }, [courses, categories, search, activeCategory]);

    return (
        <div className="courses fade-up" data-testid="courses-page">
            <div className="container courses-header">
                <SectionHeader
                    eyebrow="All courses"
                    title="Every course. One grid."
                    description="Filter by discipline, search by title or instructor, and click through to start learning."
                />
            </div>

            <div className="container courses-toolbar">
                <div className="courses-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search courses, instructors..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search courses"
                        data-testid="courses-search-input"
                    />
                </div>

                <div className="courses-filter" role="tablist" aria-label="Category filter">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeCategory === "all"}
                        className={`courses-filter-btn ${activeCategory === "all" ? "is-active" : ""}`}
                        onClick={() => handleCategoryClick("all")}
                        data-testid="courses-filter-all"
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === cat.slug}
                            className={`courses-filter-btn ${activeCategory === cat.slug ? "is-active" : ""}`}
                            onClick={() => handleCategoryClick(cat.slug)}
                            data-testid={`courses-filter-${cat.slug}`}
                        >
                            <i className={`fa-solid ${cat.icon}`}></i> {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container courses-body">
                {filtered.length === 0 ? (
                    <div className="courses-empty" data-testid="courses-empty">
                        <i className="fa-solid fa-face-frown"></i>
                        <h3>No courses match your filters.</h3>
                        <p>Try clearing the search or picking a different category.</p>
                    </div>
                ) : (
                    <div className="courses-grid" data-testid="courses-grid">
                        {filtered.map((c) => (
                            <CourseCard
                                key={c.id}
                                course={c}
                                categoryName={categoryName(c.categoryId)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
