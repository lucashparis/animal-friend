import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express'

const app = express();

import database from './db';
import User from './src/models/user';

database.sync().then(() => {
    console.log('-- Database was created! --');
    const API_PORT = process.env.API_PORT || 3000;
    app.listen(API_PORT, () =>
      console.log(`Servidor na posrta ${API_PORT}, ENV: ${process.env.NODE_ENV}`)
    );
});