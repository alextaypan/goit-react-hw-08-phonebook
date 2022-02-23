import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const styles = {
  textDecoration: 'none',
  color: 'white',
  marginLeft: '20px',
  fontSize: '24px',
  fontWeight: 500,
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink style={styles} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink style={styles} to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
