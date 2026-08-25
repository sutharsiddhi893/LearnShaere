/* =========================================================
   TOPIC NAVIGATION
   Previous / Next footer links.
========================================================= */

import React from "react";
import { Link } from "react-router-dom";
import "./TopicNavigation.css";

const TopicNavigation = ({ previous, next, buildPath }) => {
    if (!previous && !next) return null;

    return (
        <nav className="topic-nav">
            {previous ? (
                <Link to={buildPath(previous.id)} className="topic-nav__link is-prev">
                    <span className="topic-nav__dir">← Previous</span>
                    <span className="topic-nav__title">{previous.title}</span>
                </Link>
            ) : (
                <span />
            )}

            {next && (
                <Link to={buildPath(next.id)} className="topic-nav__link is-next">
                    <span className="topic-nav__dir">Next →</span>
                    <span className="topic-nav__title">{next.title}</span>
                </Link>
            )}
        </nav>
    );
};

export default TopicNavigation;