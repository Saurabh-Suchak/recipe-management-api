
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://suchaksb:12345@cluster0.ohogruw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


const recipeRoutes = require('./routes/recipeRoutes');


app.use('/recipes', recipeRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
