import React from 'react';
import '../navbar/Navbar.css';
import { Router, Route, Link } from 'react-router';


class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="food">
					<div className="infoPratique">
						
					</div>
				</div>
			<div className="bande">
				<div className="steps">
					<ul>
						<li>Home</li>
						<li>Notre mouvement</li>
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
