import React from 'react';
import '../index.css';

export default function Card(props) {
  let { name, price, available, image, onClick } = props;
  return (
    <div className='card'>
      <div className='wrapper'>
        <div className='color_bg'>
          <div className='card_img'></div>
          <div className='heart'></div>
          <div className='cardInfo'>
            <h1>{name}</h1>
            <img alt='item' className='photo' src={image} />
            <p className='available'>{available}</p>
            <div className='priceGroup'>
              <p className='price'>{price}</p>
            </div>
            <div className='cart'>
              <svg
                onClick={onClick}
                className='outCart'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 64'
              >
                <path d='M2 6h10l10 40h32l8-24H16'></path>
                <circle cx='23' cy='54' r='4'></circle>
                <circle cx='49' cy='54' r='4'></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
