import NewTransactionForm from "../components/NewTransactionForm";
import { useState } from "react";

function NewTransactionPage() {
    const [transaction, setTransaction] = useState(null)

    return (
        <div>
            <h1>New Transaction</h1>

            <NewTransactionForm setTransaction={setTransaction}/>
        </div>
    )
}

export default NewTransactionPage;