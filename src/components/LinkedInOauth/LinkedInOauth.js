import React, {useState} from 'react';

import {useLinkedIn} from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import ProfileCard from "./ProfileCard";
import axios from "axios";

function LinkedInOauth() {

    const [authorized, setAuthorized] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [pictureUrl, setPictureUrl] = useState(null)
    const createTokens = code => {
        axios.post('/api/create-tokens-linkedin', {code})
            .then(response => {
                setAuthorized(true)
                setFirstName(response.data.localizedFirstName)
                setLastName(response.data.localizedLastName)
                setPictureUrl(response.data.profilePicture["displayImage~"].elements[0].identifiers[0].identifier)
            })
            .catch(error => console.log(error.message))
    }

    const {linkedInLogin} = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
        scope: "r_liteprofile",
        onSuccess: code => createTokens(code),
    });

    return (
        <div>
            {
                authorized ?
                    <ProfileCard
                        firstName={firstName}
                        lastName={lastName}
                        pictureURL={pictureUrl}
                    />
                    :
                    <img
                        onClick={() => linkedInLogin()}
                        src={linkedin}
                        alt="Sign in with Linked In"
                        style={{maxWidth: '180px', cursor: 'pointer'}}
                    />
            }
        </div>
    );
}

export default LinkedInOauth;
