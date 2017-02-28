import React from 'react';
import './Card.css';
import contenu from './data.js';


class CardDiet extends React.Component {

  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1>Nos différentes formules dietetiques</h1>
            </div>
              { contenu.diet.map(menu =>
                <div className="Card">
                  <img src={menu.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{menu.name}</div>
                    <div className="desc">{menu.description}</div>
                  </div>
                  <div className="wrapp">
                  <div className="price">{menu.price}</div>
                    <a href="#"><div className="add">Souscrire</div></a>
                    </div>
                  </div>
                )}
          </div>
        
      </div>


    );
  }
}

export default CardDiet;
