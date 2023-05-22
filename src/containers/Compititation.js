/**
 * File Name: Competition.js
 * 
 * Description: Manage the data for competition for the login user
 * 
 * Author: Eynosoft Team
 */

import React from 'react'
import compitition_img1 from "../assets/images/compitition-img1.png"
import compitition_img2 from "../assets/images/compitition-img2.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Compititation = () => {

    //intialization of instances and varialbles
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        handleCodeExchange();
        
    })
    /*****************************************************************************/
    /*****************************************************************************/

    /**
     * Function to manage the code from instagram
     * 
     * @param null
     * @returns String||null
     */
    const handleCodeExchange =  () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code)
        if (code) {
            localStorage.setItem('auth-code', code);
            urlParams.delete('code');
        } else {
            console.log("Codee not foundf....")
        }
        const auth_code = localStorage.getItem('auth-code');

        if (auth_code) {
            const redirectURI = process.env.DEV_REDIRECT_URL;
            const clientID = process.env.CLIENT_ID;
            const clientSecret =  process.env.CLIENT_SECRET;

            const tokenExchangeUrl = process.env.INSTAGRAM_API_URL+'/oauth/access_token';

            const requestBody = new URLSearchParams();
            requestBody.append('client_id', clientID);
            requestBody.append('client_secret', clientSecret);
            requestBody.append('grant_type', 'authorization_code');
            requestBody.append('redirect_uri', redirectURI);
            requestBody.append('code', auth_code);

             axios.post(tokenExchangeUrl, requestBody)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem('access_token', response.data.access_token);  
                    const accessToken =  localStorage.getItem('access_token');
                    console.log(accessToken)   
                    
                })
                .catch((error) => {
                    console.error('Token exchange failed:', error);
                });
        }
    };
    /*****************************************************************************/
    /*****************************************************************************/

    /**
     * Function to fetch post from instagram for particualr user
     * 
     * @param String
     * @returns JSON||null
     */
    async function fetchInstagramPost(accessToken) {
        try {
          // const accessToken =  localStorage.getItem('access_token');
            await axios.get(GRAPH_URL+`/me/media?fields=id,media_type,media_url&access_token=${accessToken}`)
                .then((resp) => {
                    console.warn("response data :", resp)
                    setPosts(resp.data.data);
                })
        } catch (err) {
            console.log('error', err)
        }
    }
    /*****************************************************************************/
    /*****************************************************************************/

    return (
        <>
            <div className="front-section compitition-page">
                <div className="front-image">
                    <div className="compitition-content container">
                        <div className="brand1">
                            <div className="brand-name">
                                <div className="brand-logo" />
                                <div className="brand-name" />
                            </div>
                            <div className="brand-video-wrapper">
                                <div className="brand-percent">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <h2 className="brand-winning-percent">80%</h2>
                                </div>
                                <div className="brand-img">
                                    <img src={compitition_img1} alt="" />
                                    <div className="positive-mention">
                                        <span>80%</span><br />
                                        <span>Positive</span>
                                    </div>
                                    <div className="negative-mention">
                                        <span>20%</span> <br />
                                        <span>Negative</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="separator-brand">
                            V/S
                        </div>

                        <div className="brand2">
                            <div className="brand-name">
                                <div className="brand-logo" />
                                <div className="brand-name" />
                            </div>
                            <div className="brand-video-wrapper">
                                <div className="brand-percent">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <h2 className="brand-winning-percent">60%</h2>
                                </div>
                                <div className="brand-img">
                                    <img src={compitition_img2} alt="" />
                                    <div className="positive-mention">
                                        <span>60%</span><br />
                                        <span>Positive</span>
                                    </div>
                                    <div className="negative-mention">
                                        <span>40%</span> <br />
                                        <span>negative</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="battle-btn">
                        {/*<Link to="/instagramFeed">SELECT VIDEO</Link>*/}
                        {console.log(posts)}
                    </div>
                </div>



            </div>


        </>
    )
}

export default Compititation
