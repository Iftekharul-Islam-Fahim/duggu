import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    const { name, email, phone, address, salary, image } = props.user;
    //const yearlyIncome = 2500;
    return (
        <div className="user">

            <div>
                <h4 className="user-name">{name}</h4>
                <div>
                    <img src={image} alt="" />
                </div>
                <p>Yearly Income: $ {salary}</p>
                <p><small>Email: {email}</small></p>
                <p><small>Phone: {phone}</small></p>
                <p><small>Address: {address}</small></p>
                <button className="add-friend-button" onClick={() => props.handleAddUser(props.user)}>
                    <FontAwesomeIcon icon={faUserPlus} /> Add Friend
                </button>
            </div>
        </div>
    );
};

export default User;