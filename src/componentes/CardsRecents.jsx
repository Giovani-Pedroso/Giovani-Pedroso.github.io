import React from 'react';
import image from '../content/images/test.png';


import Card from '../componentes/CardRecents.jsx';

export default function Cards({data, style}){

    return(
        <div>
          {data.articles.map( article =>{
              
              return <Card
                       style={style}
                       title={article.title}
                       img={article.img}
                       description={article.description}
                       link={article.link}
                     />;
          })}
        </div>
    );


}


