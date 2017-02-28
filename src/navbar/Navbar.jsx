import React from 'react';
import './Navbar.css';
import { Router, Route, Link } from 'react-router';

class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="navbar">
					<div className="logo">
					    <Link href="/" className="logotexte"><img className="logoT" src="http://www.logopub.net/data/thumbnails/5/Dodge%20Sport.png" alt="logo"/></Link>
				    </div>
				    <div className="wrapper">
						<div className="menu">
							<ul>
								<li><Link to="/inscription" className="inscription">Inscription</Link></li>
								<li><Link to="/connexion" className="connexion">Connexion</Link></li>
								<li><Link to="/inscription" className="panier"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
							</ul>
						</div>
						
					</div>
				</div>
		</div>
	    )

	}
}

export default Navbar;
