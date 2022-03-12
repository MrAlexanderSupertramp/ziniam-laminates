import React from 'react'

function Footer() {
    return (
        <>

        {/* <!-- Footer --> */}
        <footer className="page-section bg-gray-lighter footer pb-100 pb-sm-50">
            <div className="container">
                
                {/* <!-- Social Links --> */}
                <div className="footer-social-links mb-90 mb-xs-40">
                    <a href="https://www.facebook.com/ZiniamLaminates" title="Facebook" target="_blank"><i className="fab fa-facebook-f"></i> <span className="sr-only">Facebook profile</span></a>
                    <a href="https://www.instagram.com/ziniamlaminates/" title="Twitter" target="_blank"><i className="fab fa-instagram"></i> <span className="sr-only">Twitter profile</span></a>
                </div>
                
                {/* <!-- Footer Text --> */}
                <div className="footer-text">
                    
                    {/* <!-- Copyright --> */}
                    <div className="footer-copy">
                        <a href="index-2.html">© Ziniam Laminates 2022</a>.
                    </div>
                    
                    <div className="footer-made">
                        Made with 🖤 by <a href="https://krioskcreata.com" target="_blank">Kriosk Creata</a> 
                    </div>
                    
                </div>
                
                </div>
                
                {/* <!-- Top Link --> */}
                <div className="local-scroll">
                    <a href="#top" className="link-to-top"><i className="link-to-top-icon"></i></a>
                </div>
                
        </footer>
        
        </>
    )
}

export default Footer
