import React from 'react';
import './Navbar.css';


class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="navbar">
					<div className="logo">
					    <a href="#" className="logotexte"><img className="logoT" src="http://www.logopub.net/data/thumbnails/5/Dodge%20Sport.png" alt="logo"/></a>
				    </div>
				    <div className="wrapper">
						<div className="menu">
							<ul>
								<li><a href="#" className="concept">Inscirption</a></li>
								<li><a href="#"className="contact">Connexion</a></li>
							</ul>
						</div>
						
					</div>
			</div>
		</div>
	    )

	}
}

export default Navbar;
