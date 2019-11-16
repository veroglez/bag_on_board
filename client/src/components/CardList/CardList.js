import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Card } from '..';
import styles from './CardList.module.scss';

const CardList = ({ cards = [] }) => (
  <div className={styles.container}>
    {cards.map((passenger, index) => (
      <Card key={index.toString()} passenger={passenger} />
    ))}
  </div>
);

CardList.propTypes = {
  cards: arrayOf(shape({})).isRequired,
};

export default CardList;
