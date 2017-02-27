import React from 'react';
import "./grid.css";

// background-image:
// backgroundattachement:fixed
// background position:fixed

class Grid extends React.Component {

	render(){
		return(
			<div className="grid">

				<div className="wraping">
					<h1> AVEC NOUS, REJOIGNEZ LE MOUVEMENT</h1>
						<iframe width="840" height="472" src="https://www.youtube.com/embed/dJlFmxiL11s" frameborder="0" allowfullscreen></iframe>
				
					<h4>Your quality of life is largely dictated by one factor: your physical health. And when it comes to building and maintaining a healthy lifestyle, we all know that eating right and working out are more or less the keys.</h4>
				</div>

				<div className="newsl">
						<h3>REJOINS NOTRE CREW</h3>
							<p>Sois le premier à recevoir des nouvelles sur nos nouveaux programmes</p>
							<input type="text" placeholder="Ton adresse mail" />
							<button>Envoyer</button>
					</div>
				<div className="reseaux">
					<h3> FOLLOW US</h3>
						<ul>
							<li><a href="https://www.facebook.com/mensfitness" className="ricon"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
							<li><a href="https://twitter.com/MensFitness" className="ricon"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
							<li><a href="https://www.instagram.com/MensFitnessMag/" className="ricon"><i className="fa fa-instagram fa-2x"></i></a></li>
							<li><a href="https://www.youtube.com/MensFitness" className="ricon"><i className="fa fa-youtube fa-2x"></i></a></li>
						</ul>

					</div>
				</div>

	    )

	}
}

export default Grid;