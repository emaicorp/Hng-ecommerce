

export default function Newsletter(){
    return(
        <div className="newsletter bg-black px-md-0 px-3 d-flex justify-content-center align-items-center">
            <div className="col-md-4  d-flex justify-content-center align-items-start flex-column">
                <h3>Subscribe to our newsletter</h3>
                <p className='mt-1'>Subscribe to our newsletter to get update  on our latest and exciting offers on all our products</p>
                <form className='d-flex'>
                    <div className="input-div d-flex mx-2 mt-1">
                        <img src="/images/sms.svg" alt="" srcset="" className='mx-1' />
                    <input type="text" placeholder="Email" />
                    </div>
                    <button type="submit" className='btn bg-accent'>Subscribe</button>
                </form>
            </div>
        </div>
    );
 
};