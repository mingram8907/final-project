import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <span>Welcome back, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}!</span>
      <br />
      <Link to="/dash">Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to="/transactions">All Transactions</Link>
      &nbsp; | &nbsp;
      <Link to="/transactions/new">New Transaction</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link> 
      &nbsp; | &nbsp; */}
      <Link to="" onClick={handleLogOut}>
        Sign Out
      </Link>
    </nav>
  );
}

export default NavBar;
