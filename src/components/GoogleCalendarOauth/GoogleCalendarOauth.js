/*App.js*/

import React, {useState} from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios";

function GoogleCalendarOauth() {

    const [summary, setSummary] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [startDateTime, setStartDateTime] = useState('')
    const [endDateTime, setEndDateTime] = useState('')
    const [signedIn, setSignedIn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/create-event', {
            summary, description, location, startDateTime, endDateTime
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error.message))
    }

    const createTokens = code => {
        axios.post('/api/create-tokens', {code})
            .then(response => {
                console.log(response.data)
                setSignedIn(true)
            })
            .catch(error => console.log(error.message))
    }

    const login = useGoogleLogin({
        onSuccess: codeResponse => createTokens(codeResponse.code),
        flow: 'auth-code',
        scope: "openid email profile https://www.googleapis.com/auth/calendar"
    });

    return (
        <div>
            {
                signedIn ? (<form onSubmit={handleSubmit}>
                        <label htmlFor={"summary"}>Summary</label>
                        <br/>
                        <input type={"text"} id={"summary"} value={summary} onChange={e => setSummary(e.target.value)}/>
                        <br/>

                        <label htmlFor={"Description"}>Description</label>
                        <br/>
                        <input type={"text"} id={"description"} value={description}
                               onChange={e => setDescription(e.target.value)}/>
                        <br/>

                        <label htmlFor={"location"}>Location</label>
                        <br/>
                        <input type={"text"} id={"location"} value={location} onChange={e => setLocation(e.target.value)}/>
                        <br/>

                        <label htmlFor={"startDateTime"}>Start Date</label>
                        <br/>
                        <input type={"datetime-local"} id={"startDateTime"} value={startDateTime}
                               onChange={e => setStartDateTime(e.target.value)}/>
                        <br/>

                        <label htmlFor={"endDateTime"}>End Date</label>
                        <br/>
                        <input type={"datetime-local"} id={"endDateTime"} value={endDateTime}
                               onChange={e => setEndDateTime(e.target.value)}/>
                        <br/>

                        <button type={'submit'}>Create Event</button>
                    </form>)

                    :

                    (<button onClick={() => login()}>
                        Sign in with Google 🚀{' '}
                    </button>)
            }
        </div>
    )
}

export default GoogleCalendarOauth;
