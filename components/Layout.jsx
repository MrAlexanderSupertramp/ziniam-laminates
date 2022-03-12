import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'


function Layout({ children }) {

    // for(var k in menuItemProducts.data) {
    //     var o = menuItemProducts.data[k]
    //     console.log(o)
    // }

    useScript('/js/menu-separated.js')


    return (
        <>

            {/* <!-- Page Wrap --> */}
            <div className="page" id="top">

                {/* <!-- Skip to Content --> */}
                <a href="#main" className="btn skip-to-content">Skip to Content</a>

                <Header />

                { children }

                <Footer />

            </div>

        
        </>
    )
}

export default Layout


const useScript = url => {
    useEffect(() => {
            const script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.defer = false;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
    }, [url]);
};
