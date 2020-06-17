import React, {useState} from 'react';
import UserProfile from './UserProfile';
import Button from './Button'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [showUser, setShowUser] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    
    async function getUsers() {
        setLoading(true);
        const url = "https://randomuser.me/api/?results=5";

        try {
            const res = await fetch(url);
            const data =- await res.json();
            setUsers(data.results);
        } catch (error) {
            setError(true);
        }finally {
            setLoading(false);
        }

    }

    return (
        
        <div>
            <Button onClick={getUsers} />
            {isLoading && <p>Loading ...</p>}
            {hasError ? (<p>Oh no! Error!</p>) 
            :(
                <div>
                    {users.map((user) => (
                        <h3 key={user.login.uuid}
                            onClick={() =>{
                                setUser(user)
                                setShowUser(true)
                            }}
                        >
                            {user.name.first} {user.name.last}
                        </h3>    
                    ))}
                    {showUser && <UserProfile user={user} />}
                </div>
            )
            }         
        </div>
    )
}

export default Users
