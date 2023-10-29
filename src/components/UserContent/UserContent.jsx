// @flow
import React from 'react';
import './UserContent.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const UserContent = () => {
  return (<div>
    <div class="shot-description-container">
      <div className='carousel-container'>
        <Carousel>
          <div>
            <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/06bc6339376b3706107a2417504fb7bc.png?resize=320x240&vertical=center" />
          </div>
          <div>
            <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/8b9ef9c9674765a5e7ea61def948c00d.png?resize=450x338&vertical=center" />
          </div>
          <div>
            <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/d77ed60b00c2df50b29b3632795bcb5f.png?resize=700x525&vertical=center" />
          </div>
          <div>
            <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/abb619f82c5e36d2eab702918a0e50e9.png?resize=700x525&vertical=center" />
          </div>
          <div>
            <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/a7a609de385587bef407b934806655a5.png?resize=840x630&vertical=center " />
          </div>
        </Carousel>
      </div>
      <div className='short-description-details'>
        <p>Yo, what's up guys! 🥳</p><p>It's tiring to write a different description for each shot, just like the shot and move on, love ya! 😘</p><p>Let's create something amazing together! 🧑‍🎨</p><p>Feel free to contact me at - <a href="mailto:hi@eren.design" rel="noreferrer nofollow">hi@eren.design</a></p>
      </div>
    </div>
  </div>)
};


export default UserContent;
