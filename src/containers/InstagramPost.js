/**
 * File Name: Competition.js
 * 
 * Description: Manage the data for competition for the login user
 * 
 * Author: Eynosoft Team
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Feed from '../Auth/Feed';

const InstagramPosts = () => {
    //intialization of instances and varialbles
    // const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');
    const [joinVideoUrl, setJoinVideoUrl] = useState('');
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    useEffect(() => {
        handleCodeExchange();
    }, [])

    /*****************************************************************************/
    /*****************************************************************************/
    /**
     * Function to manage the code from instagram
     * 
     * @param null
     * @returns String||null
     */
    const handleCodeExchange = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const redirectURI = process.env.REACT_APP_DEV_REDIRECT_URL;
            const clientID = process.env.REACT_APP_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

            const tokenExchangeUrl = process.env.REACT_APP_INSTAGRAM_API_URL + '/oauth/access_token';

            const requestBody = new URLSearchParams();
            requestBody.append('client_id', clientID);
            requestBody.append('client_secret', clientSecret);
            requestBody.append('grant_type', 'authorization_code');
            requestBody.append('redirect_uri', redirectURI);
            requestBody.append('code', code);

            axios.post(tokenExchangeUrl, requestBody)
                .then((response) => {
                    setAccessToken(response.data.access_token);
                    console.log(response.data.access_token);
                    localStorage.setItem('access_token', response.data.access_token);
                    const accessToken = localStorage.getItem('access_token');
                    fetchInstagramPost(accessToken)
                })
                .catch((error) => {
                    console.error('Token exchange failed:', error);
                });
        } else {
            var token = localStorage.getItem('access_token');
            if (token) {
                setAccessToken(token);
            }

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

    // https://graph.instagram.com/${mediaId}?fields=id,media_type,permalink,thumbnail_url,like_count,comments_count,media_url&access_token=${accessToken}
    async function fetchInstagramPost(accessToken) {
        try {
            // const accessToken =  localStorage.getItem('access_token');
            await axios.get(process.env.REACT_APP_GRAPH_URL + `/me/media?fields=id,caption,media_type,like_count,comments_count,media_url,username,timestamp&access_token=${accessToken}`)
                .then((resp) => {
                    console.warn("response data :", resp)
                    setFeedsData(resp.data.data);
                })
        } catch (err) {
            console.log('error', err)
        }
    }
    /*****************************************************************************/
    /*****************************************************************************/
    const handleChange = (event) => {
        var videoUrl = event.target.value;
        setJoinVideoUrl(videoUrl);
    }
    /*****************************************************************************/
    /*****************************************************************************/
    const joinCompetition = () => {
        if (joinVideoUrl) {
            navigate("/compitation");
        } else {
            alert('Please choose video')
        }

    }
    /*****************************************************************************/
    /*****************************************************************************/
    return (
        <div className="front-section home-page">
            <div className="front-image">
                <div className="home-content">
                    <h3>Select Video</h3>
                    <button onClick={() => joinCompetition()}>JOIN COMPETITION</button>
                </div>

                <div className="container">
                    <ul>
                        {feeds.map((feed, i) => {
                            return (
                                <div>

                                    <li style={{ display: "inline-block", width: "200px", margin: "0px 0px 0px 20px" }}>
                                        <Feed key={feed.id} feed={feed} />
                                        <p>Likes : {feed.like_count}</p>
                                        <p><input type='radio' id={i} name='feeds' value={feed.id} onChange={handleChange} /></p>
                                    </li>
                                </div>
                            );


                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstagramPosts;


