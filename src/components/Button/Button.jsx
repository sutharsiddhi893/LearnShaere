import React from "react";
import "./button.css";

const Button = ({
    as: Component = "button",
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
}) => {
    const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
    return (
        <Component className={cls} {...rest}>
            {children}
        </Component>
    );
};

export default Button;
