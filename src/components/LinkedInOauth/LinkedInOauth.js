import React, { useState } from 'react';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import axios from "axios";

function LinkedInOauth() {

  const createTokens = code => {
      console.log(code);
  }

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirectUri: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
    scope: "r_liteprofile",
    onSuccess: code => createTokens(code),
  });

  return (
    <img
      onClick={() => linkedInLogin()}
      src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth: '180px', cursor: 'pointer' }}
    />
  );
}

export default LinkedInOauth;
