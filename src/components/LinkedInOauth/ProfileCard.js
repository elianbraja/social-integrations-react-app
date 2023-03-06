import React from 'react';

function ProfileCard(props) {
    return (
        <div className="profile">
            <div className="profile-container">
                <img src={props.pictureURL} alt="" height="200px" width="200px"/>
                <h1>{props.firstName} {props.lastName}</h1>
            </div>
        </div>
    )
}

export default ProfileCard;
