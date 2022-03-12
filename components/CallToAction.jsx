import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <>
        
        <section className="small-section bg-dark light-content">
            <div className="container relative">
                <div className="row wow fadeInUpShort">
                    <div className="col-md-8 offset-md-2 text-center">
                        <h3 className="call-action-1-heading">Planning a new project or a renovation?</h3>
                        <div className="call-action-1-decription mb-60 mb-sm-30">
                        You and us- We are a community. We believe in connecting with our community, and we are the friendly experts in the industry. Take our experience and your choice for carving your dream projects!
                        </div>                                     
                    
                        <div className="local-scroll">
                            <Link href="/contact">
                                <a className="btn btn-mod btn-w btn-large btn-round">Let's Talk</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}