import React from "react";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
        <>
        <Navbar />
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made at{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
        </>
	);
};

export default Home;
