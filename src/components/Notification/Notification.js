import React from 'react';
import './Notification.css'

const Notification = (props) => {
    const notification = props.notification;
    const totalIncome = notification.reduce((total, user) => total + user.salary, 0);

    // let totalIncome = 0;
    // for(let i = 0; i < notification.length; i++){
    //     const user = notification[i];
    //     totalIncome = totalIncome + user.salary;
    // }

    return (
        <div>
            <h4><span>Notification</span></h4>
            <p>Total Friends: {notification.length}</p>
            <p>Total Income: {totalIncome}</p>
        </div>
    );
};

export default Notification;