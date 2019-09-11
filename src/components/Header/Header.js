import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Header.scss';

const Header = props => {
    return (
      <div className='header'>
        <AppBar position='fixed'>
          <Toolbar className='toolbar'>
            <Button>
              <NavLink className='nav-link' to={`/catalog`} exact>Home</NavLink>
            </Button>
            <Button>
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Header;
