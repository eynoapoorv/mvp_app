import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
const ConnectWithInstagram = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        const clientId = '255369483731464';
        const redirectUri = 'https://eynosoftmvp.netlify.app/';
        const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

        window.location.href = authUrl;


    }

    return (
        <>
            <div className="front-section">
                <div className="front-image">
                    <div className="game-rule">
                        <Link to="" />Game Rule <Link />
                    </div>
                    <div className="front-logo" >
                        <img src={logo} alt="" />
                    </div>
                    {/* <div className="front-content">
                        <Link /> Connect With Instagram<Link />
                    </div> */}
                    <div className="front-content">
                        <button onClick={() => handleLogin()}>Connect With Instagram</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ConnectWithInstagram;
