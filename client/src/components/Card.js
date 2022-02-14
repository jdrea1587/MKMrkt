import React from 'react';
import '../index.css';

export default function Card(props) {
  let { name, price, available, image, onClickCart, onClickDelete } = props;
  return (
    <div className='card'>
      <div className='wrapper'>
        <div className='color_bg'>
          <div className='card_img'></div>
          <div className='heart'>
            <div className='flex2'>
              {onClickDelete ? (
                <svg
                  onClick={onClickDelete}
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z' />
                </svg>
              ) : null}
            </div>
          </div>
          <div className='cardInfo'>
            <h1>{name}</h1>
            <img alt='item' className='photo' src={image} />
            <p className='available'>{available}</p>
            <div className='priceGroup'>
              <p className='price'>{price}</p>
            </div>
            <div className='cart'>
              <div className='flex1'>
                <svg
                  onClick={onClickCart}
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
    </div>
  );
}
