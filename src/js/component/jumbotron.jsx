import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-2 mb-2 pb-5 bg-light rounded-2">
            <div className="container-fluid py-1">
                <h1 className="display-5 fs-2">A Warm Welcome!</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lacus id tortor tempus luctus vitae quis purus. Donec nisi est, blandit id ante nec, dapibus feugiat est.</p>
                <button className="btn btn-primary btn" type="button">Call to action!</button>
            </div>
        </div>
    );
};
