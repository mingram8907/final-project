const mongoose = require('mongoose')

//* Mongoose Transaction Schema (Blueprint)
const transactionSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    type: {type: String, required: true},
    category: {type: String, required: true},
    amount: {type: Number, required: true},
    note: {type: String, maxLength: 255}
}, { 
    timestamps: true,
    toJSON: function(doc, ret) {
        return ret;
    } 
});


const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction