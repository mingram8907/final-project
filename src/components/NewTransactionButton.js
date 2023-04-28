import { Link } from "react-router-dom";

function NewTransactionButton() {
    return (
        <div>
            <Link to="/transactions/new">
                <button type="button">
                    New Transaction
                </button>
            </Link>
        </div>
    )
}

export default NewTransactionButton;