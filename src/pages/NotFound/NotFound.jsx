import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound fade-up" data-testid="notfound-page">
            <div className="container notfound-inner">
                <span className="notfound-eyebrow">404</span>
                <h1 className="notfound-title">
                    You wandered <span className="notfound-accent">off the grid.</span>
                </h1>
                <p className="notfound-lead">
                    The page you are looking for does not exist. Maybe it moved. Maybe it was
                    never there. Either way, let us put you back on track.
                </p>
                <Button as={Link} to="/" data-testid="notfound-home-btn">
                    <i className="fa-solid fa-arrow-left"></i> Take me home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
