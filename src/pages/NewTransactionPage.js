

function NewTransactionPage() {
    return (
        <div>
            <h1>New Transaction</h1>

            <form action="">
                Transaction Date: 
                <input type="datetime-local" name="date" />
                <br />

                Type: 
                <select name="type" id="type" size={2}>
                    <option value="deposit">Deposit</option>
                    <option value="expense">Expense</option>
                </select>
                <br />

                Category: 
                <select name="category" id="" size={4}>
                    <option value="paycheck">Paycheck</option>
                    <option value="gift">Gift</option>
                    <option value="gas">Gas</option>
                    <option value="parking">Parking</option>
                    <option value="rent-mortgage">Rent/Mortgage</option>
                    <option value="bill">Bill</option>
                    <option value="groceries">Groceries</option>
                    <option value="food">Food</option>
                </select>

                Amount:
                <input type="number" name="amount" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTransactionPage;