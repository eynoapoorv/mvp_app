import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Feed from '../Auth/Feed';



const InstagramPosts = () => {
    // const [posts, setPosts] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect



    const handleCodeExchange = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const redirectURI = 'https://eynoapoorv.github.io/reactlivewebsite/';
            const clientID = '255369483731464';
            const clientSecret = '2ffd5a91893817112f410cb755ef32a2';

            const tokenExchangeUrl = 'https://api.instagram.com/oauth/access_token';

            const requestBody = new URLSearchParams();
            requestBody.append('client_id', clientID);
            requestBody.append('client_secret', clientSecret);
            requestBody.append('grant_type', 'authorization_code');
            requestBody.append('redirect_uri', redirectURI);
            requestBody.append('code', code);

            axios.post(tokenExchangeUrl, requestBody)
                .then((response) => {
                    setAccessToken(response.access_token);
                    alert(response)
                    console.log(response.data.access_token)



                })
                .catch((error) => {
                    console.error('Token exchange failed:', error);
                });
        }
    };


    useEffect(() => {
        // this is to avoid memory leaks

        const abortController = new AbortController();

        async function fetchInstagramPost() {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=IGQVJVNFdMQ1FsSTk0VllPR2ZA3d2xMV01MZAXNjR1dWRlY5YTRfMFB6aGUyeVkzc25FM05zXzFzazhRRFV3M3M5OUFwT0pCSFFoQl82b3UwSWJEWjF6R1BXSWFOdzc4VXBpV2dadzNqcnZAZAalBWUVhyYQZDZD`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            }


            // try {
            //     axios
            //         .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
            //         .then((resp) => {
            //             setFeedsData(resp.data.data)
            //         })
            // } catch (err) {
            //     console.log('error', err)
            // }
        }

        // manually call the fecth function 
        fetchInstagramPost();

        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort();
        };
    }, [])





    return (
        <div className="front-section home-page">
            <div className="front-image">
                <div className="home-content">
                    <h3>Select Video</h3>
                    <button onClick={() => handleCodeExchange()}>CLICK TO POST DATA</button>
                </div>


                <div className="container">
                    {feeds.map((feed) => (
                        <Feed key={feed.id} feed={feed} />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default InstagramPosts;


