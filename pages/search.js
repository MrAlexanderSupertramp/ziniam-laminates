import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axiosInstance from '../components/axios'
import { useRouter } from "next/router"
import CallToAction from '../components/CallToAction'



export default function search({ statusCode, data, searchItem }) {

    useScript('/js/jquery-3.5.1.min.js')
    useScript('/js/jquery.easing.1.3.js')
    useScript('/js/bootstrap.bundle.min.js')
    useScript('/js/SmoothScroll.js')
    useScript('/js/jquery.scrollTo.min.js')
    useScript('/js/jquery.localScroll.min.js')
    useScript('/js/jquery.viewport.mini.js')
    useScript('/js/jquery.countTo.js')
    useScript('/js/jquery.appear.js')
    useScript('/js/jquery.parallax-1.1.3.js')
    useScript('/js/jquery.fitvids.js')
    useScript('/js/owl.carousel.min.js')
    useScript('/js/isotope.pkgd.min.js')
    useScript('/js/imagesloaded.pkgd.min.js')
    useScript('/js/jquery.magnific-popup.min.js')
    useScript('/js/masonry.pkgd.min.js')
    useScript('/js/jquery.lazyload.min.js')
    useScript('/js/wow.min.js')
    useScript('/js/morphext.js')
    useScript('/js/typed.min.js')
    useScript('/js/all.js')
    useScript('/js/contact-form.js')
    useScript('/js/jquery.ajaxchimp.min.js')
    useScript('/js/objectFitPolyfill.min.js')
    useScript('/js/splitting.min.js')


    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    const collection_length = Object.keys(data).length

    return (
        <>
            <Head>
                <title>Ziniam | Search</title>
            </Head>

            <main id="main">
                {/* <!-- Home Section --> */}
                <section className="page-section" id="home">
                    <div className="container relative text-center">
                        
                        <div className="row">

                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="hs-line-4 mb-30 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s"><span className="d-inline-block bg-gray round px-3 pb-1">SEARCH</span></h1>
                                <h2 className="hs-line-7 mb-20 wow fadeInUpShort" data-wow-delay=".2s">{ searchItem }</h2>
                                { statusCode == 200 ? <h6 className="hs-line-3 wow fadeInUpShort">{ collection_length } collection items found for value "{ searchItem.trim() ? searchItem : "Nothing" }"</h6> : <></> }

                            </div>
                        </div>
                    
                    </div>
                </section>

                {
                    statusCode == 200 ? 

                        <>
                            {/* <!-- Section --> */}
                            <section className="page-section pt-0">
                                <div className="container relative">
                                    
                                    {/* <!-- Photo Grid --> */}
                                    <div className="row mb-30 mb-xs-10">
                                        
                                        {/* <!-- Photo Item --> */}
                                        {
                                            data.map((data) => {
                                                return (
                                                    <div className="col-md-4 mt-5 col-sm-6 col-xs-6 col-6">
                                                        <div className="post-prev-img mb-30 wow fadeScaleIn" data-wow-duration="1s">
                                                            <h2 className="mobile-sm">{data.number}</h2>
                                                            <a href={data.image1} className="lightbox-gallery-2 mfp-image"><img src={data.image1} alt={data.number} /></a>
                                                        </div>
                                                    </div>
                                                )
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
                                        <p style={{ textTransform:"uppercase" }}>Something went wrong while searching for the collection.</p>
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
            script.defer = false;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
    }, [url]);
};

export async function getServerSideProps(context) {

    const search_item = context.query.q
    // console.log(search_item)

    if(!search_item){
        return {
            props: {
                statusCode : "ECONNREFUSED",
                data: "null",
                searchItem: search_item,
            }
        }
    }

    const Request = () => {

        return axiosInstance
            .get(`/search`, {
                params: {
                    q: search_item,
                }
            } )
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

    // console.log(response.data)
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
            searchItem: search_item,
        }
    }

}
