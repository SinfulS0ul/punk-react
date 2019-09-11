export const GETTING_DETAILS = 'GETTING_DETAILS';
export const GETTING_PRODUCTS = 'GETTING_PRODUCTS';
export const TOGGLE_POPUP = 'TOGGLE_POPUP';
export const SET_FETCHED_PAGES = 'SET_FETCHED_PAGES';
export const SET_PAGE = 'SET_PAGE';

export const gettingProducts = products =>({
  type: GETTING_PRODUCTS,
  payload: products
});

export const gettingDetails = product =>({
  type: GETTING_DETAILS,
  payload: product
});

export const togglePopup = show =>({
  type: TOGGLE_POPUP,
  payload: show
});

export const setFetchedPages = pages =>({
  type: SET_FETCHED_PAGES,
  payload: pages
});

export const setPage = page =>({
  type: SET_PAGE,
  payload: page
});