import React from 'react';

import { Routes, Route, useLocation} from 'react-router-dom';

//Import pages
import Home from '../pages/Home.jsx';
import Python from '../pages/Python.jsx';
import Embedded from '../pages/Embedded.jsx';
import Web from '../pages/Web.jsx';
import WebArticle from '../pages/WebArticle.jsx';
import Blog from '../pages/Blog.jsx';
import Articles from '../pages/Articles.jsx';

import {AnimatePresence} from 'framer-motion';

export default function AnimatedRoutes ({handlePageSelect}){

    const location = useLocation();

    return(
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onPage={handlePageSelect} />}/>
            <Route path="/python" element={<Python onPage={handlePageSelect} />}/>
            <Route path="/embedded"
                   element={<Embedded                          onPage={handlePageSelect} />}/>
            
            <Route path="/web" element={<Web onPage={handlePageSelect} />}/>
            <Route path="/web/:article" element={<WebArticle onPage={handlePageSelect} />}/>
            <Route path="/blog" element={<Blog onPage={handlePageSelect} />}/>
            <Route path="/blog/:articleN" element={<Articles onPage={handlePageSelect} />}/>

          </Routes>
        </AnimatePresence>
    );
}


/*


          <Routes path="*" element={"aaaaaaaa"}/>
 */
