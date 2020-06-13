import React, {useState, useEffect} from 'react';
import UserProfile from './UserProfile';
import Button from './Button'

const User = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [showUser, setShowUser] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const getUsers = () => {
        fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.results)
            setLoading(false)
            setShowUser(false)
        })
        .catch((e) =>{
            setError(true)
            setLoading(false)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

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

export default User
