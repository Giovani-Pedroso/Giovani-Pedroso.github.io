import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams, useEffects} from 'react-router-dom';
import test from '../Articles/blog/teste.md';

export default function Blog({onPage}){


    
    const testeMarkdowm = "# This is a title \n\n This is a paragraph ";
    onPage("----");
    
    const params = useParams();
    
    return(
        <div>
          <h1> Article {params.articleN}</h1>
          {test}
          <ReactMarkdown children={testeMarkdowm}/>
        </div>
    );

}
