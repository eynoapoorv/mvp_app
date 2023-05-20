import React from 'react'
import compitition_img1 from "../assets/images/compitition-img1.png"
import compitition_img2 from "../assets/images/compitition-img2.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const Compititation = () => {


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code)
        localStorage.setItem('auth-code', code);
        urlParams.delete('code');
        console.log("Codee not found....")
    })

    return (
        <>
            <div className="front-section compitition-page">
                <div className="front-image">
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
                                    <img src={compitition_img1} alt="" />
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
                        <Link to="/instagramFeed">SELECT VIDEO</Link>
                    </div>
                </div>



            </div>


        </>
    )
}

export default Compititation
