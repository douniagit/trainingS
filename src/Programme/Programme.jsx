import React from 'react';
import "./programme.css";
import Card from "../Card/Card.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

class Programme extends React.Component {

	render(){
		return(
		<div className="programme">
			<Navbar />
			<div className="wraping">
				<Card />
			</div>
			<Footer />
		</div>

	    )

	}
}

export default Programme;