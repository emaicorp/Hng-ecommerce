import * as Icon from 'iconsax-react';
import { Link } from 'react-router-dom';
import React, { useState , useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export default function Header({header}){
    const { cart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    function drop() {
      setIsOpen(!isOpen);
    }
    return(
        <div className="header-container pt-2">
            <div className="container pt-2">
                <nav className="d-flex justify-content-between header-nav align-items-center  ">
                    <div className="logo h-100">
                        <img src="/images/logo-white.svg" alt="" className="h-100 w-100" />
                    </div>
                    <div className="list d-none d-md-block">
                       <div className="input-group">
                        <input type="text" placeholder='Search'/>
                        <div className="search-icon d-flex align-items-center justify-content-center"><Icon.SearchNormal/></div>
                       </div>
                    </div>
                    <div className="user d-flex   align-items-center gap-1 b justify-content-end ">
                        <span className="icon-1 d-md-flex  d-none  align-items-center"><img src="/images/question.svg" alt=""  /> Help <Icon.ArrowDown2/></span>
                        <span className="icon-1  d-md-flex  d-none align-items-center"><Icon.Profile /> Acoount <Icon.ArrowDown2/></span>
                        <span className="icon-2  d-flex  align-items-center">  <Link to="/cart" style={{color:'white'}}><Icon.ShoppingCart /> <span className="bg-danger text-white">({cart.length})</span></Link></span>
                        <span className="icon-2 d-flex d-flex d-md-none align-items-center" onClick={drop}> <Icon.HambergerMenu /></span>

                    </div>
                </nav>
                <div className={`navDrop-items ${isOpen ? 'open' : ''}  `}>
                        <span className="icon-1 mx-1 d-flex   gap-3 align-items-center"><img src="/images/question.svg" alt=""  /> Help </span>
                        <span className="icon-1  d-flex  gap-3  align-items-center"><Icon.Profile /> Acoount </span>

                    </div>
                    <div className="list list-sm mt-5  d-md-none">
                       <div className="input-group">
                        <input type="text" placeholder='Search'/>
                        <div className="search-icon d-flex align-items-center justify-content-center"><Icon.SearchNormal/></div>
                       </div>
                    </div>
            </div>
            <div className="header-text d-flex mt-2 mt-md-0 container   position-relative">
                <h1 className="text-center mt-auto">{header}</h1>
            </div>
        </div>
    )
}