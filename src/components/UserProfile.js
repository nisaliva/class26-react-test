import React from 'react'

const UserProfile = ({user}) => {
    const {name, location, email, phone, picture } = user;
    const {city, country} = location;

    return (
        <div>
            <ul style= {{listStyleType:'none'}}>
                <img src={picture.large} alt={name.first} />
                <li className='firstLi'> {name.first} {name.last} </li>
                <li> {email} </li>
                <li> {phone} </li>
                <li> {city} {country} </li>
            </ul>      
        </div>
    )
}

export default UserProfile
