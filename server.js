// server.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected!');
  
  const {
    createPerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    addFoodAndSave,
    updatePersonAge,
    deleteById,
    deleteManyMary,
    queryChain
  } = require('./functions');


 createManyPeople([
    { name: 'Alice', age: 30, favoriteFoods: ['Pasta', 'Salad'] },
    { name: 'Bob', age: 25, favoriteFoods: ['Pizza', 'Sushi'] },
    { name: 'Charlie', age: 28, favoriteFoods: ['Burger', 'Fries'] }
  ]);
})
.catch(err => console.error('❌ MongoDB connection error:', err));
