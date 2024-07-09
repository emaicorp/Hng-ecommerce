import * as Icon from 'iconsax-react';


export default function Newsletter(){
    return(
        <div className="newsletter bg-black d-flex justify-content-center align-items-center">
            <div className="col-md-6 border d-flex justify-content-center align-items-center flex-column">
                <h3>Subscribe to our newsletter</h3>
                <form>
                    <input type="text" placeholder="Enter your email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
 
};