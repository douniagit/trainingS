import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

export default class Panier extends React.Component {

	render(){
		return(
		<div className="panier">
			<Navbar />
		
				<Footer />
			</div>
		</div>

	    )

	}
}