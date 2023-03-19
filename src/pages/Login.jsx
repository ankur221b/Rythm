import React, { useState, useEffect } from 'react';

const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const scope =
'user-read-private';


const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

const Login = ()=>{
    const url =  `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${generateRandomString(16)}`;

    return(
        <main className="spotify-text">
            <h1>Spotify Profile</h1>
            <a href={url} className='spotify-button'>Log in to Spotify</a>
        </main>
    )
}

export default Login;