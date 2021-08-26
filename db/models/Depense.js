var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DepenseSchema = new Schema(
  {
    description : { type: String , default: ""    },
    categorie   : { type: String , required: true },
    prix        : { type: String , required: true },
    date        : { type: String   , required: true },
    in          : { type: Boolean, required: true }
  }
);

module.exports = mongoose.model('Depense', DepenseSchema);