// import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'




// const InstaFeeds = ({ token, ...props }) => {
//     const [feeds, setFeedsData] = useState([]);
//     //use useRef to store the latest value of the prop without firing the effect
//     const tokenProp = useRef(token);
//     tokenProp.current = token;

//     useEffect(() => {
//         // this is to avoid memory leaks

//         const abortController = new AbortController();

//         async function fetchInstagramPost() {
//             try {
//                 axios
//                     .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=IGQVJVNFdMQ1FsSTk0VllPR2ZA3d2xMV01MZAXNjR1dWRlY5YTRfMFB6aGUyeVkzc25FM05zXzFzazhRRFV3M3M5OUFwT0pCSFFoQl82b3UwSWJEWjF6R1BXSWFOdzc4VXBpV2dadzNqcnZAZAalBWUVhyYQZDZD`)
//                     // .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${tokenProp.current}`)
//                     .then((resp) => {
//                         setFeedsData(resp.data.data)
//                     })
//             } catch (err) {
//                 console.log('error', err)
//             }


//             // try {
//             //     axios
//             //         .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
//             //         .then((resp) => {
//             //             setFeedsData(resp.data.data)
//             //         })
//             // } catch (err) {
//             //     console.log('error', err)
//             // }
//         }

//         // manually call the fecth function
//         fetchInstagramPost();

//         return () => {
//             // cancel pending fetch request on component unmount
//             abortController.abort();
//         };
//     }, [props.limit])

//     return (
//         <div className="container">
//             {feeds.map((feed) => (
//                 <Feed key={feed.id} feed={feed} />
//             ))}
//         </div>

//     );
// }

// export default InstaFeeds;