// @flow
// @flow
import React from 'react';
import { FaTwitter, } from 'react-icons/fa6';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import '../../Navigation/Navigation.scss';
import Logo from '../../../Assets/Images/Logo';
import { isMobile } from 'react-device-detect';

import './Upper.scss';


const Upper = () => {
  return (<>
    {isMobile ? (<div className='mob-ftr'>
      <div className='logo-container-ftr'>
        <Logo />
      </div>
      <div className='upper-ftr'>
        <ul className="upper-ul-ftr">
          <li className="">
            <a data-nav-event-clicked="For designers" href="/hiring">For designers</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Hire talent" href="/shots/popular">Hire talent</a>
          </li>
          <li className="">
            <a data-nav-event-clicked="Inspiration" href="/learn">Inspiration</a>
          </li>
        </ul>
        <ul className="upper-ul-ftr">
          <li className="">
              <a data-nav-event-clicked="Advertising" href="/jobs">Advertising</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="About" href="/pro">About</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Careers" href="/pro">Careers</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Support" href="/pro">Support</a>
            </li>

          </ul>
      </div>
    </div>) : (
      <div className='upper-details-container'>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='upper'>
          <ul className="upper-ul">
            <li className="">
              <a data-nav-event-clicked="For designers" href="/hiring">For designers</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Hire talent" href="/shots/popular">Hire talent</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Inspiration" href="/learn">Inspiration</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Advertising" href="/jobs">Advertising</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="About" href="/pro">About</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Careers" href="/pro">Careers</a>
            </li>
            <li className="">
              <a data-nav-event-clicked="Support" href="/pro">Support</a>
            </li>

          </ul>
        </div>

        <div className='media-container'>
          <a class="login" href="/session/new"><FaTwitter /></a>
          <a class="login" href="/session/new"><AiFillFacebook /></a>
          <a class="login" href="/session/new"><AiOutlineInstagram /></a>
          <a class="login" href="/session/new"><BsPinterest /></a>


        </div>
      </div>)}
  </>

  )

};


export default Upper;
