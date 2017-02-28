import React from 'react';
import CardDiet from "../Card/CardDiet.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

export default class Diet extends React.Component {

	render(){
		return(
		<div className="Diet">
			<Navbar />
			<div className="wraping">
				<CardDiet />
				<Footer />
			</div>
		</div>

	    )

	}
}