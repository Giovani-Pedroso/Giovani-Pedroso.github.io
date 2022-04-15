import React from 'react';
import './SocialMedias.css';



export default function SocialMedia ({page, onPage}){

    
    return(
        <div className="container-social">
          <div className="social">

            <a id = "profile-link" className="social-links" target="_blank"href="https://github.com/Giovani-Pedroso"> <img src="./Social-Medias/Github-black-0.png"></img></a>

            <a className="social-links"
               target="_blank"
               href="https://www.fiverr.com/giovani_pedroso"><img src="./Social-Medias/fiverr.png"></img></a>
            
            <a
               target="_blank"
              className="social-links" href="https://www.linkedin.com/in/giovani-sant-ana/"> <img src="./Social-Medias/linked in.png"></img></a>
            

          </div>
        </div>
    );


}
