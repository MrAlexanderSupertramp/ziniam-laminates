// import { useEffect, useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import { useRouter } from "next/router"


// function NotFound() {

//     useScript('/js/jquery-3.5.1.min.js');
//     useScript('/js/jquery.easing.1.3.js');
//     useScript('/js/bootstrap.bundle.min.js');
//     useScript('/js/SmoothScroll.js');
//     useScript('/js/jquery.scrollTo.min.js');
//     useScript('/js/jquery.localScroll.min.js');
//     useScript('/js/jquery.viewport.mini.js');
//     useScript('/js/jquery.countTo.js');
//     useScript('/js/jquery.appear.js');
//     useScript('/js/jquery.parallax-1.1.3.js');
//     useScript('/js/jquery.fitvids.js');
//     useScript('/js/owl.carousel.min.js');
//     useScript('/js/isotope.pkgd.min.js');
//     useScript('/js/imagesloaded.pkgd.min.js');
//     useScript('/js/jquery.magnific-popup.min.js');
//     useScript('/js/masonry.pkgd.min.js');
//     useScript('/js/jquery.lazyload.min.js');
//     useScript('/js/wow.min.js');
//     useScript('/js/morphext.js');
//     useScript('/js/typed.min.js');
//     useScript('/js/all.js');
//     useScript('/js/contact-form.js');
//     useScript('/js/jquery.ajaxchimp.min.js');
//     useScript('/js/objectFitPolyfill.min.js');
//     useScript('/js/splitting.min.js');

//     return (
//             <>
//                 <Head>

//                     <title>Ziniam | 404 Not Found</title>

//                 </Head>

//                 <main id="main">    
                    
//                     {/* <!-- Home Section --> */}
//                     <section className="home-section bg-dark-alfa-70 parallax-5" data-background="/images/full-width-images/section-bg-14.jpg" id="home">
//                         <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
                            
//                             {/* <!-- Hero Content --> */}
//                             <div className="home-content">
//                                 <div className="hs-wrap">
//                                     <div className="wow fadeInUpShort" data-wow-delay=".1s">
//                                         <h1 className="hs-line-1 opacity-085 mb-40 mb-xs-20">404</h1>
//                                     </div>
//                                     <div className="wow fadeInUpShort" data-wow-delay=".2s">
//                                         <p className="hs-line-6 opacity-07">
//                                             The page you were looking for could not be found.
//                                         </p>
//                                     </div>
//                                     <div className="local-scroll wow fadeInUpShort" data-wow-delay=".3s">
//                                         <Link href="/">
//                                             <a className="btn btn-mod btn-w btn-round btn-small"><i className="fa fa-angle-left"></i> Back To Home Page </a>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </section>
                    
//                 </main> 

//             </>
//     )
// }

// export default NotFound


// const useScript = url => {
//     useEffect(() => {
//             const script = document.createElement('script');
//             script.src = url;
//             script.async = false;
//             script.defer = false;
//             document.body.appendChild(script);
//             return () => {
//                 document.body.removeChild(script);
//             };
//     }, [url]);
// };