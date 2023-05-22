/**
 * File Name: Competition.js
 * 
 * Description: Manage the data for competition for the login user
 * 
 * Author: Eynosoft Team
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Feed from '../Auth/Feed';

const InstagramPosts = () => {
    //intialization of instances and varialbles
    // const [posts, setPosts] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    useEffect(() => {
        var token = localStorage.getItem('access_token');
        if(token == '') {
            handleCodeExchange();
        } 
        
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

            const tokenExchangeUrl = process.env.REACT_APP_INSTAGRAM_API_URL+'/oauth/access_token';

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
                    const accessToken =  localStorage.getItem('access_token');
                    fetchInstagramPost(accessToken)
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
            await axios.get(process.env.REACT_APP_GRAPH_URL+`/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${accessToken}`)
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
    const handleChange = () => {

    }

    return (
        <div className="front-section home-page">
            <div className="front-image">
                <div className="home-content">
                    <h3>Select Video</h3>
                    <button onClick={() => handleCodeExchange()}>CLICK TO POST DATA</button>
                </div>

                <div className="container">
                    {feeds.map((feed,i) => (
                        <div key={i} className="col-md-4">
                            <Feed key={feed.id} feed={feed} />
                            <p><input type='radio' name={'feed-'+i} value={feed.id} onChange={handleChange}/></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramPosts;


