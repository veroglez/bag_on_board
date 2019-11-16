import cors from 'cors';
import express from 'express';
import createError from 'http-errors';
import bodyParser from 'body-parser';
import routesCards from './routes/cards';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/cards', routesCards);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.json({ error: err.status, message: err.message });
  next();
});

module.exports = app;
