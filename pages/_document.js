import Document, { Html, Head, Main, NextScript } from 'next/document'
import { withRouter } from "next/router"



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    let current_path = this.props.__NEXT_DATA__.page.split('/')[1]

    if(current_path === "visualizer"){
        return (
          
        <Html lang="en">
          <Head>
              <link rel="shortcut icon" href="/images/favicon.png" />
          </Head>

          <body>

              <Main />
              <NextScript />

          </body>
        </Html>
        )
    }else{
      return (
        <Html lang="en">

            <Head>

                {/* <meta name="description" content="Multi Page Creative Template" />  
                <meta charset="utf-8" />
                <meta name="author" content="https://themeforest.net/user/bestlooker/portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                
                {/* <!-- Favicons --> */}
                <link rel="shortcut icon" href="/images/favicon.png" />

                {/* <!-- CSS --> */}
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/style-responsive.css" />
                <link rel="stylesheet" href="/css/vertical-rhythm.min.css" />
                <link rel="stylesheet" href="/css/magnific-popup.css" />
                <link rel="stylesheet" href="/css/owl.carousel.css" />
                <link rel="stylesheet" href="/css/animate.min.css" />
                <link rel="stylesheet" href="/css/splitting.css" />

            </Head>

            <body className="appear-animate">

                <Main />
                <NextScript />

                {/* <!-- JS --> */}
                {/* <script src="js/jquery-3.5.1.min.js"></script>
                <script src="js/jquery.easing.1.3.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/SmoothScroll.js"></script>
                <script src="js/jquery.scrollTo.min.js"></script>
                <script src="js/jquery.localScroll.min.js"></script>
                <script src="js/jquery.viewport.mini.js"></script>
                <script src="js/jquery.countTo.js"></script>
                <script src="js/jquery.appear.js"></script>
                <script src="js/jquery.parallax-1.1.3.js"></script>
                <script src="js/jquery.fitvids.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/isotope.pkgd.min.js"></script>
                <script src="js/imagesloaded.pkgd.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/masonry.pkgd.min.js"></script>
                <script src="js/jquery.lazyload.min.js"></script>
                <script src="js/wow.min.js"></script>
                <script src="js/morphext.js"></script>
                <script src="js/typed.min.js"></script>
                <script src="js/all.js"></script>
                <script src="js/contact-form.js"></script>
                <script src="js/jquery.ajaxchimp.min.js"></script>
                <script src="js/objectFitPolyfill.min.js"></script>
                <script src="js/splitting.min.js"></script> */}


            </body>
        </Html>
      )
    }
  }
}

export default withRouter(MyDocument)