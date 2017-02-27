import React from 'react';
import './Footer.css';


class Footer extends React.Component {

	render(){
		return(
			<div className="footer">

				<div className="info">
				    <img className="logo2" alt="" src="http://www.logopub.net/data/thumbnails/5/Dodge%20Sport.png"/>
				    <p>Copyright 2017©SportS</p>
				</div>
				<div className="reseaux">
							<ul>
								<li><a href="#" className="ricon"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
								<li><a href="#" className="ricon"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
								<li><a href="#" className="ricon"><i className="fa fa-instagram fa-2x"></i></a></li>
							</ul>
						</div>
				<div className="contact">
					<ul>
						<li>FAQ</li>
						<li>MENTIONS LÉGALES</li>
						<li>CONDITIONS GÉNÉRALES DE VENTE</li>
					</ul>
				</div>
					<div className="newsl">
						<h3>REJOINS NOTRE CREW</h3>
							<p>Sois le premier à recevoir des nouvelles sur nos nouveaux programmes</p>
							<input type="text" placeholder="Ton adresse mail" />
							<button>Envoyer</button>
					</div>
				
			</div>

	    )

	}
}

export default Footer;
