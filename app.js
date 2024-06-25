import dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import { resolve } from 'path';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/AlunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import photoRoutes from './src/routes/photoRoutes';

dotenv.config();

import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(`${__dirname}/uploads`)));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/photos/', photoRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
