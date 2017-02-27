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
				
				<div className="contact">
					<ul>
						<li>FAQ</li>
						<li>MENTIONS LÉGALES</li>
						<li>CONDITIONS GÉNÉRALES DE VENTE</li>
					</ul>
				</div>
				
			</div>

	    )

	}
}

export default Footer;
