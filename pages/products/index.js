import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axiosInstance from '../../components/axios'
import { useRouter } from 'next/router'
import CallToAction from '../../components/CallToAction'
// import Footer from '../../components/Footer'
// import Header from '../../components/Header'
// import axios from 'axios'


export default function Products({ statusCode, data }) {

    useScript('/js/jquery-3.5.1.min.js');
    useScript('/js/jquery.easing.1.3.js');
    useScript('/js/bootstrap.bundle.min.js');
    useScript('/js/SmoothScroll.js');
    useScript('/js/jquery.scrollTo.min.js');
    useScript('/js/jquery.localScroll.min.js');
    useScript('/js/jquery.viewport.mini.js');
    useScript('/js/jquery.countTo.js');
    useScript('/js/jquery.appear.js');
    useScript('/js/jquery.parallax-1.1.3.js');
    useScript('/js/jquery.fitvids.js');
    useScript('/js/owl.carousel.min.js');
    useScript('/js/isotope.pkgd.min.js');
    useScript('/js/imagesloaded.pkgd.min.js');
    useScript('/js/jquery.magnific-popup.min.js');
    useScript('/js/masonry.pkgd.min.js');
    useScript('/js/jquery.lazyload.min.js');
    useScript('/js/wow.min.js');
    useScript('/js/morphext.js');
    useScript('/js/typed.min.js');
    useScript('/js/all.js');
    useScript('/js/contact-form.js');
    useScript('/js/jquery.ajaxchimp.min.js');
    useScript('/js/objectFitPolyfill.min.js');
    useScript('/js/splitting.min.js');
    // useScript('js/menu.js');




    // Fstate : Fullsheet (fetched fullsheets will be stored here)
    // const [data, setData] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(true);

    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    return (
        <>
        
            <Head>

                <title>Ziniam | Products</title>

            </Head>

            <main id="main">
                
                {/* <!-- Home Section --> */}
                <section className="page-section" id="home">
                    <div className="container relative text-center">
                        
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="hs-line-4 mb-30 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s"><span className="d-inline-block bg-gray round px-3 pb-1">Our Associates</span></h1>
                                <h2 className="hs-line-7 mb-0 wow fadeInUpShort" data-wow-delay=".2s">We work with best in the market</h2>
                            </div>
                        </div>
                        
                    </div>
                </section>
                
                
                {/* <!-- Section --> */}
                {
                    statusCode == 200 ? 

                        <>
                            <section className="page-section pt-0">
                                <div className="container relative">
                                    
                                    {/* <!-- Logo Grid --> */}
                                    <div className="row alt-features-grid">

                                        {
                                            data.map((data, index) => {
                                                if(data.is_visible === true){
                                                    return (
                                                        <div key={data.id} className="col-sm-6 col-md-4 col-lg-4">
                                                            <div className="alt-features-item align-left wow fadeIn" data-wow-delay="0" data-wow-duration="1.5s">
                                                                <div className="mb-20">
                                                                    <Link href={`/products/${ data.name_slug }`}>
                                                                        <a>
                                                                            <img src={ data.image1 } alt="Add Image Description" />
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <Link href={`/products/${ data.name_slug }`}>
                                                                    <a>
                                                                        <h3 className="alt-features-title">{ data.name }.</h3>
                                                                    </a>
                                                                </Link>
                                                                <div className="alt-features-descr align-left">{ data.intro }</div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                        
                                    </div>
                                    
                                </div>
                            </section>
                        </>
                    :
                        <>
                            <div className="container relative text-center" style={{ marginBottom: "100px" }}>
                                <div className="row">
                                    <div className="col-12">
                                        <p style={{ textTransform:"uppercase" }}>No products were found !</p>
                                        {/* <Link href={ `/products/${ product_name }/collection` }> */}
                                            <a class="btn btn-mod btn-border btn-large btn-round mx-md-1" onClick={() => Router.push(current_path)}>Refresh</a>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </>
                }

                {/* <!-- Call Action Section --> */}
                <CallToAction />
                
                
            </main>

        </>
    )
}

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



export async function getServerSideProps() {

    const Request = () => {

        return axiosInstance
            .get(`/product/`)
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
    
    // console.log("+++++++++++++++++++++++++++++++++")
    // console.log(response)

    return {
        props: {
            statusCode : response.statusCode,
            data: response.data,
        }
    }

}