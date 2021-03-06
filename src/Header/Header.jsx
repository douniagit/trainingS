import React from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router';


class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="back">
					<div className="infoPratique">
						<h1> SOIS LA MEUILLEURE VERSION DE TOI-MEME</h1>
					</div>
				</div>
			<div className="bande">
				<div className="steps">
					<ul>
						<li>Home</li>
						<li>Notre mouvement</li>
						<li>Nos Activités
							<ul className="info">
								<li><Link to="/activites">Fitness</Link></li>
								<li><Link to="/activites">Musculation</Link></li>
								<li><Link to="/activites">Jujitsu Brésilien</Link></li>
								<li><Link to="/activites">Karaté</Link></li>
								<li><Link to="/activites">Judo</Link></li>
								<li><Link to="/activites">Boxe</Link></li>
							</ul>
						</li>
						<li>Nos programmes sportifs
							<ul className="info">
								<li><Link to="/programme">Programme Fitness</Link></li>
								<li><Link to="/programme">Programme Cardio</Link></li>
								<li><Link to="/programme">Programme Musculation & Running</Link></li>
								<li><Link to="/programme">Programme Remise en forme</Link></li>
							</ul>
						</li>
						<li>La diététique
							<ul className="info">
								<li><Link to="/diet">Nos conseils personnalisés</Link></li>
							</ul>
						</li>
						<li>News</li>
						<li><a href="http://store.lazarangelov.com/">Store</a></li>
					</ul>
				</div>
			</div>
		</div>
	    )

	}
}

export default Header;
