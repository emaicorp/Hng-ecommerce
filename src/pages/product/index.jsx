import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import Products from "../../components/products";

export default function ProductsPage(){
    return(
        <div>
            <Header header={"Product Listing"}/>
            <Products />
        </div>
    )
}
// ReactDOM.render(<ProductsPage />, document.getElementById('root'));