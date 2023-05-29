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
import { useEffect, useState } from 'react'
import axios from 'axios'
import CountdownTimer from './CountdownTimer';


const Compititation = () => {

    //intialization of instances and varialbles
    //const [posts, setPosts] = useState([]);
    useEffect(() => {
        handleCodeExchange();

    })
    /*****************************************************************************/
    /*****************************************************************************/
    const getVideo = () => {
        const video = localStorage.getItem('videoData');

        if (video) {
            try {
                const videoFile = JSON.parse(video);

                const videoUrl = URL.createObjectURL(videoFile);

                const videos = document.createElement('video');

                videos.src = videoUrl
            } catch (error) {
                console.log("error in gatting video", error)
            }
        }
    }
    //****************************************************************************
    //***************************************************************** */ */
    /**
     * Function to manage the code from instagram
     * 
     * @param null
     * @returns String||null
     */
    const handleCodeExchange = () => {
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
            const redirectURI = process.env.REACT_APP_DEV_REDIRECT_URL;
            const clientID = process.env.REACT_APP_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

            const tokenExchangeUrl = process.env.REACT_APP_INSTAGRAM_API_URL + '/oauth/access_token';

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
                    const accessToken = localStorage.getItem('access_token');
                    console.log(accessToken)
                    //fetchInstagramPost(accessToken)
                })
                .catch((error) => {
                    console.error('Token exchange failed:', error);
                });
        }
    };
    /*****************************************************************************/
    /*****************************************************************************/
    // display 24 hours counter code 
    var dateTimeAfterOneDays;
    if(localStorage.getItem("counter_time")){
      let updateTime = localStorage.getItem("counter_time")
      updateTime = Number(updateTime);
     // updateTime = updateTime + new Date().getTime()
      dateTimeAfterOneDays = updateTime;
    }else{
      const THREE_DAYS_IN_MS =  24 * 60 * 60 * 1000;
      const NOW_IN_MS = new Date().getTime();
      dateTimeAfterOneDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    }   
     /*****************************************************************************/
     
    /*****************************************************************************/
    return (
        <>
            <div className="front-section compitition-page">
                <div className="front-image">
                    <CountdownTimer targetDate={dateTimeAfterOneDays} />
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
                                    <img src={getVideo} alt="" />
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

                    </div>
                </div>



            </div>


        </>
    )
}

export default Compititation
