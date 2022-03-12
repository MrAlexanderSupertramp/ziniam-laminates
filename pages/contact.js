import { useEffect, useState } from 'react'
import Head from 'next/head'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axiosInstance from '../components/axios';


export default function Contact() {
    useScript('js/jquery-3.5.1.min.js');
    useScript('js/jquery.easing.1.3.js');
    useScript('js/bootstrap.bundle.min.js');
    useScript('js/SmoothScroll.js');
    useScript('js/jquery.scrollTo.min.js');
    useScript('js/jquery.localScroll.min.js');
    useScript('js/jquery.viewport.mini.js');
    useScript('js/jquery.countTo.js');
    useScript('js/jquery.appear.js');
    useScript('js/jquery.parallax-1.1.3.js');
    useScript('js/jquery.fitvids.js');
    useScript('js/owl.carousel.min.js');
    useScript('js/isotope.pkgd.min.js');
    useScript('js/imagesloaded.pkgd.min.js');
    useScript('js/jquery.magnific-popup.min.js');
    useScript('js/masonry.pkgd.min.js');
    useScript('js/jquery.lazyload.min.js');
    useScript('js/wow.min.js');
    useScript('js/morphext.js');
    useScript('js/typed.min.js');
    useScript('js/all.js');
    // useScript('js/contact-form.js');
    useScript('js/jquery.ajaxchimp.min.js');
    useScript('js/objectFitPolyfill.min.js');
    useScript('js/splitting.min.js');


    const initialFormData = Object.freeze({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [ FormData, updateFormData ] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...FormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        axiosInstance
            .post(`contact/create/`, {
                name: FormData.name,
                email: FormData.email,
                phone: FormData.phone,
                subject: FormData.subject,
                message: FormData.message,
            })
            .then((res) => {
                toast.success("Enquiry has been generated!");
                toast.success("Ziniam-Team has been notified!");
            })
            .catch(error => {
                // console.log(error);
                toast.error("Something went wrong!");
                toast.info("Please try again!");

                return error;
            });

        updateFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })

        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }

    return (
        <>
        
            <Head>

                <title>Ziniam | Contact</title>

            </Head>

            <main id="main">    
                
                {/* <!-- Home Section --> */}
                <section className="page-section" id="home">
                    <div className="container relative text-center">
                        
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="hs-line-4 mb-30 mb-xs-20 wow fadeInUpShort" data-wow-delay=".1s"><span className="d-inline-block bg-gray round px-3 pb-1">Contact</span></h1>
                                <h2 className="hs-line-7 mb-0 wow fadeInUpShort" data-wow-delay=".2s">We are easily reachable.</h2>
                            </div>
                        </div>
                    
                    </div>
                </section>
                
                
                {/* <!-- Section --> */}
                <section className="page-section pt-0 pb-0">
                    <div className="container relative">
                        
                        {/* <!-- Google Map --> */}
                        <div className="google-map wow fadeInUpShort">                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.473794473539!2d72.8372652!3d19.2336689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66f7404539e2271c!2sZiniam%20Laminates!5e0!3m2!1sen!2sin!4v1646635827291!5m2!1sen!2sin" width="600" height="450" style={{ border:"0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>

                    </div>
                </section>
                
                
                {/* <!-- Contact Section --> */}
                <section className="page-section">
                    <div className="container relative">
                        
                        <div className="row mb-60 mb-xs-40">
                            
                            <div className="col-md-10 offset-md-1">
                                <div className="row">
                                    
                                    {/* <!-- Address --> */}
                                    <div className="col-sm-6 col-lg-4 pb-20">
                                        <div className="contact-item wow fadeScaleIn" data-wow-delay=".1s" data-wow-duration="1s">
                                            <div className="ci-icon">
                                                <i className="fa fa-map-marker-alt"></i>
                                            </div>
                                            <div className="ci-title">
                                                Address
                                            </div>
                                            <div className="ci-text">
                                                Gala No. 4, Gate No.1, Vichare Compound, Opp. Aura Hotel, Borivali West, Mumbai - 400092
                                            </div>
                                            <div className="ci-link">
                                                <a href="https://goo.gl/maps/yCosKC9cMDVEkJSo6" target="_blank">See on the Map</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Email --> */}
                                    <div className="col-sm-6 col-lg-4 pb-20">
                                        <div className="contact-item wow fadeScaleIn" data-wow-delay=".2s" data-wow-duration="1s">
                                            <div className="ci-icon">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="ci-title">
                                                Email
                                            </div>
                                            <div className="ci-text">
                                                ziniamlaminates@gmail.com
                                            </div>
                                            <div className="ci-link">
                                                <a href="mailto:ziniamlaminates@gmail.com">Say Hello</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Phone --> */}
                                    <div className="col-sm-6 col-lg-4 pb-20">
                                        <div className="contact-item wow fadeScaleIn" data-wow-delay="0" data-wow-duration="1s">
                                            <div className="ci-icon">
                                                <i className="fa fa-phone-alt"></i>
                                            </div>
                                            <div className="ci-title">
                                                Call Us
                                            </div>
                                            <div className="ci-text">
                                                +91 989 283 1222
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                        {/* <!-- Contact Form --> */}
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                
                                <form className="form contact-form wow fadeInUpShort" method="post" onSubmit={ handleSubmit }>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <!-- Name --> */}
                                            <div className="form-group">
                                                <label for="name">Name</label>
                                                <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name" pattern=".{3,100}" required aria-required="true" value={ FormData.name } onChange={ handleChange } required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <!-- Email --> */}
                                            <div className="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email" pattern=".{5,100}" required aria-required="true" value={ FormData.email } onChange={ handleChange } required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <!-- Phone --> */}
                                            <div className="form-group">
                                                <label for="phone">Phone</label>
                                                <input type="text" name="phone" id="phone" className="input-lg round form-control" placeholder="Enter your number" pattern=".{1,100}" required aria-required="true" value={ FormData.phone } onChange={ handleChange } required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <!-- Subject --> */}
                                            <div className="form-group">
                                                <label for="subject">Subject</label>
                                                <input type="text" name="subject" id="subject" className="input-lg round form-control" placeholder="Enter subject" pattern=".{2,100}" required aria-required="true" value={ FormData.subject } onChange={ handleChange } required />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Message --> */}
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" className="input-lg round form-control" style={{ height: "130px" }} placeholder="Enter your message" value={ FormData.message } onChange={ handleChange } required></textarea>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {/* <!-- Inform Tip --> */}
                                            <div className="form-tip pt-20 pt-sm-0 mb-sm-20">
                                                All the fields are required
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            {/* <!-- Send Button --> */}
                                            <div className="text-end pt-10">
                                                <button type="submit" className="submit_btn btn btn-mod btn-large btn-round" id="submit_btn" aria-controls="result">
                                                    Submit Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                                   
                                </form>
                                
                            </div>
                        </div>
                        
                    </div>
                </section>
                
            </main>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

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

