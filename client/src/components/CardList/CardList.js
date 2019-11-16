import React, { PureComponent } from 'react';
import { arrayOf, shape } from 'prop-types';
import { Card } from '..';
import styles from './CardList.module.scss';


const CardList = ({ cards = [] }) => {
  return (
    <div className={styles.container}>
      {cards.map(passenger => (
        <Card passenger={passenger} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  cards: arrayOf(shape({})).isRequired,
};

export default CardList;