

function NewTransactionPage() {
    return (
        <div>
            <h1>New Transaction</h1>

            <form action="/transactions" method="POST">
                Transaction Date: 
                <input type="date" name="date" />
                <br />

                Select Type: 
                <select name="type" id="type" size={2}>
                    <option value="deposit">Deposit</option>
                    <option value="expense">Expense</option>
                </select>
                <br />

                Select Category: 
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

                Enter Amount:
                <input type="number" name="amount" datatype="currency" />

                Add Note:
                <input type="text" name="note" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTransactionPage;