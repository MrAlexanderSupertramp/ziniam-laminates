import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axiosInstance from '../../../components/axios'
import { useRouter } from "next/router"
import CallToAction from '../../../components/CallToAction'



export default function Product_detail({ statusCode, data, product_name }) {

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
    // useScript('/js/menu-separated.js')
    useScript('/js/contact-form.js')
    useScript('/js/jquery.ajaxchimp.min.js')
    useScript('/js/objectFitPolyfill.min.js')
    useScript('/js/splitting.min.js')

    // router definitaion
    const Router = useRouter()
    const current_path = Router.asPath

    // console.log(product_name)
    
    return (
        <>

            <Head>

                <title>Product-Detail | Ziniam Laminates</title>

                {statusCode == 200 ? <meta name="description" content={ data.intro } /> : <></>}

            </Head>

            <main id="main">

            {
                statusCode == 200 ? 

                    <>
                
                        {/* <!-- Home Section --> */}
                        <section className="page-section" id="home">
                            <div className="container relative text-center">
                                
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h1 className="hs-line-4 mb-30 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s"><span className="d-inline-block bg-gray round px-3 pb-1">PRODUCT-DETAIL</span></h1>
                                        <h2 className="hs-line-7 mb-0 wow fadeInUpShort" data-wow-delay=".2s">{ data.name }</h2>
                                    </div>
                                </div>
                            
                            </div>
                        </section>
                        
                        
                        {/* <!-- About Section --> */}
                        <section className="page-section pt-0 pb-0" >
                            <div className="container relative">
                                
                                <div className="mb-120 mb-sm-50 wow fadeInUpShort" data-wow-delay=".3s" style={{ textAlign: "center" }}>
                                    <img src={ data.image1 } alt="Your Image Description" style={{ width: "90%", textAlign: "center" }} />
                                </div>
                                
                                <div className="mb-120 mb-sm-50">
                                    <div className="row section-text">
                                    
                                        <div className="col-lg-4 mb-md-50 mb-xs-30">
                                            <div className="lead-alt wow linesAnimIn" data-wow-offset="0" data-splitting="lines">{ data.title }</div>
                                        </div>
                                        
                                        <div className="col-lg-8 mb-sm-50 mb-xs-30 wow linesAnimIn" data-wow-offset="0" data-splitting="lines">
                                            { data.description }
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                {
                                    product_name == 'multicol' ? 
                                        <></>
                                        :
                                        <>
                                            {/* <!-- Counters --> */}
                                            <div className="count-wrapper mb-120 mb-sm-50">
                                                <div className="row">
                                                    
                                                    {/* <!-- Counter Item --> */}
                                                    <div className="col-md-4 col-lg-4 mb-md-30">
                                                        <div className="count-item">
                                                            <div className="count-bg wow scalexIn"></div>
                                                            <div className="relative wow fadeIn" data-wow-delay="1s">
                                                                <div className="count-number">
                                                                    { data.sheet }
                                                                </div>
                                                                <div className="count-descr">
                                                                    <span className="count-title">Full-Sheets</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* <!-- Counter Item --> */}
                                                    <div className="col-md-4 col-lg-4 mb-md-30">
                                                        <div className="count-item">
                                                            <div className="count-bg wow scalexIn"></div>
                                                            <div className="relative wow fadeIn" data-wow-delay="1.1s">
                                                                <div className="count-number">
                                                                    { data.finish }
                                                                </div>
                                                                <div className="count-descr">
                                                                    <span className="count-title">Finish</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* <!-- Counter Item --> */}
                                                    <div className="col-md-4 col-lg-4 mb-md-30">
                                                        <div className="count-item">
                                                            <div className="count-bg wow scalexIn"></div>
                                                            <div className="relative wow fadeIn" data-wow-delay="1.2s">
                                                                <div className="count-number">
                                                                    { data.customer }
                                                                </div>
                                                                <div className="count-descr">
                                                                    <span className="count-title">Coffee Cups</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </>
                                }
                                
                            </div>
                        </section>     
                        
                        {
                            product_name == 'multicol' ? 
                                <></>
                                :
                                <>
                                    {/* <!-- Collection Section --> */}
                                    <section className="page-section bg-dark bg-dark-alfa-70 bg-scroll light-content" data-background="/images/full-width-images/section-bg-2.jpg">
                                        <div className="container relative">
                                            
                                            <div className="row">
                                                <div className=" col-lg-8 offset-lg-2 wow fadeInUpShort">
                                                    
                                                    <div className="text-center mb-50 mb-sm-20">
                                                        <h2 className="section-title">Make Your Living Beautiful</h2>
                                                    </div>
                                                    
                                                    <div className="text-slider">
                                                        
                                                        {/* <!-- Slide Item --> */}
                                                        <div>
                                                            <blockquote className="testimonial">
                                                                <p>
                                                                    Ziniam laminates is an market leader in laminates distribution industry with unlimited options for customers to choose from. We have got wide range of products which dont only enhances the interior's presenability but freshens the complete aura of your surrounding. Have some glimps of our extraordinary colelction of laminates.
                                                                </p>
                                                            </blockquote>
                                                            <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
                                                                <Link href={ `/products/${ product_name }/collection` }>
                                                                    <a className="btn btn-mod btn-w btn-large btn-round">Explore Collection</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>                            
                                                                            
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </section>
                                </>
                        }
                        
                        {/* <!-- Divider --> */}
                        <hr className="mt-0 mb-0" />
                        
                        
                        {/* <!-- Section --> */}
                        <section className="page-section">
                            <div className="container relative">
                                
                                <div className="text-center mb-80 mb-sm-50">
                                    <h2 className="section-title">Why Choose Us?</h2>
                                    <p className="section-title-descr">
                                        What will you get if you choose us?
                                    </p>
                                </div>
                                
                                {/* <!-- Features Grid --> */}
                                <div className="row alt-features-grid">
                                    
                                    {/* <!-- Features Item --> */}
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="alt-features-item text-center wow fadeScaleIn" data-wow-delay="0" data-wow-duration="1s">
                                            <div className="alt-features-icon mx-auto">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z"/>
                                                </svg>
                                            </div>
                                            <h3 className="alt-features-title">Passionate Solutions</h3>
                                            <div className="alt-features-descr">
                                                Be it a home or an office or any commercial place, we're here to help
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Features Item --> */}
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="alt-features-item text-center wow fadeScaleIn" data-wow-delay=".1s" data-wow-duration="1s">
                                            <div className="alt-features-icon mx-auto">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z"/>
                                                </svg>
                                            </div>
                                            <h3 className="alt-features-title">Experienced Staff</h3>
                                            <div className="alt-features-descr">
                                                To help you with suggestions and better applicable ideas.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Features Item --> */}
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="alt-features-item text-center wow fadeScaleIn" data-wow-delay=".2s" data-wow-duration="1s">
                                            <div className="alt-features-icon mx-auto">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M6.514 24.015h-3v-3.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.718 1.817 1.302 3.274 1.777 4.454.26-.596.567-1.288.928-2.103.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265 2.094 4.727 2.363 5.334 2.363 6.764 0 2.927-2.078 5.422-5 6.082v4.015h-3v-4.015c-.943-.213-1.797-.617-2.523-1.165-.612.845-1.466 1.48-2.477 1.79v3.39zm14.493-6c1.652 0 2.993 1.341 2.993 2.993s-1.341 2.993-2.993 2.993-2.993-1.341-2.993-2.993 1.341-2.993 2.993-2.993zm.007.993c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-7.5 3.993v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-6.123-12.448l-.08-.198c-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c1.266-.273 2.159-.876 2.725-1.666-1.078-1.12-1.725-2.619-1.725-4.251 0-.979.126-1.572.877-3.365z"/>
                                                </svg>
                                            </div>
                                            <h3 className="alt-features-title">Product Range</h3>
                                            <div className="alt-features-descr">
                                                With more than 1500 products, you've got plenty of choices.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Features Item --> */}
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="alt-features-item text-center wow fadeScaleIn" data-wow-delay=".3s" data-wow-duration="1s">
                                            <div className="alt-features-icon mx-auto">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"/>
                                                </svg>
                                            </div>
                                            <h3 className="alt-features-title">More Than Just Laminates</h3>
                                            <div className="alt-features-descr">
                                                We pride ourselves on being available for the best laminate services.
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </section>

                    </>

                :
                    <>
                        <div className="container relative text-center" style={{ marginBottom: "100px", marginTop: "200px" }}>
                            <div className="row">
                                <div className="col-12">
                                    <p style={{ textTransform:"uppercase" }}>Something went wrong, please try again later!</p>
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



export async function getServerSideProps(context) {

    // const router = useRouter()
    // const current_path = router.pathname.split('/')[1]

    // console.log(context.req.url)
    // console.log(context.req.__nextStrippedLocale)

    const product_single = context.query.productsNAME

    const Request = () => {

        return axiosInstance
            .get(`product/` + product_single)
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

    return {
        props: {
            statusCode : response.statusCode,
            data: response.data,
            product_name: product_single,
        }
    }

}

