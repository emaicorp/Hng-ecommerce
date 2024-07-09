import Header from "../../components/header";
import { Link } from 'react-router-dom';
import * as Icon from 'iconsax-react';
import Footer from '../../components/footer';
import CheckFee from '../../components/checkFee';
import CheckOutDetails from "../../components/checkoutInfo";
import CardInformation from "../../components/cardInformation";

export default function CheckoutPage(){
    return(
        <div className="bg-shadow">
            <Header header={"Checkout"}/>
            <div className="container mt-5">
                <div className="row gap-3 mb-5">
                    <div className="col-md-7 bg-white">
                        <CheckOutDetails />
                    </div>
                    <div className="col-md-4 bg-white checkFee">
                        <CheckFee link={"/success"}/>
                    </div>
                </div>
                <CardInformation/>
            </div>
            <Footer/>
        </div>
    )
}