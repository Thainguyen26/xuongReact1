import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const nav = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"))?.user?.email;

  const logout = () => {
    localStorage.removeItem("user");
    nav("/login");
  };
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {email ? (
          <li>
            <button onClick={logout}>Hello {email} - Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </header>
  );
}
