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
				<div className="contact"></div>
			</div>

	    )

	}
}

export default Footer;
