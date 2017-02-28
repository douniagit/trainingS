import React from 'react';
import './Card.css';
import contenu from './data.js';


class CardArticles extends React.Component {

  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1 style={{color:"white",backgroundColor:"orange",width:"100%",height:"60px", marginTop:"0",marginLeft:"0", paddingTop:"20px",paddingLeft:"20px"}}>EN ACTU CHEZ NOUS:</h1>
            </div>
              { contenu.articles.map(menu =>
                <div style={{marginTop:"0", height:"600px"}} className="Card">
                  <img src={menu.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{menu.name}</div>
                    <div style={{height:"500px", borderBottom:"none"}} className="desc">{menu.description}</div>
                  </div>
                  </div>
                )}
          </div>
        
      </div>


    );
  }
}

export default CardArticles;
