import NewTransactionButton from "../components/NewTransactionButton";
import AllTransactionsButton from "../components/AllTransactionsButton";

function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>

            <NewTransactionButton />
            <AllTransactionsButton />
        </div>
    )
}

export default DashboardPage;