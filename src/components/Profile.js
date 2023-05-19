import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../assets/images/userImg.jpg';

const Profile = () => {
    return (
        <div className="front-section profile-page">
            <div className="front-image">
                <div className="profile-content">
                    <div className="profile-heading">
                        <h1>MY PROFILE</h1>
                    </div>
                    <div className="profile-text">
                        <div className="profile-image">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="profile-data">
                            <div className="profile-inner-data-wrapper">
                                <div className="profile-data-row">
                                    <span>Name:</span>
                                    <span>XYZ</span>
                                </div>
                                <div className="profile-data-row">
                                    <span>User Id:</span>
                                    <span>145623555</span>
                                </div>
                                <div className="profile-data-row">
                                    <span>Email:</span>
                                    <span>xyz@gmail.com</span>
                                </div>
                                <div className="view_counter">
                                    <ul>
                                        <li>Views: <span>15</span></li>
                                        <li>Comments: <span>40</span></li>
                                        <li>Winning: <span>45</span></li>
                                    </ul>
                                </div>
                                <div className="win_counter">
                                    <ul>
                                        <li>Winning<span>27</span></li>
                                        <li>loses<span>0</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-btn-next">
                        <Link to="">NEXT</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
