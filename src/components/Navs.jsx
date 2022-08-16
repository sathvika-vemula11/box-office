import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'hello' },
  { to: '/starred', text: 'hello bonjour' },
];

const navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(items => (
          <li key={items.to}>
            <Link to={items.to}> {items.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default navs;
