// @flow
import React from 'react';
import './Navigation.scss';
import Logo from '../../Assets/Images/Logo'
import { isMobile } from 'react-device-detect';


const Navigation = () => {

  const onClickMobileMenu = (e) => {
    const value = e.target.checked;
    const overlayEl = document.getElementById('darkOverlay');
    overlayEl.style.visibility = value ? 'visible' : 'hidden';

    const navigationContainerEl = document.getElementById('navigationContainer');
    navigationContainerEl.style.backgroundColor = value && '#fff'
  };

  return (<>
    {isMobile && <div className="dark-overlay" id="darkOverlay"></div>}
    <div className='navigation-container' id="navigationContainer">
      {!isMobile ? (<><div className='navigation'>
        <ul className="navigation-ul">
          <li className="">
            <a data-nav-event-clicked="Hire Designers" href="/hiring">Find talent</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Inspiration" href="/shots/popular">Inspiration</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Learn Design" href="/learn">Learn design</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Jobs" href="/jobs">Jobs</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Go Pro" href="/pro">Go Pro</a>
          </li>
        </ul>
      </div>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='login-or-signup'>
          <a className="login" href="/session/new">Log in</a>
          <a className="singup" href="/signup/new">Sign up</a>
        </div></>) :
        (<>
          <div>
            <nav className="menu--left" role="navigation">
              <div className="menuToggle">
                <input type="checkbox" onClick={onClickMobileMenu}/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menuItem">
                  <li><a href="#">Find talent</a></li>
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#">Learn design</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Go Pro</a></li>
                  <li className="login-mobile"><a href="/session/new">Log in</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='logo-container'>
            <Logo />
          </div>
          <div className='login-or-signup'>

            <a className="singup" href="/signup/new">Sign up</a>
          </div>
        </>)}

    </div>
  </>)
};


export default Navigation;
