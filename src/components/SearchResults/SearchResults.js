import React, { useState } from 'react';
import Product from '../Product/Product';
import PageButton from '../PageButton/PageButton';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const SearchResults = props => {
  const productsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const ccurrentProducts = useSelector(state => state.products.currentProducts);
  const products = useSelector(state => state.products.products.filter(v => _.includes(ccurrentProducts, v.id)));

  const handleClick = e => {
    const newPage = Number(e.target.id);
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    setCurrentPage(newPage);
  }

  const routeToFisrtPage = e => {
    setCurrentPage(1);
  }

  const incrementPage = e => {
    const newPage = currentPage < pageNumbers.length?currentPage + 1 : currentPage;
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    setCurrentPage(newPage);
  }

  const decrementPage = e => {
    const newPage = currentPage > 1 ? currentPage - 1 : currentPage;
    const firstPage = newPage - 1 > 0? (newPage - 2 > 0? newPage - 2: newPage - 1) : newPage;
    let newPages = [];
    for(let i = 0; i < 5; i++)
      newPages.push(firstPage+i);
    setCurrentPage(newPage);
  }

  const mapProducts = product => {
    return (
      <Product key={product.id} product={product} />
    );
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const productsList = currentProducts.map(mapProducts);
  console.log(currentProducts)

  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
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
      <p style={{fontSize: 25}}>No beers found</p>
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

export default SearchResults;