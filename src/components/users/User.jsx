import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div style={{border:'2px solid gray', padding:'10px', borderRadius: '10px'}}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
