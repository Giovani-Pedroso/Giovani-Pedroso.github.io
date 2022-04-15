import React from 'react';
import './Web.css';

import {motion} from 'framer-motion';
import data from '../content/web.json';

import Cards from '../componentes/Cards.jsx';
export default function Web ({page, onPage}){

    
    onPage("web");

    return(
        <motion.div
          intial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0,transition:{duration:0.3}}}
        >
        <div className="container-cards">
          <div className="projects">
            <Cards data={data}/>
          </div>
        </div>
        </motion.div>
    );


}
