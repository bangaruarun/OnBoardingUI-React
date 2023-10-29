// @flow
import React from 'react';
import './UserDetails.scss';


const UserDetails = () => {
  return (
    <>
      <div className='user-details-container'>
        <span className="user-avatar-line"></span>
        <div className='avatar'>
          <img src="https://cdn.dribbble.com/users/5536359/avatars/normal/1f79c9c4f05475024696ad63dc16a34b.png?1682437458" width="48px" height="48px" />
        </div>
        <span className="user-avatar-line"></span>
      </div>
      <div>Eren</div>
      <div className='let-create'>
        let's create something amazing
      </div>
      <div>
      <span className='work-with-me-btn'>
      Work with me
      </span>
      </div>
    </>
  )
};


export default UserDetails;
