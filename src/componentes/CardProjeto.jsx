import React from 'react';
import image from '../content/images/test.png';

import './CardProjeto.css';



export default function CardProjeto ({img, description, link, title, style}){
   // const ima
    return(
        <div className="card-projects"  style={style}>
          <div className="title-image">
            <h1>{title}</h1>
            <img className="images" src={img}/>
          </div>

          <p>{description}</p>
          <hr/>
          <a href={link} target="_blank">
            <button className="button-card">See More</button>
          </a>
        </div>
    );
}
