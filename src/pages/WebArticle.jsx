import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams, useEffects} from 'react-router-dom';
import test from '../Articles/blog/teste.md';
import data from '../content/articles/web.json';
import './Article.css';

export default function Blog({onPage}){

    const params = useParams();
    //const num = parseInt(params.article);
    //console.log(num);
    const num = parseInt(params.article); 

    const testeMarkdowm = data.articles[num];
    
    
    onPage("----");
    
    
    return(
        <div className="markdown">
          <div className="content">
            <h1> Article {params.article}</h1>
            <ReactMarkdown children={testeMarkdowm}/>
          </div>
        </div>
    );

}
