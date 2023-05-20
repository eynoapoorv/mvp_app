import React from 'react'
import { Link } from 'react-router-dom'
import logo_png from "../assets/images/logo.png"



const HomePage = () => {
    return (
        <div className="front-section home-page">
            <div className="front-image">
                <div className="front-logo logo">
                    <img src={logo_png} alt="" />
                </div>
                <div className="game-rule">
                    <Link to="">Game Rule</Link>
                </div>
                <div className="home-content">
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                </div>
                <div className="battle-btn">
                    <Link to="/connectWitInstagram">Battle</Link>
                </div>

            </div>
        </div>
    )
}

export default HomePage
