const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dev:JtTDA1TljkeoWeda@cluster0.81sgd.mongodb.net/Budget?authSource=admin&replicaSet=atlas-wmqb6e-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

const Depense = require('./Depense');

module.exports = {
  depense : Depense,
}