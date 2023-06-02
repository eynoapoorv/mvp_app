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
import Header from '../components/Header';

const InstagramPosts = () => {
    //intialization of instances and varialbles
    // const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');
    const [joinVideoUrl, setJoinVideoUrl] = useState('');
    const [username, setUsername] = useState('');
    const [feeds, setFeedsData] = useState([]);
    const [profileData, setProfileData] = useState('');
    //use useRef to store the latest value of the prop without firing the effect
    useEffect(() => {
        //getUserProfileData();
        handleCodeExchange();

    }, [])

    /*****************************************************************************/
    /*****************************************************************************/
    const getUserProfileData = async (username) => {
        var token = localStorage.getItem('access_token');
        const redirectURI = process.env.REACT_APP_DEV_REDIRECT_URL;
        const clientID = "955344522324478";
        const clientSecret = "1cf4e43c04c4c042e5174d29164ee006";

        const tokenExchangeUrl = 'https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=' + clientID + '&client_secret=' + clientSecret + '&fb_exchange_token=ecabe3cde4661e8960ad71a2839f5e75';
        axios.get(tokenExchangeUrl)
            .then((response) => {
                console.log(response.data.access_token);
                axios.get(`https://graph.facebook.com/v17.0/17971469000516419?fields=id,media_type,media_url,owner,like_count,timestamp&access_token=${clientID}|${clientSecret}`)
                    .then((response) => {
                        console.log(response);
                        //localStorage.setItem('access_token', response.data.access_token);

                        //const accessToken = localStorage.getItem('access_token');
                        //fetchInstagramPost(accessToken)

                    })
                    .catch((error) => {
                        console.error('Token exchangeee failed:', error);
                    });
            })
            .catch((error) => {
                console.error('Token exchange failed:', error);
            });
        {/*const response = await fetch(
            //process.env.REACT_APP_INSTAGRAM_URL + `/web/search/topsearch/?query=` + username+`&access_token=`+token
            process.env.REACT_APP_INSTAGRAM_URL + `/web/search/topsearch/?query=` + username
            
        )
        
        
        const { data } = await response.json()
        console.log(data)*/}
        const requestBody = new URLSearchParams();
        requestBody.append('query', username);

        {/*const response = await fetch(
            process.env.REACT_APP_INSTAGRAM_URL +`/web/search/topsearch/?query=${username}&access_token=${token}`,{
                withCredentials: true,
                headers: {
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': "navigate",
                    'Sec-Fetch-Site': 'cross-site',
                    'Sec-Fetch-User': '?1',
                }
            }
        )*/}

        {/*var appid= 955344522324478;
        var appsecret = '1cf4e43c04c4c042e5174d29164ee006';
        //await axios.get(process.env.REACT_APP_INSTAGRAM_URL + `/web/search/topsearch/?query=` + username)
        await axios.get(`https://graph.facebook.com/v17.0/17971469000516419?fields=id,media_type,media_url,owner,timestamp&access_token=${appid}|${appsecret}`)
            .then((response) => {
                console.log(response);
                //localStorage.setItem('access_token', response.data.access_token);

                //const accessToken = localStorage.getItem('access_token');
                //fetchInstagramPost(accessToken)

            })
            .catch((error) => {
                console.error('Token exchangeee failed:', error);
            });*/}




        {/*fetch(process.env.REACT_APP_INSTAGRAM_URL + `/web/search/topsearch/?query=eyno_brajesh`)
            .then(response => response.text())
        .then(data => console.log(data));*/}
        {/*await axios.get(process.env.REACT_APP_INSTAGRAM_URL + `/web/search/topsearch/?query=eyno_brajesh`)
            .then((response) => {
                console.log(response);
                //localStorage.setItem('access_token', response.data.access_token);

                //const accessToken = localStorage.getItem('access_token');
                //fetchInstagramPost(accessToken)

            })
            .catch((error) => {
                console.error('Token exchangeee failed:', error);
            });*/}
    }
    /**
     * Function to set the username
     * 
     * @param Object
     * @returns String|null
     */
    const getUsername = (feedData) => {
        if (feedData) {
            var uname;
            for (var i = 0; i <= feedData.length; i++) {
                uname = feedData[i].username;
                console.log(feedData[i].username);
                break;
            }
            setUsername(uname);
            localStorage.setItem('username', uname);
            console.log('herre')
            setTimeout(() => {
                console.log('inside')
                getUserProfileData(uname);
            }, 2000);
        }

    }
    /*****************************************************************************/
    /*****************************************************************************/

    /**
     * Function to get the likes and comment count
     * 
     * @param Object
     * @returns JSON|null
     */
    const getUserInstadata = (feedData) => {
        //const post = { userName: userName }
        //console.log(feedData)
        if (feedData) {
            for (var i = 0; i <= feedData.length; i++) {

            }
        }
        {/*
        axios.post('/user/userdata', requestBody)
            .then((response) => {
                    setAccessToken(response.data.access_token);
                    console.log(response.data.access_token);
                    console.log(response)
                    localStorage.setItem('access_token', response.data.access_token);

                    const accessToken = localStorage.getItem('access_token');
                    fetchInstagramPost(accessToken)
            })
            .catch((error) => {
                console.error('Token exchange failed:', error);
            }); */}
    }
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
            const headers = {
                'Access-Control-Allow-Origin': '*',
            }
            axios.post(tokenExchangeUrl, requestBody)
                .then((response) => {
                    setAccessToken(response.data.access_token);
                    console.log(response.data.access_token);
                    console.log(response)
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
    // https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count,media{comments_count,like_count}}&access_token={access-token}
    // https://graph.instagram.com/${mediaId}?fields=id,media_type,permalink,thumbnail_url,like_count,comments_count,media_url&access_token=${accessToken}
    async function fetchInstagramPost(accessToken) {
        try {
            // const accessToken =  localStorage.getItem('access_token');
            await axios.get(process.env.REACT_APP_GRAPH_URL + `/me/media?fields=id,caption,media_type,media_url,username,pk_id,timestamp&access_token=${accessToken}`)
                .then((resp) => {
                    //alert(resp)
                    console.warn("response data :", resp)

                    setFeedsData(resp.data.data);
                    getUsername(resp.data.data);
                    getUserInstadata(resp.data.data);

                })
        } catch (err) {
            console.log('error', err)
        }
    }
    /*****************************************************************************/
    /*****************************************************************************/


    // const handleChange = async (event) => {
    //     var videoUrl = event.target.value;
    //     setJoinVideoUrl(videoUrl);
    //     console.log(videoUrl)

    //     // localStorage.setItem("videoData", videoUrl)
    //     // console.log("selected video are save in local storage", videoUrl);

    // }

    //******************************************** */


    /*****************************************************************************/
    /*****************************************************************************/
    /**
     * Function send request to join competition
     * 
     * @param(null)
     * @returns(JSON|null)
     */
    const joinCompetition = async () => {
        try {
            const res = await axios.post("https://mvpappnode.onrender.com/user/saveCompetitionData",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ joinVideoUrl }),
                });
            if (!res.ok) {
                console.log("Uploading fail")
            } else {
                console.log("Video Uploading succesfull")
            }
        } catch (error) {
            console.log(error)
        }


        if (joinVideoUrl) {
            var video = '<video width="100%" height="auto" src="' + { joinVideoUrl } + '" type="video/mp4" controls playsinline> </video>'
            var message = 'Test has send invite request for this competion .' + video + ' Accept invitaiton for competition' + <button>Invite</button> + '!';
            const notificationdata = [{
                'userId': 'Test',
                'message': message,

            }];
            let res = await axios.post('user/join', notificationdata, {
                headers: {
                    'Accept': 'applstatusication/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then((response) => {
                if (typeof response.data.data != 'undefined') {
                    //this.setState({ orderStatus: response.data.data })
                    //navigate("/compitation");
                    //console.log(response.data.data)
                } else {
                    //this.setState({ orderStatus: '' })
                }
            }).catch(error => {
                console.log(error);
            });
            navigate('/compitation')
            alert("GO TO COMPETATION PAGE")
        } else {
            alert('Please choose video')
        }

    }
    /*****************************************************************************/
    /*****************************************************************************/
    return (
        <div className="front-section home-page">
            <div className="front-image">
                <Header />
                <div className="home-content">
                    <h3>Select Video</h3>
                    <button onClick={() => joinCompetition()}>JOIN COMPETITION</button>
                </div>

                <div className="container">
                    <ul>
                        {feeds.map((feed, i) => {
                            console.log(feed);
                            //setUsername(feed.username);
                            return (

                                <li style={{ display: "inline-block", width: "200px", margin: "0px 0px 0px 20px" }}>
                                    <Feed key={feed.id} feed={feed} />
                                    <p>Likes : {feed.like_count}</p>

                                    <input
                                        type='radio'
                                        id={i}
                                        name='feeds'
                                        value={feed.media_url}

                                        onChange={(e) => setJoinVideoUrl(e.target.value)}
                                    />

                                </li>
                            );
                        })}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default InstagramPosts;


