import React, { useState, useEffect } from 'react';
import './Home.css';
import User from '../User/User';
import Notification from '../Notification/Notification';
import fakeUsers from '../../fakeUsers/user';

const Home = () => {
    const jsonUsers = fakeUsers;
    const [users, setUsers] = useState(jsonUsers);
    const [notification, setNotification] = useState([]);

    const handleAddUser = (user) => {
        const newNotification = [...notification, user];
        setNotification(newNotification);
    };

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    // }, []);

    return (
        <div className="home-container">
            <div className="user-container">
            
                {
                    users.map(user => <User handleAddUser={handleAddUser} user={user}></User>)
                }

            </div>
            <div className="add-container">
                <Notification notification={notification}></Notification>
            </div>

        </div>
    );
};

export default Home;