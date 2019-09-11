import React, { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Product.scss';
import { useDispatch } from 'react-redux';
import { gettingDetails, togglePopup } from '../../store/actions/actions';

const Product = props => {
  const [show, setShow] = useState(false);

  const toggle = e =>
    setShow(!show);

  const dispatch = useDispatch();

  const { product } = props;
  return (
    <>
      <NavLink
        to={`/catalog/${product.id}`}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <div
          className='list-item'
          onMouseEnter={toggle}
          onMouseLeave={toggle}
          onClick={() => { dispatch(gettingDetails(product)); dispatch(togglePopup(true)) }}
        >
          <Transition
            native
            items={show}
            from={{ position: 'absolute', overflow: 'hidden', background: 'black', color: 'white', opacity: 0.6, borderRadius: 10, width: 350, height: 0 }}
            enter={[{ height: 'auto' }]}
            leave={{ height: 0 }}>
            {show =>
              show && (props =>
                <animated.div style={props}>
                  {product.description}
                </animated.div>)
            }
          </Transition>
          <img
            className='list-item__list-img'
            src={product.image_url}
            alt=''
          />
          <p>{product.name}</p>
          <Button
            style={{ border: '2px solid white', borderRadius: '10px' }}
            variant="contained"
            color="primary"
          >
            Details
            </Button>
        </div>
      </NavLink>
    </>
  );
}


export default Product;