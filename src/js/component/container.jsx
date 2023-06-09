import React from "react";

const Container = ({ children }) => {
    return (
        <div
            style={{
                border: '2px solid red',
                margin: '0 auto',
                width: '100vw',
                height: '100vh'
            }}
            >
            {children}
        </div>
    );
};

export default Container;