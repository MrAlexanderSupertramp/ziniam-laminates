import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import axiosInstance from '../components/axios'
import { useRouter } from "next/router"
import { useContext } from 'react'
import VisualizerHeaderContext from '../context/VisualizerHeaderContext'



function visualizer({ statusCode, data, res }) {

    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    const { menuItemAreas } = useContext(VisualizerHeaderContext)
    const statusCodeArea = menuItemAreas.statusCode

    const { active, setActive } = useContext(VisualizerHeaderContext)

    // console.log(active)


    // console.log(menuItemAreas.active)

    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {

        if (statusCodeArea !== 200) {
            window.location = '/404'
            return false
        }
        else{
            setLoading(false)
        }
        return true
    }, [])


    useStyle('/vsg/css/msi-ui6c3f.css');
	useStyle('/vsg/css/classic-10_7.css');
    useStyle('/vsg/css/style.css');
    // useStyle('/vsg/css/obec92.css');
    useStyle('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Raleway:400,500&amp;selection.subset=latin-ext');
    useStyle('/vsg/css/font-awesome.min.css');
    
    useHeadScript('/vsg/js/jquery0260.js');
    useHeadScript('/vsg/js/magic.js');
    useScript('/vsg/js/mc-validate.js');
    useScript('/vsg/js/modal.js');
    useScript('/vsg/js/embed.js');
    useScript('/vsg/js/rum.js');
    useScript('/vsg/js/173033.js');
    useScript('/vsg/js/obec92.js');
    useScript('/vsg/js/jqueryui3024.js');
    useScript('/vsg/js/base7581.js');


    // magical code
    const doAction = (url, name, brand) => {
        window.doAction(url, name, brand)
    }


    // fetching visualizer area
    const [Visualizerdata, setVisualizerdata] = useState([])

    const [error, setError] = useState(false)
    const [errorDetail, setErrorDetail] = useState([])
    
    // use-effect : fetch all the visualizer areas
    // const Request = () => {
    //     useEffect(() => {
    //         async function fetchProducts() {
    //             const request = await axiosInstance.get(`/visualizer_area/`)
    //             setVisualizerdata(request.data)
    //             return request
    //         }

    //         fetchProducts()
    //         .then(function() {
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             // console.log(error)
    //             // setError(true)
    //             // setErrorDetail(error)
    //             window.location.href = "/404"
    //             return error
    //         })
    //     }, [])
    // }
    // Request()



    return (
        <>

            <Head>

                <title>Visualizer | Ziniam Laminates</title>

                <meta name="description" content="Experience the world of beautiful designs first-hand with the help of our technologically advanced visualiser. Visualise the magic your space could withhold with us. " />

            </Head>   

            {/* <!-- main section --> */}
            <section role="main">

                <div className="ss-section">
                    <div className="container">

                        <div className="row space-top-2x">

                            {/* <!-- right content --> */}
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-4 col-xl-push-8" id="EnvisionBathroom">
                                <h1 className="text-center vsg-title">ENVISION YOUR SPACE</h1>
                                <p className="text-center bathroom_text">
                                    Encounter the enlivened version of our products to ensure their presence and their beauty that we promise to bring to your space. 
                                </p>
                                <div className="hidden-xs hidden-sm hidden-md" id="instructions">
                                    <div className="instruct">
                                        <h4 className="text-center instruct-heading">INSTRUCTIONS</h4>
                                        <div className="image123">
                                            <img className="img-responsive" Align="middle" src="/vsg/images/onetwothree.png" alt="onetwothree" />
                                        </div>
                                        <div className="instruct-text">
                                            <p className="p1">Choose Application Area.</p>
                                            <p className="p2">Select any of our Product.</p>
                                            <p className="p3">Witness the Magic!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="hidden-xs hidden-sm hidden-md hidden-lg selected-opt">
                                        <div className="h5 text-center">Selected option</div>
                                        <br/>
                                        <div className="col-lg-9 selected-backsplash-left">
                                            <h3 className="text-center brand-name" style={{ marginTtop: '0px' }}>Charco Charm</h3>
                                                <img id="backsplashthumbimg" className="image-selected img-responsive" style={{ height: '100px', width: '100px', objectFit: 'cover !important' }} src="/images/CHARCO_MF_62.jpg"/>
                                            <a className="backsplashprodid text-center post-title">MF 62</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- left main image --> */}
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-8 col-xl-pull-4 space-top">
                                <canvas id="bhCanvas" className="hide" height="712" width="930"></canvas>
                                { 
                                    Loading === true ?
                                        <div style={{ width:"100%", textAlign:"center" }}>
                                            <img src="/images/loader.svg" alt="" style={{ marginTop:"20%" }} />
                                        </div>
                                    :
                                        <img src={ active.image1 } alt="" style={{ position: 'relative', width: '100%', backgroundImage: "url('/images/CHARCO_MF_62.jpg')", backgroundSize: '16%' }} className="main-image" id="main-image" />
                                }
                            </div>
                            
                        </div>

                        <div className="row space-top bth_visualizerwidth" id="BathroomVisualizer">
                            <div className="col-xs-12 tabs" id="tabsalign">

                                {
                                    statusCode == 200 ? 

                                        <>
                                            <ul className="nav nav-tabs">

                                                <li className="hidden-sm hidden-md hidden-lg"> <br /><br /></li>

                                                {
                                                    data.map((data_item) => {
                                                        return (
                                                            <li key={data_item.id} className={ data_item.product.has_vsg_active === true ? "pull-left backsplash active" : "pull-left backsplash" }>
                                                                <a href={"#" + data_item.product.name_slug} data-toggle="tab" style={{ textTransform: "capitalize" }}>{data_item.product.name_slug}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <div className="tab-content">

                                                {
                                                    data.map((data_item) => {
                                                        return (
                                                            <div key={data_item.id} id={data_item.product.name_slug} className={ data_item.product.has_vsg_active === true ? "tab-pane fade backsplash in active" : "tab-pane fade backsplash" }>
                                                                <div className="row">
                                                                    <label className="col-xs-12 prod-text" style={{ textTransform: "capitalize" }}>{data_item.product.name} : <a className="backsplashprodname post-title"> MF 62 </a><br /></label>
                                                                    <br />
                                                                </div>
                                                                <div className="row  tab-scroll subcategory-tab">

                                                                    {
                                                                    data_item.collection.map((collection_item) => {
                                                                        return (
                                                                            <div key={collection_item.id} className="subcategory-img text-left" data-filter="2924" data-subcategory="backsplash">
                                                                                <span data-filter="2924" className="text-center">
                                                                                    <a href="javascript:void(0)" style={{ cursor: 'pointer' }} className="crop">
                                                                                        <img className="thumbimg product-image lazy" id="call-magic" src={collection_item.image1} loading="lazy" alt={collection_item.number} onClick={ () => doAction(collection_item.image1, collection_item.number, data_item.product.name) } style={{ objectFit: 'cover !important' }} />
                                                                                    </a>
                                                                                    <figcaption className="img-title">{collection_item.number}</figcaption>
                                                                                    <div style={{ width: '100%', marginTop: '-50px', paddingBottom: '30px' }}><a href={collection_item.image1} target="_blank"><button className="buttonin"><i className="fa fa-search-plus" style={{ color: '#8B6F4E' }}></i></button></a></div>
                                                                                </span>
                                                                            </div>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </>

                                    : 
                                        <section style={{ paddingBottom: '90px', textAlign: 'center', }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center" style={{ paddingBottom: '30px' }}>
                                                        <h6>Something went wrong while fetching the products</h6>
                                                    </div>
                                                    <div className="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                                                        <button className="btn btn-primary btn-icon btn-icon-right" onClick={() => Router.push(current_path)}>Refresh</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                }

                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

const useStyle = url => {
    useEffect(() => {
            const style = document.createElement('link');
			style.rel = "stylesheet";
            style.href = url;
            style.async = false;
            style.defer = true;
            document.head.appendChild(style);
            return () => {
                document.head.removeChild(style);
            };
    }, [url]);
};

const useHeadScript= url => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = false;
        script.defer = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [url]);
};

const useScript = url => {
    useEffect(() => {
            const script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.defer = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
    }, [url]);
};



export default visualizer


export async function getServerSideProps(context) {

    const Request = () => {

        return axiosInstance
            .get(`visualizer/`)
            .then((response) => {
                response = {
                    "statusCode": response.status,
                    "statusText": response.statusText,
                    "data": response.data,
                }
                return response
            })
            .catch(response => {
                if (response.response != undefined) {
                    response = {
                        "statusCode": response.response.status,
                        "statusText": response.response.statusText,
                        "data": response.response.data,
                    }
                }
                else {
                    response = {
                        "statusCode": "ECONNREFUSED",
                        "statusText": "Can not connect",
                        "data": "null",
                    }
                }
                return response
            });
        }

    const response = await Request()

    // const data = response.data
    // for (const [key, value] of Object.entries(data)) {
    //     console.log(`${key}: ${value.collection.image1}`);
    // }
    // console.log(product_single)
    // console.log(response.statusCode)

    // return {
    //     redirect: {
    //         destination:'/404',
    //         permanent: false,
    //     }
    // }


    return {
        props: {
            statusCode : response.statusCode,
            data: response.data,
            // product_count: response.data,
        }
    }

}
