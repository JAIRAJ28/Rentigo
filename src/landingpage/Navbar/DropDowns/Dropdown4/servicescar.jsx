import React, { useState } from 'react';
import './servicescar.css';
import { Link } from 'react-router-dom';
import { carserviceslist } from './servicescars.list';
function Servicecar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'service-menu clicked' : 'service-menu'}
      >
        {carserviceslist.map((item, index) => {
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

export default Servicecar;