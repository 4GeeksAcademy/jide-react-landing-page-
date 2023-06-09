import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="text-light navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="text-light nav-link active" aria-current="page" href="#">Home</a>
                        <a className="text-light nav-link" href="#">About</a>
                        <a className="text-light nav-link" href="#">Services</a>
                        <a className="text-light nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};