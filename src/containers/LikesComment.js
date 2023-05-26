import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LikesCommentsDisplay = ({ user_id, accessToken }) => {
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch likes
        axios.get(`https://graph.instagram.com/${user_id}/media?fields=like_count&access_token=${accessToken}`)
            .then(response => {
                setLikes(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Fetch comments
        axios.get(`https://graph.instagram.com/${user_id}/media?fields=comments&access_token=${accessToken}`)
            .then(response => {
                setComments(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [user_id, accessToken]);

    return (
        <div>
            <h2>Likes</h2>
            <ul>
                {likes.map((like) => (
                    <li key={like.id}>{like.like_count} likes</li>
                ))}
            </ul>

            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.comments.data.map((data) => data.text)}</li>
                ))}
            </ul>
        </div>
    );
};

export default LikesCommentsDisplay;