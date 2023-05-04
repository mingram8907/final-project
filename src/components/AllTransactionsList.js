import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Transaction = (props) => (
    <tr>
        <td>{props.transaction.date}</td>
        <td>{props.transaction.type}</td>
        <td>{props.transaction.category}</td>
        <td>{props.transaction.amount}</td>
        <td>{props.transaction.note}</td>
        <td>
            <Link>Edit</Link> |
            <button>Delete</button>
        </td>
    </tr>
);


function AllTransactionsList() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function getTransactions() {
            const response = await fetch(`http://localhost:3000/transactions`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                return;
            }

            const records = await response.json();
            setTransactions(transactions);
        }

        getTransactions();

        return;
    }, [transactions.length])


    function transactionsList() {
        return transactions.map((transaction) => {
            return (
                <Transaction
                    transaction={transaction}
                    deleteTransaction={() => deleteTransaction(transaction._id)}
                    key={transaction._id}
                />
            )
        })
    }

    return (
        <div>
            <h4>All Transactions List</h4>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>{transactionsList()}</tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTransactionsList;