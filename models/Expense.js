const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let expenseSchema = new Schema({
    name: {
        type: String
    },
    expense:{
        type:Number
    },
    budget: {
        type: String
    },
    userId:{
        type: String 
    },
    id:{
        type: String 
    }
  }, {
        collection: 'expenses'
    })

module.exports = mongoose.model('expenses', expenseSchema)