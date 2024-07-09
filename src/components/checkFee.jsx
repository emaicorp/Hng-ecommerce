

export default function CheckFee(){
    return(
        <div>
            <div className="cart-summary border-bot d-flex justify-content-between align-items-center">
                <h6>Cart Summary</h6>
                <h6>1 item </h6>
                
            </div>
            <div className="delivary mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Delivery charge</h6>
                <p className="w-50 smallest">Add your delivery address to see your delivery charge</p>
            
            </div>
            <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Sub Total</h6>
                <h6><s>N</s>50,000</h6>
            </div>
            <div className="text-danger text-end w-100  smallest">Excluding delivery charge </div>
            <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Total</h6>
                <h6><s>N</s>50,000</h6>
            </div>
            <div className="mt-3 ">
                <button className="btn bg-accent rounded text-white w-100">Checkout</button>
                </div>

                <div className="pay-cards d-flex justify-content-center gap-3 mt-3 align-items-center">
                    <p className="">We Accept</p>
                    <div className="pay-cards-opt d-flex  gap-3 align-items-center">
                        <img src="/images/logos_mastercard.svg" alt="" srcset="" />
                        <img src="/images/logos_visaelectron.svg" alt="" srcset="" />
                        <img src="/images/american express.svg" alt="" srcset="" />
                    </div>
                </div>
    
        </div>
       
    )
}