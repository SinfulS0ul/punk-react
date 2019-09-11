import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { togglePopup } from '../../store/actions/actions';
import './Popup.scss';


const Popup = props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product)
  return (
    <div className='popup'>
      <span className='close-button' onClick={() => dispatch(togglePopup(false))}>✘</span>
      <NavLink
        to={`/catalog/${product.id}`}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <img
          className='pop-img'
          src={product.image_url}
          alt=''
        />
        <p>{product.name}</p>
      </NavLink>
    </div>
  );
};


export default Popup;