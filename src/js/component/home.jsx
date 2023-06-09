import React from "react";
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
        <div>
			<Navbar />
			<Container>
				<Jumbotron />
			</Container>

        </div>
	);
};

export default Home;
