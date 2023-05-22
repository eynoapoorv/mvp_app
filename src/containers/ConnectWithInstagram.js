/**
 * Fiel Name: ConnectWith .js
 * 
 * Description: Manage connection with instagram and manages the data accordingly
 * 
 * Author: Eynosoft Team
 */

import React from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
// import { useNavigate } from 'react-router-dom'

const ConnectWithInstagram = () => {
    //intialization of instances and varialbles
    // const navigate = useNavigate()
    useEffect(() => {
        console.log(process.env.REACT_APP_CLIENT_ID);
        console.log(process.env.REACT_APP_DEV_REDIRECT_URL);
        console.log(process.env.REACT_APP_INSTAGRAM_API_URL);
    })
    /*****************************************************************************/
    /*****************************************************************************/
    /**
     * Function to handle login request
     * 
     * @param null
     * @returns null
     */
    const handleLogin = () => {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const redirectUri = process.env.REACT_APP_DEV_REDIRECT_URL;
        const authUrl = process.env.REACT_APP_INSTAGRAM_API_URL+`/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

        window.location.href = authUrl;

    }
    /*****************************************************************************/
    /*****************************************************************************/

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
