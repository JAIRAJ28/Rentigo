
import React, { useState } from 'react';
import { offerMenu } from './offermenu';
import './offermenudrop.css';
import { Link } from 'react-router-dom';

function Offerdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'menudown-menu clicked' : 'menudown-menu'}
      >
        {offerMenu.map((item, index) => {
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

export default Offerdown;