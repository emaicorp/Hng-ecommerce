import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import { Link } from 'react-router-dom';
import * as Icon from 'iconsax-react';
import CheckFee from '../../components/checkFee';




export default function CartPage(){
    return(
        <div className='bg-shadow'>
            <Header header={"Shopping Cart"}/>
            <div className="container mt-5">
            <div className="card-button ">
                <button className='btn '><Icon.ArrowLeft/> <Link to="/" className='text-black text-decoration-none'>continue Shoping</Link></button>
            </div>

            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-4 bg-white p-3"><CheckFee/></div>
                </div>
            </div>
        </div>
    );
 
}