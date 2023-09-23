import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone} = user
    return (
        <div>
            <h2>User Details</h2>
            <h2>User Name : {name}</h2>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default UserDetails;