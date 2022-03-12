import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useContext } from 'react'
import HeaderContext from '../context/HeaderContext'
import VisualizerHeaderContext from '../context/VisualizerHeaderContext'



function Header() {

    // context and shit
    const { menuItemProducts } = useContext(HeaderContext)
    const statusCode = menuItemProducts.statusCode

    const { menuItemAreas } = useContext(VisualizerHeaderContext)
    const statusCodeArea = menuItemAreas.statusCode


    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    // search functionality
    const [searchData, setSearchData] = useState({
        search: ''
    })
    // const searchDataOnChange = (e) => {
    //     setSearchData({
    //         ...searchData,
    //         [e.target.name]: e.target.value,
    //     });
    // }
    const submitSearchForm = (e) => {
        e.preventDefault()

        var element = document.getElementById('ziniam-header-nav')
        console.log(element)
        element.classList.add("js-opened")

        if(searchData.search){
            Router.push({
                pathname: '/search',
                query: { q: searchData.search },
            });
        }
    }



    return (
        <>

            {/* <!-- Navigation panel --> */}
            <nav className="main-nav sticky wow-menubar">
                <div className="full-wrapper relative clearfix">
                    
                    {/* <!-- Logo ( * your text or image into link tag *) --> */}
                    <div className="nav-logo-wrap local-scroll">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/logo.png" alt="Company logo" width="188" height="37" />
                            </a>
                        </Link>
                    </div>
                    
                    {/* <!-- Mobile Menu Button --> */}
                    <div className="mobile-nav" role="button" tabIndex="0">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Menu</span>
                    </div>
                    
                    {/* <!-- Main Menu --> */}
                    <div className="inner-nav desktop-nav" id="ziniam-header-nav">
                    {/* <div class="inner-nav desktop-nav js-opened" style={{ display: "block" }}> */}
                        <ul className="clearlist">
                            
                            {/* <!-- Item With Sub --> */}
                            <li>
                                <Link href="/">
                                    <a className={Router.pathname == "/" ? "active" : ""}>Home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/products">
                                    <a className={Router.pathname.includes("products") ? "active" : ""}>Products</a>
                                </Link>

                            </li>

                            {/* catalogue and collection */}
                            {   statusCode == 200 ? 

                                    <>
                                        <li>
                                            {/* <a href="#" className={Router.pathname.includes("collection") ? "active mn-has-sub" : ""}>Collection <i className="mn-has-sub-icon"></i></a> */}
                                            <a href="#" className="mn-has-sub">Collection <i className="mn-has-sub-icon"></i></a>
                                            
                                            {/* <!-- Sub --> */}
                                            <ul className="mn-sub">
                                                {
                                                    menuItemProducts.data.map((data) => {
                                                        if(data.is_visible === true){
                                                            return (
                                                                <li key={data.id}>
                                                                    <Link href={`/products/${ data.name_slug }/collection/`}>
                                                                        <a style={{ textTransform:"capitalize" }}>{ data.name_slug }</a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                            
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub">Catalogues <i className="mn-has-sub-icon"></i></a>
                                            
                                            {/* <!-- Sub --> */}
                                            <ul className="mn-sub">
                                                {
                                                    menuItemProducts.data.map((data) => {
                                                        if(data.is_visible === true && data.has_catalogue === true){
                                                            return (
                                                                <li key={data.id}>
                                                                    <Link href={ data.catalogue }>
                                                                        <a style={{ textTransform:"capitalize" }} target="_blank">{ data.name_slug }</a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                            
                                        </li>

                                    </>
                                :
                                    <></>
                            }

                            {   statusCode == 200 ?
                                    <>
                                        <li>
                                            <a href="/visualizer">Visualizer</a>
                                        </li>
                                    </>
                                :
                                    <></>
                            }

                            <li>
                                <Link href="/contact" >
                                    <a className={Router.pathname.includes("contact") ? "active" : ""}>Contact</a>
                                </Link>
                            </li>
                            
                            {/* <!-- Divider --> */}
                            <li><a>&nbsp;</a></li>
                            
                            {/* <!-- Search --> */}
                            <li>
                                <a className="mn-has-sub"><i className="main-nav-icon-search"></i> Search</a>
                                
                                <ul className="mn-sub">
                                    
                                    <li>
                                        <div className="mn-wrap">
                                            <form method="post" className="form" encType="multipart/form-data" onSubmit={ submitSearchForm }>
                                                <div className="search-wrap">                                                    
                                                    <input type="text" name="search" id="search" className="form-control search-field round" placeholder="Search..." onChange={ (e) => setSearchData({search: e.target.value}) } value={ searchData.search } />
                                                    <button className="search-button animate" type="submit" title="Start Search">
                                                        <i className="fa fa-search" onClick={ submitSearchForm }></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    
                                </ul>
                                
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </nav>
        
        </>
    )
}

export default Header
