import React, { useState } from 'react';
import { LocationItems } from './locationlist';
import './location.css';
import { Link } from 'react-router-dom';

function Location() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'location-menu clicked' : 'location-menu'}
      >
        {LocationItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Location;