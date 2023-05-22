import React from 'react'
import { Link } from 'react-router-dom'
import flipkart from '../assets/images/flipk.png'
import walmart from '../assets/images/walmart.png'

const Winnerage = () => {
    return (
        <>
            <div className=" winnerpage">
                <div className="front-image">
                    <div className="start-game">
                        <Link to="">Start Game</Link>
                    </div>
                    <div className="game-rule">
                        <Link to="">Game Rule</Link>
                    </div>
                    <div className="winner-wrapper">
                        <div className="winning-center">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem officiis doloremque odio, quis id?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, accusantium.
                            </p>
                            <div className="show-btn"
                            //  style="margin-top: 30px;"
                            >
                                <Link to="" className="winning-show-btn">Show me mention</Link>
                            </div>

                        </div>
                        <div className="winning-score-card">
                            <div className="winning-card">
                                <div className="winning-score-content">
                                    <div className="team-1 team">
                                        <div className="digital-num"
                                        // style="font-size: 40px; font-weight: 600;"
                                        >4</div>
                                        <div className="team-logo"><img src={flipkart} alt="" /></div>
                                    </div>
                                    <div className="vs-center"
                                    // style="font-size: 25px;"
                                    >V/S</div>
                                    <div className="team-2 team">
                                        <div className="team-logo"><img src={walmart} alt="" /></div>
                                        <div className="digital-num"
                                        // style="font-size: 40px; font-weight: 600;"
                                        >4</div>
                                    </div>
                                </div>

                                <div className="winning-card-points">
                                    <div className="winning-card-points-wrapper">
                                        <div className="winning-pionts">
                                            <div className="winning-points">1</div>
                                            <div className="winning-cont">Lorem, ipsum dolor.</div>
                                            <div className="winning-points">3</div>
                                        </div>
                                        <div className="winning-pionts">
                                            <div className="winning-points">1</div>
                                            <div className="winning-cont">Lorem, ipsum dolor.</div>
                                            <div className="winning-points">3</div>
                                        </div>
                                        <div className="winning-pionts">
                                            <div className="winning-points">1</div>
                                            <div className="winning-cont">Lorem, ipsum dolor.</div>
                                            <div className="winning-points">3</div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="winning-card-social-share">
                                <div className="social-wrapper">
                                    <div className="social-content">
                                        <h5>Lorem ipsum dolor sit amet.</h5>
                                    </div>
                                    <div className="social-icons-pannel">
                                        <Link to=""><i className="fa fa-instagram"></i></Link>
                                        <Link to=""><i className="fa fa-twitter"></i></Link>
                                        <Link to=""><i className="fa fa-twitter"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Winnerage
