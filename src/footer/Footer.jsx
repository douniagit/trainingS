import React from 'react';
import './Footer.css';
import { Link } from 'react-router';


class Footer extends React.Component {

	render(){
		return(
			<div className="footer">

				<div className="infog">
				    <img className="logo2" alt="" src="http://www.logopub.net/data/thumbnails/5/Dodge%20Sport.png"/>
				    <p>Copyright 2017©SportS</p>
				</div>
				
				<div className="CGA">
					<ul>
						<li>FAQ</li>
						<li>MENTIONS LÉGALES</li>
						<li>CONDITIONS GÉNÉRALES DE VENTE</li>
					</ul>
				</div>
				<div className="CGA">
					<Link to="/home" className="mail"><i className="fa fa-envelope" aria-hidden="true"></i></Link>

				</div>
			</div>

	    )

	}
}

export default Footer;
