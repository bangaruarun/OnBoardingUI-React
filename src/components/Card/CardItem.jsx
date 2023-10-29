// @flow
import React from 'react';
import './Card.scss';
import Card from './Card';


const dummyData = [
    {
        img:"https://cdn.dribbble.com/users/5536359/screenshots/18186519/media/7c29cc4d7812c0ad0fd453280ea9ffd9.png?resize=450x338&vertical=center",
        title:"The Everyday Salad",
        description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
    },
    {
        img:"https://cdn.dribbble.com/users/5536359/screenshots/15647939/media/c85f959aae0f2a34e87b5ead55462626.png?resize=450x338&vertical=center",
    },{
        img:"https://cdn.dribbble.com/users/5536359/screenshots/15634117/media/3e9de4ded3d785b76394d5d99db7964d.png?resize=450x338&vertical=center",
    },{
        img:"https://cdn.dribbble.com/users/5536359/screenshots/14568997/media/c7dad89901827d60a79f8189cfc81f65.jpg?resize=450x338&vertical=center",
    }

]


const CardItem  = (props) => {
   
  return (
    <div  className='card-details-container'>
         <div className='h2-left'>More by Eren</div>
    <div className="wrapper">
        {
            dummyData?.map((el)=> {
                return(
                <Card img={el.img} />
                )
            })
        }
   
  </div>
  </div>
  );
};


export default CardItem;
