
export default function Footer(){
    return(
        <div className="footer border">
            <div className="container foot-nav mb-5 mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/images/logo-black.svg" alt="" srcset="" />
                    </div>
                    <div className="col-md-6 d-flex mt-md-0 mt-3 mb-md-0 mb-3 justify-content-between align-items-center">
                        <div className="ul">
                            <h6>About</h6>
                            <ul>
                                <li><a href="#">Our Products</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Our Blog</a></li>
                            </ul>
                        </div>
                        <div className="ul text-start">
                            <h6>Information</h6>
                            <ul>
                            <li><a href="#">Delivery information</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Return</a></li>
                                <li><a href="#">Terms & condition</a></li>
                            </ul>
                        </div>
                        <div className="ul">
                            <h6>Support</h6>
                            <ul>
                            <li><a href="#">Contact Us </a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">CheckOut</a></li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    <div className="col-md-3 connect flex-column d-flex  align-items-center">
                        <h6 className="text-start">Connect With Us</h6>
                        <div className="social-media d-flex gap-3">
                            <a href="#"><img src="/images/instagram.svg" alt="" srcset="" /></a>
                            <a href="#"><img src="/images/facebook.svg" alt="" srcset="" /></a>
                            <a href="#"><img src="/images/twitter.svg" alt="" srcset="" /></a>
                            <a href="#"><img src="/images/tiktok.svg" alt="" srcset="" /></a>
                        </div>
                      
        

                    </div>
                </div>
                
            </div>
            <div className="bg-main footCopy d-flex justify-content-center align-items-center mt-4">
                <div className="container d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <div className="privacy">
                        <a href="#" className="mx-3">Privacy Policy</a>
                        <a href="#">Terms Of Use</a>
                    </div>
                    <div className="copyright">
                        &copy; 2024 . Powered by TrustBuy. All Right Reserved.
                        </div>
    
                </div>
            </div>
        </div>
    )
}