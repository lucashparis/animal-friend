import express from 'express';

const app = express();

import database from './db';
import User from './src/models/user';
database.sync();


app.listen(3000, () => {
    console.log('Server is running in port 3000');
});