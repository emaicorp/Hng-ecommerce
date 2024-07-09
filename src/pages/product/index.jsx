import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import Products from "../../components/products";
import SidebarComponent from '../../components/sidebar';
import Newsletter from "../../components/newsLetter";

export default function ProductsPage(){
    return(
        <div className=''>
            <Header header={"Product Listing"}/>
            <div className="container p-0  mt-5 mb-5 px-0 products-container">
                <div className="d-flex m-0 p-0">
                    <div className=" sidebar sticky-top "><SidebarComponent/></div>
                    <div className="  products"><Products /></div>
                </div>
            </div>
            <Newsletter/>
            
        </div>
    )
}
// ReactDOM.render(<ProductsPage />, document.getElementById('root'));