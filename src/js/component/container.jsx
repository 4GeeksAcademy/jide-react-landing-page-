import React from "react";

export const Container = ({ children }) => {
    return (
        <div
            style={{
                margin: '0 auto',
                width: '70vw',
                height: '100vh'
            }}
            >
            {children}
        </div>
    );
};