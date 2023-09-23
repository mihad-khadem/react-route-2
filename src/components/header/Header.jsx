import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h2>My Website</h2>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;