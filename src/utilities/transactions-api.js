import sendRequest from './send-request'

const BASE_URL = '/api/transactions';


// export function addTransaction(newTransaction) {
//     return transactionSendRequest(BASE_URL, 'POST', newTransaction)
// }


// async function transactionSendRequest(url, method = 'GET', payload = null) {
//     const options = { method };

//     if (payload) {
//         options.headers = { 'Content-Type' : 'application/json' };
//         options.body = JSON.stringify(payload);
//     }

//     const res = await fetch(url, options);
//     if (res.ok) return res.json();
//     throw new Error('Bad Request')
// }


export async function addTransaction(newTransaction) {
    return sendRequest(BASE_URL, 'POST', newTransaction)
}








export function getAllTransactions() {
    return sendRequest(BASE_URL)
}

export function getTransactionById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}
