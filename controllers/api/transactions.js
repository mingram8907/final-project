const Transaction = require('../../models/transaction')

module.exports = {
    index
};

async function index(req, res) {
   try {
    const transaction = await Transaction.create(req.body)
    console.log(transaction);
    
   } catch (error) {
    res.status(400).json(error)
   }
}