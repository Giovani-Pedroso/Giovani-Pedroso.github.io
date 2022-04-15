
import React from 'react';
import image from '../content/images/test.png';

import './CardRecents.css';



export default function CardProjeto ({img, description, link, title, style}){
   // const ima
    return(
        <div className="card-projects-recent"  style={style}>
          <div className="title-image-recent">
            <div className="title-recent">
              <h1>{title}</h1>
              
            </div>
        <p>{description}</p>
          <a href={link} target="_blank">
            <button className="button-card-recent">See More</button>
          </a>
          </div>

        </div>
    );
}
