import React from 'react';


import {motion} from 'framer-motion';
import Cards from '../componentes/Cards.jsx';

import './Web.css';

import data from '../content/embedded.json';

const stylePyhon={
//    backgroundColor:"#004400"

};

export default function Embedded ({page, onPage}){

    onPage("embedded");
    return(
        <motion.div
          intial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0,transition:{duration:0.3}}}
        >
        <div className="container-cards">
          <div className="projects">
            <Cards data={data} style={stylePyhon}/>
          </div>
        </div>
        </motion.div>
    );


}
