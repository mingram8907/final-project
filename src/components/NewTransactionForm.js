import { useState } from "react";
import { addTransaction } from "../utilities/transactions-service";
import { useNavigate } from "react-router-dom";


function NewTransactionForm({setTransaction}) {
    const [transactionFormData, setTransactionFormData] = useState({
        date: "",
        type: "",
        category: "",
        amount: "",
        note: "",
        error: ""
    })

    const navigate = useNavigate()

    const handleTransactionFormSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(transactionFormData);

            const newTransaction = {
                date: transactionFormData.date,
                type: transactionFormData.type,
                category: transactionFormData.category,
                amount: transactionFormData.amount,
                note: transactionFormData.note
            }

            //********** NEW **********//
            const transaction = await addTransaction(newTransaction);
            console.log(transaction);
            setTransaction(transaction)
            navigate('/transactions')
            //********** NEW **********//

        } catch (error) {
            setTransactionFormData({...transactionFormData, error: "New Transaction Failed - Try Again"})
        }
    }

    const handleTransactionFormChange = (evt) => {
        setTransactionFormData({...transactionFormData, [evt.target.name]: evt.target.value, error: ""})
    }

    return (
        <div>
            <div>
                <form autoComplete="off" onSubmit={handleTransactionFormSubmit}>
                    <label>Transaction Date:</label>
                    <input type="date" name="date" value={transactionFormData.date} onChange={handleTransactionFormChange} required />
                    
                    
                    <label>Select Type:</label>
                    <select name="type" id="type" size={2} value={transactionFormData.type} onChange={handleTransactionFormChange} required >
                        <option value="deposit">Deposit</option>
                        <option value="expense">Expense</option>
                    </select>
                    

                    <label>Select Category:</label>
                    <select name="category" id="category" size={4}  value={transactionFormData.category} onChange={handleTransactionFormChange} required>
                        <option value="paycheck">Paycheck</option>
                        <option value="gift">Gift</option>
                        <option value="gas">Gas</option>
                        <option value="parking">Parking</option>
                        <option value="rent-mortgage">Rent/Mortgage</option>
                        <option value="bill">Bill</option>
                        <option value="groceries">Groceries</option>
                        <option value="food">Food</option>
                    </select>
                    

                    <label>Enter Amount:</label>
                    <input type="number" name="amount" value={transactionFormData.amount} onChange={handleTransactionFormChange} required />
                    

                    <label>Add Note:</label>
                    <input type="text" name="note" value={transactionFormData.note} onChange={handleTransactionFormChange} />
                    

                    <button type="submit">Submit</button>
                </form>
            </div>

            <p>{transactionFormData.error}</p>
        </div>
    )
}

export default NewTransactionForm;