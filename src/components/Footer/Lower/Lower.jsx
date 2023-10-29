// @flow
import React from 'react';
import './Lower.scss';
import {  AiOutlineCopyrightCircle  } from 'react-icons/ai';
import '../../Navigation/Navigation.scss';

const Lower = () => {
  return (
  <div className='lower-details-container'>
    <div className='lower'>
      <ul >
        <li className="">
        <AiOutlineCopyrightCircle className='copy-right' /> <a data-nav-event-clicked="For designers" href="/hiring"> 2023 Dribbble</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Hire talent" href="/shots/popular">Terms</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Inspiration" href="/learn">Privacy</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Advertising" href="/jobs">Cookies</a>
        </li>
      </ul>
    </div>
    
    <div className='links-container'>
    <ul className="lower-ul">
    <li className="">
          <a data-nav-event-clicked="About" href="/pro">Jobs</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Careers" href="/pro">Designers</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Support" href="/pro">Freelancers</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Support" href="/pro">Tags</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Support" href="/pro">Places</a>
        </li>
        <li className="">
          <a data-nav-event-clicked="Support" href="/pro">Resources</a>
        </li>
    </ul>
      
    </div>
  </div>)
};


export default Lower;

