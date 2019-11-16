import cardsMock from 'common/cards.json';
import cards from './cards';

describe('/cards:', () => {
  it('/getCards:', () => {
    const method = cards.getcards;
    expect(method).toStrictEqual(cardsMock.results);
  });
});
