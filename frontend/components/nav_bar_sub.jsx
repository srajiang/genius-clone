import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';

const NavBarSub = () => {

  return (
    <div className="nav-bar-sub-wrapper">
      <div className='nav-bar-sub'>
        <div>FEATURED</div>
        <div>CHARTS</div>
        <div>ADD A SONG</div>

        <div className="nav-bar-sub-icons">

          <a target="_blank" href="https://www.linkedin.com/in/sjiang8/" className="fa-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a target="_blank" href="https://github.com/srajiang" className="fa-icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a target="_blank" href="https://github.com/srajiang" className="fa-icon"><FontAwesomeIcon icon={faPortrait} /></a>

        </div>
        

      </div>
    </div>
  )
}

export default NavBarSub; 