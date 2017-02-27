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
						<li>Home</li>
						<li>Notre mouvement</li>
						<li>Nos programmes sportifs
							<ul className="info">
								<li>Programme Fitness</li>
								<li>Programme Cardio</li>
								<li>Programme Musculation & Running</li>
								<li>Programme Remise en forme</li>
							</ul>
						</li>
						<li>La diététique
							<ul className="info">
								<li>Nos conseils personnalisés</li>
							</ul>
						</li>
						<li>News</li>
						<li><a href="http://store.lazarangelov.com/">Store</a></li>
					</ul>
				</div>
			</div>
		</div>
	    )

	}
}

export default Header;
