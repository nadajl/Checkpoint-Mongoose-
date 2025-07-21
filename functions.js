const Person = require('./model/person');

const createPerson = () => {
  const person = new Person({
    name: 'Mariem',
    age: 24,
    favoriteFoods: ['Pizza', 'Salade']
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    console.log('✔️ Person saved:', data);
  });
};
const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log('✔️ People added:', people);
  });
};
const findPeopleByName = (name) => {
  Person.find({ name }, (err, data) => {
    if (err) return console.error(err);
    console.log('🔍 Found people:', data);
  });
};
const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    console.log('🔍 Found by food:', person);
  });
};
const findPersonById = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log('🔍 Found by ID:', person);
  });
};
const addFoodAndSave = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push('hamburger');
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log('🍔 Food added:', updatedPerson);
    });
  });
};
const updatePersonAge = (personName) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, updatedDoc) => {
      if (err) return console.error(err);
      console.log('🔄 Updated person:', updatedDoc);
    }
  );
};
const deleteById = (personId) => {
  Person.findByIdAndRemove(personId, (err, deletedPerson) => {
    if (err) return console.error(err);
    console.log('❌ Deleted:', deletedPerson);
  });
};
const deleteManyMary = () => {
  Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return console.error(err);
    console.log('🗑️ Delete result:', result);
  });
};
const queryChain = () => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log('🔗 Chained result:', data);
    });
};
