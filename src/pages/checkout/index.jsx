import Header from "../../components/header";
import { Link } from 'react-router-dom';
import * as Icon from 'iconsax-react';
import Footer from '../../components/footer';
import CheckFee from '../../components/checkFee';
import CheckOutDetails from "../../components/checkoutInfo";


export default function CheckoutPage(){
    return(
        <div className="bg-shadow">
            <Header header={"Checkout"}/>
            <div className="container">
                <div className="row gap-3">
                    <div className="col-md-7 bg-white">
                        <CheckOutDetails />
                    </div>
                    <div className="col-md-4 bg-white checkFee">
                        <CheckFee Link={"/checkout"}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}