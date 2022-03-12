import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import VisualizerHeaderContext from '../../context/VisualizerHeaderContext'


const Header_VSG = () => {

    const { menuItemAreas } = useContext(VisualizerHeaderContext)
    const statusCodeArea = menuItemAreas.statusCode

    const { updateActive } = useContext(VisualizerHeaderContext)

    // update visualizer area
    const changeArea = (id) => {
        updateActive(id)
    }


    return (
        <>

            <header id="HeadSection">
                <div className="container-wrapper">
                    <div className="logo-container">
                        <div className="logo display-inline">
                            <a href="/" style={{ height: '50px !important' }}>
                                <img src="/images/logo.png" alt="Ziniam" style={{ height: '50px' }} />
                            </a>
                        </div>
                        <div className="nav-login display-inline">
                            <a href="#msi-mmenu" title="product-menu" className="glyphicon glyphicon-menu-hamburger dropdown-toggle toggle-menu hmbrgr-mbl">MENU</a>
                            
                            <a href="/" className="cartbtn-header cartbtn-header1">
                                <img src="/vsg/images/back.png" alt="" style={{ marginBottom: '3px' }} />
                                <span className="SampleSpan">BACK TO HOME</span>
                            </a>
                            <a href="/" className="cartbtn-header cartbtn-header2">
                                <img src="/vsg/images/back.png" alt="" style={{ marginBottom: '3px' }} />
                                <span className="SampleSpan">Back</span>
                            </a>
                        </div>
                    </div>
                </div>

                <hr />

                {/* <!-- menu --> */}
                <div id="menu-wrap" className="topnav-wrapper" style={{ display: 'flex', justifyContent: 'center' }} >
                    <div className="container-wrapper">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="msi-navbar-main" id="msi-navbarmain">
                                    <li>
                                        <nav id="msi-mmenu" aria-label="menu">
                                            <ul id="msi-navbar" className="hidden">
                                                {
                                                    statusCodeArea == 200 ?
                                                        <li>
                                                            <a href="#">Application Area</a>
                                                            <ul className="sub-menu">
                                                            {
                                                                menuItemAreas.data.map((menuItemArea) => {
                                                                    return (
                                                                        <li onClick={() => changeArea(menuItemArea.id)}>
                                                                            <a target="_self" style={{ textTransform: 'capitalize' }}>{ menuItemArea.area }</a>
                                                                        </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                    :
                                                        <></>
                                                }
                                                <li>
                                                    <a href="/products">Explore Products</a>
                                                </li>
                                                <li>
                                                    <a href="/contact" target="_self">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
        </>
    )
}

export default Header_VSG;
