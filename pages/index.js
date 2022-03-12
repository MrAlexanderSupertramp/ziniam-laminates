import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import { useContext } from 'react'
import HeaderContext from '../context/HeaderContext'


export default function Home() {

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

    const { menuItemProducts } = useContext(HeaderContext)

    // console.log(menuItemProducts)

    return (
        <>

            <Head>

                <title>Ziniam | Home</title>

            </Head>            
            
            {/* <!-- Page Wrap --> */}
            {/* <div className="page" id="top"> */}

                {/* <!-- Skip to Content --> */}
                {/* <a href="#main" className="btn skip-to-content">Skip to Content</a> */}

                {/* <Header /> */}

                <main id="main">
                    
                    {/* <!-- Home Section --> */}
                    <div className="relative" id="home">
                        
                        {/* <!-- Fullwidth Slider --> */}
                        <div className="fullwidth-gallery-wrapper">
                            <div className="">
                            
                                {/* <div className="home-section bg-scroll" data-background="/images/Home5.png">
                                    <div className="min-height-100vh"></div>
                                </div> */}

                                <div class="home-section bg-scroll" data-background="/images/Home5.png" style={{ backgroundImage: "url('/images/Home5.png')", }}>
                                    <div class="min-height-100vh"></div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="fullwidth-galley-content">
                            <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
                            
                                {/* <!-- Hero Content --> */}
                                <div className="home-content">
                                    <h1 className="hs-line-3 mb-40 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s" style={{ color: "#313974" }}>The Unbeatable</h1>
                                    <h2 className="hs-line-2 mb-70 mb-xs-40 wow fadeInUpShort" data-wow-delay=".2s" style={{ color: "#313974" }}>Laminate designs, price & quality!</h2>
                                    
                                    <div className="local-scroll mb-20 wow fadeInUpShort" data-wow-delay=".3s">
                                        {/* <Link href="/contact">
                                            <a class="btn btn-mod btn-large btn-round" href="/products">Explore Products</a>
                                        </Link> */}
                                    </div>
                                </div>
                                
                                {/* <!-- Scroll Down --> */}
                                <div className="local-scroll scroll-down-wrap wow fadeInUpShort" data-wow-offset="0">
                                    <a href="#about" className="scroll-down"><i className="scroll-down-icon"></i><span className="sr-only">Scroll to the next section</span></a>
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                    
                    
                    {/* <!-- About Section --> */}
                    <section className="page-section" id="about">
                        <div className="container relative">
                            
                            <div className="mb-120 mb-sm-50 mb-xs-20">
                                <div className="row section-text">
                                
                                    <div className="col-md-12 col-lg-4 mb-md-50 mb-xs-30">
                                        <div className="lead-alt wow linesAnimIn" data-splitting="lines">
                                            Resolving your all décor confusions is our sole mission.
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30 wow linesAnimIn" data-splitting="lines">
                                        Are you planning to renovate, create or design a new space? Be it an office, a home or a business place, if your answer to the above question is yes, you must visit our product page. We abide by providing the widest possible range of laminates for all your designing wishes.
                                    </div>
                                    
                                    <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30 wow linesAnimIn" data-splitting="lines">
                                        Excellence, services and the clients always come to the core for Ziniam Laminates. We believe in distributing every piece of furniture to the fresh one! Huge array of laminates are available here with us! So, come and explore our website to get exactly what you want for your dream projects.
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* <!-- Counters --> */}
                            <div className="count-wrapper">
                                <div className="row">
                                    
                                    {/* <!-- Counter Item --> */}
                                    <div className="col-md-6 col-lg-3 mb-md-30">
                                        <div className="count-item">
                                            <div className="count-bg wow scalexIn"></div>
                                            <div className="relative wow fadeIn" data-wow-delay="1s">
                                                <div className="count-number">
                                                    680
                                                </div>
                                                <div className="count-descr">
                                                    <i className="fa fa-briefcase"></i>
                                                    <span className="count-title"> Projects Done</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Counter Item --> */}
                                    <div className="col-md-6 col-lg-3 mb-md-30">
                                        <div className="count-item">
                                            <div className="count-bg wow scalexIn"></div>
                                            <div className="relative wow fadeIn" data-wow-delay="1.1s">
                                                <div className="count-number">
                                                    270
                                                </div>
                                                <div className="count-descr">
                                                    <i className="fa fa-heart"></i>
                                                    <span className="count-title"> Happy Clients</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Counter Item --> */}
                                    <div className="col-md-6 col-lg-3 mb-md-30">
                                        <div className="count-item">
                                            <div className="count-bg wow scalexIn"></div>
                                            <div className="relative wow fadeIn" data-wow-delay="1.2s">
                                                <div className="count-number">
                                                    650
                                                </div>
                                                <div className="count-descr">
                                                    <i className="fa fa-coffee"></i>
                                                    <span className="count-title"> Range of Products</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Counter Item --> */}
                                    <div className="col-md-6 col-lg-3 mb-md-30">
                                        <div className="count-item">
                                            <div className="count-bg wow scalexIn"></div>
                                            <div className="relative wow fadeIn" data-wow-delay="1.3s">
                                                <div className="count-number">
                                                    12
                                                </div>
                                                <div className="count-descr">
                                                    <i className="fa fa-lightbulb"></i>
                                                    <span className="count-title"> Cities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                                                
                        </div>
                    </section>
                                
                    
                    {/* <!-- Divider --> */}
                    <hr className="mt-0 mb-0"/>
                    
                    
                    {/* <!-- Products Section --> */}
                    <section className="page-section">
                        <div className="container relative">
                            <div className="row">
                                
                                {/* <!-- Images -->  */}
                                <div className="col-lg-7 mb-md-60 mb-xs-30">                                                               
                                    <div className="call-action-2-images">
                                        
                                        <div className="call-action-2-image-1">
                                            <img src="/images/product_1.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="255" />
                                        </div>
                                        
                                        <div className="call-action-2-image-2">
                                            <img src="/images/product_2.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="134" />
                                        </div>
                                        
                                        <div className="call-action-2-image-3">
                                            <img src="/images/product_3.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="0" />
                                        </div>
                                        
                                    </div>                                                                              
                                </div>
                                
                                {/* <!-- Text --> */}
                                <div className="col-lg-5 wow fadeInUpShort" data-wow-duration="1.2s" data-wow-offset="255">
                                    
                                    <h2 className="section-title mb-50 mb-sm-20">Products</h2>
                                    
                                    <dl className="call-action-2-text mb-60 mb-sm-30">
                                        {/* <!-- <dt>
                                            01. We are strongly creative.
                                        </dt> --> */}
                                        <dd>
                                        Some priceless quality products are completely affordable and laminates that we provide are one of them! Providing products that transform your homes into something amazing is what we love to do! All the finish ranges of our products bring a simple elegance and style to any home. 
                                        <br /><br /> 
                                        We offer an extensive range of pre-finished laminates in a wide variety of natural types and colors. Combining the rigidness of vinyl with the durability of laminate, each sheet gives the best of both worlds. With all the options available, you can chose the beset one suitable for homes, offices and even commercial spaces. Undergone a minute and detailed style process, our sheets’ sustainability, durability and stylish nature make it popular among home owners and architects.
                                        </dd>
                                    </dl>
                                    
                                    <div className="local-scroll">
                                        <Link href="/products">
                                            <a className="btn btn-mod btn-large btn-round">Explore Products</a>
                                        </Link>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    

                    {/* <!-- Divider --> */}
                    <hr className="mt-0 mb-0" />
                    
                    
                    {/* <!-- Product-Features Section --> */}
                    <section className="page-section" id="services">
                        <div className="container relative">
                            
                            <div className="text-center mb-80 mb-sm-50">
                                <h2 className="section-title">Product-Features</h2>
                                <p className="section-title-descr">
                                    Our products are the best in the market.
                                </p>
                            </div>
                            
                            {/* <!-- Fetures Grid --> */}
                            <div className="row services-grid">
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay="0" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_fire_retardant.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Fire Retardant</h3>
                                        <div className="services-descr">
                                            Commonly used for interior decoration, and durability, the laminates that are fire retardant or heat resistant are highly in demand.
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay=".1s" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_scratch_resistant.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Scratch Resistant</h3>
                                        <div className="services-descr">
                                            Laminate sheets that are resistant to both minor scratches and abrasions are the best choices for any commercial space as well as a residential ones.
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay=".2s" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_stain_Resistant.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Stain Resistant</h3>
                                        <div className="services-descr">
                                            Our laminates are made from several different layers of materials. The upper layer of the substantial tested against all sorts if communal stains. 
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay=".0s" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_tremite_free.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Wear Resistant</h3>
                                        <div className="services-descr">
                                            Ziniam promises to deliver only the sheets that are, during production to extend the lifetime of the sheet. Laminate sheet is given an AC rating, which tells the consumer the durability of the floor.
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay=".1s" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_water_resistant.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Water Resistant</h3>
                                        <div className="services-descr">
                                        The high pressure laminates that are a thermosetting material, has a natural resistance to microbial spread. As distributors, we care a lot to purchase the water resistant products only.
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Services Item --> */}
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="services-item text-center wow fadeIn" data-wow-delay=".2s" data-wow-duration="1.5s">
                                        <div className="services-icon">
                                            <img src="/images/features_anti_bacterial.svg" alt="" style={{ width: "200px", paddingBottom: "40px" }} />
                                        </div>
                                        <h3 className="services-title">Anti-Bacterial</h3>
                                        <div className="services-descr">
                                            We choose all the products for you that are made with exclusive Silver Nano technology, a distinct process that creates the highly wanted after range of antibacterial quality. 
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                    
                    
                    {/* <!-- Visualizer Section --> */}
                    <section className="page-section pt-0 pb-0 banner-section bg-dark light-content">
                        <div className="container relative">
                            
                            <div className="row">
                                
                                <div className="col-lg-6 relative">
                                    <div className="banner-image-1">
                                        <img src="/images/visualizer_2.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="292" />
                                    </div>
                                    <div className="banner-image-2">
                                        <img src="/images/visualizer_1.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="70" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-5 offset-lg-1">                                
                                    <div className="mt-140 mt-lg-80 mt-md-60 mt-xs-30 mb-140 mb-lg-80">
                                        <div className="banner-content wow fadeInUpShort" data-wow-duration="1.2s">
                                            <h3 className="banner-heading">Visualizer !!!</h3>
                                            <div className="banner-decription">
                                                To watch how exactly your choice of products will look like on the surfaces, the virtual library is the simplest yet important pleasure. Open an entire lounge of visionary reality of the interior placements.
                                            </div>
                                            <div className="local-scroll">
                                                <a href="/visualizer" className="btn btn-mod btn-w btn-large btn-round">Visualize</a>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                    
                    
                    {/* <!-- Divider --> */}
                    <hr className="mt-0 mb-0"/>
                    
                    
                    {/* <!-- Why-Us Section --> */}
                    <section className="page-section">
                        <div className="container relative">
                            <div className="row">
                                
                                {/* <!-- Text --> */}
                                <div className="col-lg-6 wow fadeInUpShort" data-wow-duration="1.2s" data-wow-offset="205">
                                    
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <h2 className="section-title mb-60 mb-sm-30">Why Us</h2>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Features Grid --> */}
                                    <div className="row alt-features-grid">
                                        
                                        {/* <!-- Features Item --> */}
                                        <div className="col-lg-6">
                                            <div className="alt-features-item">
                                                <div className="alt-features-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                        <path d="M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z"/>
                                                    </svg>
                                                </div>
                                                <h3 className="alt-features-title">Passionate Solutions</h3>
                                                <div className="alt-features-descr">
                                                    Be it a home or an office or any commercial place, we're here to help.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Features Item --> */}
                                        <div className="col-lg-6">
                                            <div className="alt-features-item">
                                                <div className="alt-features-icon">
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
                                        <div className="col-lg-6">
                                            <div className="alt-features-item">
                                                <div className="alt-features-icon">
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
                                        <div className="col-lg-6">
                                            <div className="alt-features-item">
                                                <div className="alt-features-icon">
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
                                
                                {/* <!-- Images -->  */}
                                <div className="col-lg-6">                                                               
                                    <div className="call-action-3-images mt-xs-0 text-end">
                                        
                                        <div className="call-action-3-image-1">
                                            <img src="images/why_us_1.png" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="205" />
                                        </div>
                                        
                                        <div className="call-action-3-image-2-wrap d-flex align-items-center">
                                            <div className="call-action-3-image-2">
                                                <img src="images/why_us_2.jpg" alt="" className="wow scaleOutIn" data-wow-duration="1.2s" />
                                            </div>
                                        </div>
                                        
                                    </div>                                                                              
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    
                    
                    {/* <!-- Call Action Section --> */}
                    <CallToAction />
                    
                </main>

                {/* <Footer /> */}

            {/* </div> */}

            {/* <!-- JS --> */}
            {/* <script src="js/jquery-3.5.1.min.js" defer="True"></script>
            <script src="js/jquery.easing.1.3.js" defer="True"></script>
            <script src="js/bootstrap.bundle.min.js" defer="True"></script>
            <script src="js/SmoothScroll.js" defer="True"></script>
            <script src="js/jquery.scrollTo.min.js" defer="True"></script>
            <script src="js/jquery.localScroll.min.js" defer="True"></script>
            <script src="js/jquery.viewport.mini.js" defer="True"></script>
            <script src="js/jquery.countTo.js" defer="True"></script>
            <script src="js/jquery.appear.js" defer="True"></script>
            <script src="js/jquery.parallax-1.1.3.js" defer="True"></script>
            <script src="js/jquery.fitvids.js" defer="True"></script>
            <script src="js/owl.carousel.min.js" defer="True"></script>
            <script src="js/isotope.pkgd.min.js" defer="True"></script>
            <script src="js/imagesloaded.pkgd.min.js" defer="True"></script>
            <script src="js/jquery.magnific-popup.min.js" defer="True"></script>
            <script src="js/masonry.pkgd.min.js" defer="True"></script>
            <script src="js/jquery.lazyload.min.js" defer="True"></script>
            <script src="js/wow.min.js" defer="True"></script>
            <script src="js/morphext.js" defer="True"></script>
            <script src="js/typed.min.js" defer="True"></script>
            <script src="js/all.js" defer="True"></script>
            <script src="js/contact-form.js" defer="True"></script>
            <script src="js/jquery.ajaxchimp.min.js" defer="True"></script>
            <script src="js/objectFitPolyfill.min.js" defer="True"></script>
            <script src="js/splitting.min.js" defer="True"></script> */}

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
