// @flow
import React from 'react';
import './UserHeader.scss';
import { isMobile } from 'react-device-detect';


const UserHeader = () => {
  return (<div className='user-header-container'>
    <div className='user-header-details'>
    <div className='avatar'>
      <img src="https://cdn.dribbble.com/users/5536359/avatars/normal/1f79c9c4f05475024696ad63dc16a34b.png?1682437458" width="48px" height="48px" />
    </div>
    <div className='shot-header-details'>
      <span className='shot-header-text'>Onboarding #Exploration</span>
      <div className='shot-header-user-details'>
        <div>Eren</div>
        <div className='user-separator'>.</div>
        <div>Follow</div>
      </div>
    </div>
    </div>
    {!isMobile && <div className='work-with-me'>
      <span className='work-with-me-btn'>
      Work with me
      </span>
    </div>}
  </div>)
};


export default UserHeader;
