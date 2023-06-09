import React from "react";
import { Navbar } from "./navbar.jsx";
import { Container } from "./container.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { CardFramework } from "./card.jsx";

//create your first component
const Home = () => {
	return (
        <div>
			<Navbar />
			<Container>
				<Jumbotron />
				<div className="d-flex">
					<CardFramework />
					<CardFramework />
					<CardFramework />
					<CardFramework />
				</div>
			</Container>

        </div>
	);
};

export default Home;
