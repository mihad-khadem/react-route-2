import { useLoaderData } from "react-router-dom";
import User from "./User";
import './user.css'
const Users = () => {

    const users= useLoaderData();
    return (
        <div>
            <h2>Total Users: {users.length}</h2>

            <div className="users">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;