
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import postRoutes from './routes/posts.js';

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/posts')

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL= 'mongodb+srv://naseeryusuf:ReasoN456@cluster0.gzck8ll.mongodb.net/'; 
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);