import { Link } from "react-router-dom";

function AllTransactionsButton() {
    return (
        <div>
            <Link to="/transactions">
                <button type="button">
                    All Transactions
                </button>
            </Link>
        </div>
    )
}

export default AllTransactionsButton;