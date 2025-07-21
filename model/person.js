const mongoose = require('mongoose');

// Définir le schéma
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Créer le modèle
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
