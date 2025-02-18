import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

import authRouter from './routers/auth.js';
import contactsRouter from './routers/contacts.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the Phonebook API!',
    });
  });

  app.use('/users', authRouter);

  app.use('/contacts', contactsRouter);

  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
