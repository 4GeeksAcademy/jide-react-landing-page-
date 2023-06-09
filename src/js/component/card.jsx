import React from "react";

export const CardFramework = () => {
    return(
        <div className="card text-center" style={{width:"18rem"}}>
            <img src="https://cdn.pixabay.com/photo/2017/08/01/20/07/nature-2567675_960_720.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};