import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/userRoute'
const app = express();

import database from './db';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

database.sync().then(() => {
    console.log('-- Database was created! --');
    const API_PORT = process.env.API_PORT || 3000;
    app.listen(API_PORT, () =>
      console.log(`Server running on port ${API_PORT}, ENV: ${process.env.NODE_ENV}`)
    );
});