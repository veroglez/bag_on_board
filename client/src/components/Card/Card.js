import React from 'react';
import { shape, number, string } from 'prop-types';

import style from './Card.module.scss';

const Card = ({ passenger = {} }) => {
  return (
    <div className={style.container}>
      <p className={style.name}>{passenger.name}</p>
      <p className={style.bags}>{passenger.bags}</p>
    </div>
  );
};

Card.propTypes = {
  passenger: shape({}).isRequired,
};

export default Card;