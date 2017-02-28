import React from 'react';
import './Card.css';
import contenu from './data.js';


class CardArticles extends React.Component {

  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1>NewsLetters </h1>
            </div>
              { contenu.articles.map(menu =>
                <div className="Card">
                  <img src={menu.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{menu.name}</div>
                    <div className="desc">{menu.description}</div>
                  </div>
                  </div>
                )}
          </div>
        
      </div>


    );
  }
}

export default CardArticles;
