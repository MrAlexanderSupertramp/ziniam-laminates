import React from 'react'
import Link from 'next/link'



const Footer_VSG = () => {
    return (
        <>

            <footer id="FooterSection" role="contentinfo">
           
                <hr />
                
                <div className="footer-bottom">

                    <div className="social-tools-container">
                        <div className="container-wrapper">
                            <div className="row" style={{ display: 'flex' }}>

                                {/* <!-- Logo --> */}
                                <div className="col-88 col-sm-4 col-md-4">
                                    <div className="msi-logo">
                                        <a to="/"><img className="img-responsive msi-logo" src="/images/logo.png" alt="ziniam" style={{ height: '50px' }} /></a>
                                    </div>
                                </div>

                                {/* <!-- Social --> */}
                                <div className="col-44 col-sm-8 col-md-8">
                                    <div className="social-tools">
                                        <div className="icon-container"><a className="facebook" href="https://www.facebook.com/Galaxy-Mica-Pvt-Ltd-357623024448869/" target="_blank" aria-label="Facebook"></a></div>
                                        <div className="icon-container"><a className="instagram" href="https://www.instagram.com/galaxymica/" target="_blank" aria-label="Instagram"></a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="copyright-disclaimer" style={{ marginTop: '20px' }}>
                        <div className="container-wrapper">
                            <div className="row">
                                <div className="col-xs-12">
                                    <ul id="txt-align">
                                        <li id="msirights-text">
                                            <p className="copyright-text">Ziniam Laminates, All rights reserved © 2021 | Developer by </p><a href="https://krioskcreata.com" target="_blank"><img src="/vsg/images/kriosk_logo.svg" alt="KrioskCreata" style={{ width: '65px', marginLeft: '12px' }} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        
        </>
    )
}

export default Footer_VSG;
