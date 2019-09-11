import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Details from '../Details/Details';
import Popup from '../Popup/Popup';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gettingProducts } from '../../store/actions/actions';
import { PUNKLINK } from '../../constants';
import './App.scss';

const App = props => {
  const product = useSelector(state => state.products.product);
  const popupShow = useSelector(state => state.popup.show);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${PUNKLINK}/beers?page=1&per_page=12`)
      .then(res => res.json())
      .then(productList =>  dispatch(gettingProducts(productList)));
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route
          path={`/catalog`}
          exact
          component={Home}
        />
        <Route
          path='/search_results'
          exact
          component={SearchResults}
        />
        <Route
          path='/about'
          exact
          component={About}
        />
        <Route
          path={`/catalog/${product.id}`}
          exact
          render={() =>
            <Details 
              product={product}
            />
          }
        />
      </Switch>
        {props.location.pathname !== `/catalog/${product.id}` && popupShow ? <Popup /> : null}
    </div>
  );
}

export default withRouter(App);
