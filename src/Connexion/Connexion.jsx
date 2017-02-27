import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import "../Inscription/Inscription.jsx";

export default class Connexion extends React.Component {

    render(){
        return(
        <div className="Connexion">
            <Navbar />
            <div className="connect">
                <form action="/action_page.php">
                    <label for="fname">Prémon</label>
                    <input type="text" id="fname" name="firstname" placeholder="ton prénom..."/>
                    <label for="lname">Mail</label>
                    <input type="text" id="lname" name="mail" placeholder="ton email..."/>
                    <input type="submit" value="Se connecter"/>
                  </form>
               </div>
            <Footer />
        </div>

        )

    }
}