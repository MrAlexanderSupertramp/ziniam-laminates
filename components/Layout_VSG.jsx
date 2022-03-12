import React from 'react'
import Header_VSG from './visualizer/Header_VSG'
import Footer_VSG from './visualizer/Footer_VSG'

function Layout_VSG({ children }) {
    return (
        <>
            <Header_VSG />

            { children }
            
            <Footer_VSG />
        
        </>
    )
}

export default Layout_VSG
