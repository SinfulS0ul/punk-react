import React from 'react';
import './Details.scss';

const Details = props => {
  const { product } = props;
  const mapFood = (food, num) => {
    return (
      <li key={num}>
        {food}
      </li>
    );
  };
  
  const food = product.food_pairing.map(mapFood);
  return (
    <div className='details'>
      <div className='main-info'>
        
        <img
          className='main-info__img'
          src={product.image_url}
          alt=''
        />
        
      </div>
      <div className='more-info'>
        <p className='more-info__name'>{product.name}</p>
        <p>{product.description}</p>
        <p>{`First brewed: ${product.first_brewed}`}</p>
        <p>{`Alcohol by volume: ${product.abv}`}</p>
        <p>{`International bitterness units: ${product.ibu}`}</p>
        <p>{'Delicious with:'}</p>
        <ul>{food}</ul>
        <p>{product.brewers_tips}</p>
      </div>
    </div>
  );
};

export default Details;