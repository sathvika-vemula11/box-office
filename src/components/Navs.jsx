import React from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import { NavList, LinkStyled } from './Nave.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const navs = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(items => (
          <li key={items.to}>
            <LinkStyled
              to={items.to}
              className={items.to === location.pathname ? 'active' : ''}
            >
              {' '}
              {items.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default navs;
