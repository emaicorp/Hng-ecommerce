import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import Products from "../../components/products";
import SidebarComponent from '../../components/sidebar';

export default function ProductsPage(){
    return(
        <div>
            <Header header={"Product Listing"}/>
            <div className="container p-0 mt-5 mb-5">
                <div className="row gap-1 m-0 p-0">
                    <div className="col-md-2 sidebar"><SidebarComponent/></div>
                    <div className="col-md-10  products"><Products /></div>
                </div>
            </div>
            
        </div>
    )
}
// ReactDOM.render(<ProductsPage />, document.getElementById('root'));