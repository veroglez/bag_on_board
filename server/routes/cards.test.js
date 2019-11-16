import supertest from 'supertest';
import cardsMock from 'common/cards';
import app from '../server';

const request = supertest(app);

describe('/server:', () => {
  it('/cards', async (done) => {
    const response = await request.get('/cards');
    done();
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(cardsMock.results);
  });
});
