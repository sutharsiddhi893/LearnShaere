import React from "react";
import "./SectionHead.css";

const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
    return (
        <div className={`section-header section-header--${align}`}>
            {eyebrow && (
                <span className="section-header-eyebrow" data-testid="section-eyebrow">
                    {eyebrow}
                </span>
            )}
            <h2 className="section-header-title" data-testid="section-title">
                {title}
            </h2>
            {description && (
                <p className="section-header-description" data-testid="section-description">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
