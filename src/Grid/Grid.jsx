import React from 'react';
import "./grid.css";
import CardArticles from '../Card/CardArticles.jsx';


class Grid extends React.Component {

	render(){
		return(
			<div className="grid">
			
				<div className="wraping">
					<h1> AVEC NOUS, REJOIGNEZ LE MOUVEMENT</h1>
						<iframe width="80%" height="472" src="https://www.youtube.com/embed/dJlFmxiL11s" frameborder="0" allowfullscreen></iframe>
				
					<h4>Your quality of life is largely dictated by one factor: your physical health. And when it comes to building and maintaining a healthy lifestyle, we all know that eating right and working out are more or less the keys.</h4>
				</div>
				<div className="pose">
				<CardArticles style={{width:"70%"}}/>
				
					<div style={{width:"30%"}} className="newsl">
						<div className="abonn">
							<h3>REJOINS NOUS</h3>
								<p>Pour recevoir toute l'actu sur le fitness</p>
								<input type="text" placeholder="Ton adresse mail" />
								<button>Envoyer</button>
							</div>
						
					<div className="boxArticle">
						<div className="actualite">
							<h4>Selection actus</h4>
								<img className="actu" src="http://www.sport-fight.net/photosJi/jujitsu1.jpg"/>
								<img className="actu" src="https://japanweekvalencia.files.wordpress.com/2013/04/dsc07276.jpg"/>
								<img className="actu" src="http://s2.lemde.fr/image/2015/07/07/534x0/4673651_6_c3db_floyd-mayweather-contre-manny-pacquiao-en-mai_b3d495e433e7735792befd2320842115.jpg"/>
								<img className="actu" src="https://img.grouponcdn.com/deal/nfxcCRuxaxCn14evCjy9/kT-960x576/v1/c700x420.jpg"/>
							</div>
						</div>
					</div>

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