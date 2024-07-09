import Header from "../../components/header";
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
export default function Success(){
    return(
        <div>
            <Header header={"Order Completed"}/>
            <div className="container mt-5 d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-4">
                    <div className="success-icon w-100">
                        <img src="/images/OBJECTS.svg" alt="" srcset="" width="100%" height="250px" />
                    </div>
                    <h4 className="text-center">Thank you for your purchase.</h4>
                    <p className="text-center"> Your order has been successfully Purchased</p>
                    <Link to="/"><button className="btn bg-accent w-100 text-white">Return to Home</button></Link>
                    
 
                </div>
            </div>
            <Footer/>

        </div>
    )
}