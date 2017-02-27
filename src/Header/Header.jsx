import React from 'react';
import '../navbar/Navbar.css';


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
						<li><a href="#">Home</a></li>
						<li><a href="#">Notre mouvement</a></li>
						<li><a href="#">Nos programmes sportifs
							<ul className="info">
								<li><a href="#">Programme Fitness</a></li>
								<li><a href="#">Programme Cardio</a></li>
								<li><a href="#">Programme Musculation & Running</a></li>
								<li><a href="#">Programme Remise en forme</a></li>
							</ul>
						</a></li>
						<li><a href="#">La diététique
							<ul className="info">
								<li><a href="#">Nos conseils personnalisés</a></li>
							</ul>
						</a></li>
						<li><a href="#">News</a></li>
						<li><a href="#">Store</a></li>
					</ul>
				</div>
			</div>
		</div>
	    )

	}
}

export default Header;
