import React from 'react';
import '../navbar/Navbar.css';


class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="food">
					<div className="infoPratique">
						
					</div>
				</div>

				<div className="steps">
					<p>Pré-commande<br/> de votre déjeuner</p>
					<p>Cloture des pré-commandes <br/>à 8h30 le jour J</p>
					<p>RelayTruck sur place <br/> de 12h à 14h</p>
					<p>Plats frais et faits<br/> maison</p>
					<p>Conservation à <br/>température idéale</p>
				</div>

		</div>
	    )

	}
}

export default Header;
