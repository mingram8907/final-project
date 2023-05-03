const Transaction = require('../../models/transaction')

module.exports = {
    create
};

async function create(req, res) {
   try {
    const transaction = await Transaction.create(req.body)
    console.log(transaction);
    res.json(transaction)
   } catch (error) {
    res.status(400).json(error)
   }
}