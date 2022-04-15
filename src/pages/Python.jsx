import React from 'react';
import './Web.css';

import {motion} from 'framer-motion';

import Cards from '../componentes/Cards.jsx';
import data from '../content/python.json';

export default function Python ({page, onPage}){

    onPage("python");
    
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
