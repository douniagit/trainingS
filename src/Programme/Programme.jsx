import React from 'react';
import "./programme.css";
import Card from "../Card/Card.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

class Programme extends React.Component {

	render(){
		return(
		<div className="Programme">
			<Navbar />
			<div className="wraping">
				<h1>Nos différents modules en fonction de votre besoin</h1>
				<Card />
				<Footer />
			</div>
		</div>

	    )

	}
}

export default Programme;