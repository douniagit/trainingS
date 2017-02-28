import React from 'react';
import contenu from '../Card/data.js';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";


export default class Activite extends React.Component {

	render(){
		return(
		<div className="Activite">
		<Navbar />
			<div className="Presentation">
				<h2>PRESENTATION DES DIFFERENTES ACTIVITES PROPOSEES</h2>
				
              { contenu.activites.map(menu =>
              	<div className="prezactiv">
	                <div className="titreactiv">{menu.name}</div>
	                  <img src={menu.image} alt="" className="img"/>
	                  <div className="textactiv">
	                    <div className="prez">{menu.description}</div>
					</div>
				</div>
				)}
            </div>
			<Footer />
		</div>		

	    )

	}
}