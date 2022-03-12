import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axiosInstance from '../../../components/axios'
import { useRouter } from "next/router"
import CallToAction from '../../../components/CallToAction'



export default function Products({ statusCode, data, collection_count, product_name }) {

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


    // Fstate : Fullsheet (fetched fullsheets will be stored here)
    // const [data, setData] = useState([]);
    // const [fetchStatus, setFetchStatus] = useState(true)

    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    // pagination
    let pages = []
    let itemsPerPage = 15
    let currnetPage = Router.query.page

    if(collection_count) {

        // collection count
        // const collection_count = collection_count
        // Pstate : Pagination
        for(let i=1; i<=Math.ceil(collection_count/itemsPerPage); i++){
            pages.push(i);
        }

        // current page determination
        if(currnetPage==undefined){
            currnetPage = 1
        }

        // route change
        const pageNumClick = (page) => {
            Router.push({
                pathname: Router.pathname,
                query: { productsNAME: Router.query.productsNAME, page: page },
            });
        };
    }

    return (
        <>
        
            <Head>

                <title>Ziniam | Collection</title>

            </Head>

            <main id="main">

                {/* <!-- Home Section --> */}
                <section className="page-section" id="home">
                    <div className="container relative text-center">
                        
                        <div className="row">

                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="hs-line-4 mb-30 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s"><span className="d-inline-block bg-gray round px-3 pb-1">COLLECTION</span></h1>
                                <h2 className="hs-line-7 mb-0 wow fadeInUpShort" data-wow-delay=".2s" style={{ textTransform: "uppercase" }}>{ product_name }</h2>

                            </div>
                        </div>
                    
                    </div>
                </section>

                {
                    statusCode == 200 && collection_count ? 

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
                            

                            {/* <!-- Pagination --> */}
                            <div className="container">
                                <div className=" mb-90 mb-xs-40">
                                    <div className="mb-10">
                                        {
                                            pages.map((pages) => {
                                                return(
                                                    <a key={ pages } id={ pages } className={ currnetPage == pages ? "btn btn-mod btn-large btn-round btn-active" : "btn btn-mod btn-border btn-large btn-round btn-active" } style={{ marginRight: "5px" }} onClick={() => pageNumClick(pages)}>{ pages }</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </>

                    :

                        <>
                            <div className="container relative text-center" style={{ marginBottom: "100px" }}>
                                <div className="row">
                                    <div className="col-12">
                                        <p style={{ textTransform:"uppercase" }}>No collection was found for { product_name }</p>
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

    const product_single = context.query.productsNAME

    const current_page = context.query.page

    if(current_page===undefined){
        current_page == ""
    }

    const Request = () => {

        return axiosInstance
            .get(`/product/` + product_single + `/collection/`, {
                params: {
                    page: current_page,
                }
            } )
            .then((response) => {
                response = {
                    "statusCode": response.status,
                    "statusText": response.statusText,
                    "data": response.data.collection,
                    "collection_count": response.data.collection_count,
                }
                return response
            })
            .catch(response => {
                if (response.response != undefined) {
                    response = {
                        "statusCode": response.response.status,
                        "statusText": response.response.statusText,
                        "data": response.response.data,
                        "collection_count": null,
                    }
                }
                else {
                    response = {
                        "statusCode": "ECONNREFUSED",
                        "statusText": "Can not connect",
                        "data": "null",
                        "collection_count": null,
                    }
                }
                return response
            });
        }

    const response = await Request()

    // console.log(response.data)
    // console.log(product_single)
    // console.log(response.statusCode)

    return {
        props: {
            statusCode : response.statusCode,
            data: response.data,
            product_name: product_single,
            collection_count: response.collection_count
        }
    }

}


