import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import Products from "../../components/products";
import SidebarComponent from '../../components/sidebar';
import Newsletter from "../../components/newsLetter";
import Footer from '../../components/footer';
import FilterCategory from '../../components/filterCategory';

export default function ProductsPage(){
    return(
        <div className=''>
            <Header header={"Product Listing"}/>
            <FilterCategory/>
            <div className="container p-0  mt-5 mb-5 px-0 products-container">
                <div className="d-flex m-0 p-0 products-div">
                    <div className=" sidebar sticky-top d-md-block d-none"><SidebarComponent/></div>
                    <div className="  products"><Products /></div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
            
        </div>
    )
}
// ReactDOM.render(<ProductsPage />, document.getElementById('root'));