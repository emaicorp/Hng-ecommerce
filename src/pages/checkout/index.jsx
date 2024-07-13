import Header from "../../components/header";
import { Link , useNavigate} from 'react-router-dom';
import * as Icon from 'iconsax-react';
import Footer from '../../components/footer';
import CheckFee from '../../components/checkFee';
import CheckOutDetails from "../../components/checkoutInfo";
import CardInformation from "../../components/cardInformation";
import { useLocation } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { toast } from 'react-toastify';


export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const location = useLocation();
  const checkoutPath = '/checkout'; // Replace with your actual checkout path
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    additionalNumber: '',
    address: '',
    address2: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.phoneNum) errors.phoneNum = 'Phone number is required';
    if (!formData.additionalNumber) errors.additionalNumber = 'Additional number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = () => {
    if (validateForm() && location.pathname === checkoutPath) {
      if(cart.length> 0 ){

      
      clearCart();
      navigate("/success")
    }else{
      toast.error("No Item In Cart ")
    }
    }
  };

  return (
    <div className="bg-shadow">
      <Header header={"Checkout"} />
      <div className="container mt-5">
      <div className="card-button mb-5">
                <button className='btn '><Icon.ArrowLeft/> <Link to="/cart" className='text-black text-decoration-none'>Back To Cart</Link></button>
            </div>
        <div className="row gap-3 mb-5">
          <div className="col-md-7 bg-white">
            <CheckOutDetails onFormChange={handleFormChange} formErrors={formErrors} />
          </div>
          <div className="col-md-4 bg-white checkFee">
            <CheckFee link={"/success"}  onCheckout={handleCheckout} />
          </div>
        </div>
        <CardInformation />
      </div>
      <Footer />
    </div>
  );
}
