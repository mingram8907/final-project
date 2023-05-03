import * as transactionsAPI from './transactions-api'

export async function addTransaction(newTransaction) {
    console.log('[From addTransaction function]', newTransaction);

    const transaction = await transactionsAPI.addTransaction(newTransaction);
    console.log(transaction);
    return transaction;
}