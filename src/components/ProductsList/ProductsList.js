import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import PageButton from '../PageButton/PageButton';
import { useSelector, useDispatch } from 'react-redux';
import { gettingProducts, setFetchedPages, setPage } from '../../store/actions/actions';
import { PUNKLINK } from '../../constants';
import './ProductsList.scss';

const ProductsList = props => {
  const productsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const products = useSelector(state => state.products.currentProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentProducts(products);
  }, [currentPage, products])

  const fetchProducts = page => {
    fetch(`${PUNKLINK}/beers?page=${page}&per_page=${productsPerPage}`)
      .then(res => res.json())
      .then(productList => dispatch(gettingProducts(productList)));
    dispatch(setFetchedPages(page));
  }

  const fetchPage = (newPages, page) => {
    setPages(newPages);
    fetchProducts(page);
    setCurrentPage(page);
    dispatch(setPage(page));
  }

  const handleClick = async e => {
    const newPage = Number(e.target.id);
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    fetchPage(newPages, newPage);
  }

  const routeToFisrtPage = e => {
    setPages([1, 2, 3, 4, 5]);
    setCurrentPage(1);
    dispatch(setPage(1));
  }

  const incrementPage = async e => {
    const newPage = currentPage + 1;
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    fetchPage(newPages, newPage);
  }

  const decrementPage = async e => {
    const newPage = currentPage > 1 ? currentPage - 1 : currentPage;
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    fetchPage(newPages, newPage);
  }

  const mapProducts = product => {
    return (
      <Product key={product.id} product={product} />
    );
  };

  const productsList = currentProducts.map(mapProducts);

  const renderPageNumbers = pages.map(number => {
    return (  
      <li
        className='page-number'
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </li>
    );
  });

  if(currentProducts.length === 0)
    return (
      <p style={{fontSize: 25}}>Loading...</p>
    );

  return (
    <div className='products-page'>
      <ul className='products-list'>{productsList}</ul>
      <ul className='page-numbers'>
        <PageButton func={routeToFisrtPage} page={currentPage} text={'««'} />
        <PageButton func={decrementPage} text={'«'} />
          {renderPageNumbers}
        <PageButton func={incrementPage} page={currentPage} text={'»'} />
        <PageButton func={incrementPage} text={'»»'} />
      </ul>
    </div>
  );
};

export default ProductsList;