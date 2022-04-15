import React from 'react';
import {motion} from 'framer-motion';

import './Home.css';

import SocialMedia from '../componentes/SocialMedias.jsx';


import Cards from '../componentes/CardsRecents.jsx';
import data from '../content/recents.json';

export default function Home ({page, onPage}){

    onPage("home");
    /*
      fade out
          intial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
    */

    /*
      push
          intial={{width:0}}
          animate={{width:"100%"}}
          exit={{x:"100%", transition:{duration:0.1}}}
     */
    return(
        <motion.div
          intial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0,transition:{duration:0.3}}}
        >
          <header className="home">
            <div className="intro">
              <h1>Welcome visitor</h1>
              <p>My name is <b>Giovani</b>, I'm engineer who decided to explore the world of web development here you will find projects related with React, React Native,
NodeJS, NextJs and of course some projects involving embedded platforms such as Arduino, Esp32 and STM32</p>
              <SocialMedia/>
            </div>
            <div className="recent-projects">
              <h1>Recents Projects</h1>
              <div className="card-recent">
                <Cards data={data}/>
              </div>
            </div>
          </header>
        {/*
        <div className="container-cards">
          <div className="projects">
            <Cards data={data}/>
          </div>
        </div>
        */}
        </motion.div>
    );


}

/*
            <SocialMedia/>
        <motion.div
          intial={{width:0}}
          animate={{width:"100vw"}}
          exit={{x:window.innerWidth}}
        >
          <h1>Home</h1>
        </motion.div>
 */
