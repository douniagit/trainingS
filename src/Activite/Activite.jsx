import React from 'react';
import contenu from '../Card/data.js';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";


export default class Activite extends React.Component {

	state:{
		menu:contenu;
	}


	render(){
		return(
		<div className="Activite">
		<Navbar />
			<div className="Fitness">
				<h2>Fitness</h2>
				<br/>
				<div className="text">
					<p></p>
				</div>
				<div className='illust'>
					<img src={contenu.activites.image1} alt="a"/>
				</div>
			</div>
			<div className="Musculation">
				<h2>Musculation</h2>
					<div className="text">
					<p>{contenu.articles.description}</p>
				</div>
					<div className='illust'>
						<img src={contenu.activites.image2} alt="a"/>
					</div>
				<br/>
			</div>
			<div className="Jujitsu brésilien">
				<h2>Jujitsu Brésilien</h2>
					<div className="text">
					<p>{contenu.articles.description}</p>
				</div>
					<div className='illust'>
						<img src={contenu.activites.image3} alt="a"/>
					</div>
				<br/>
			</div>
			<div className="Karaté">
				<h2>Karate</h2>
					<div className="text">
					<p>{contenu.articles.description}</p>
				</div>
					<div className='illust'>
						<img src={contenu.activites.image4} alt="a"/>
					</div>
				<br/>
			</div>
			<div className="Judo">
				<h2>Judo</h2>
					<div className="text">
					<p>{contenu.articles.description}</p>
				</div>
					<div className='illust'>
						<img src={contenu.activites.image5} alt="a"/>
					</div>
				<br/>
			</div>
			<div className="Boxe">
				<h2>Boxe</h2>
					<div className="text">
					<p>{contenu.articles.description}</p>
				</div>
					<div className='illust'>
						<img src={contenu.activites.image6} alt="a"/>
					</div>
				<br/>
			</div>
			<Footer />
		</div>

	    )

	}
}