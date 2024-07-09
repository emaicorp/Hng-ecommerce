import * as Icon from 'iconsax-react';

export default function Header({header}){
    return(
        <div className="header-container pt-2">
            <div className="container pt-2">
                <nav className="d-flex justify-content-between header-nav align-items-center ">
                    <div className="logo h-100">
                        <img src="/images/logo-white.svg" alt="" className="h-100 w-100" />
                    </div>
                    <div className="list d-none d-md-block">
                       <div className="input-group">
                        <input type="text" placeholder='Search'/>
                        <div className="search-icon d-flex align-items-center justify-content-center"><Icon.SearchNormal/></div>
                       </div>
                    </div>
                    <div className="user d-flex d-md-flex  align-items-center d-none ">
                        <span className="icon-1 d-flex d-flex  align-items-center"><img src="/images/question.svg" alt=""  /> Help <Icon.ArrowDown2/></span>
                        <span className="icon-1 d-flex d-flex  align-items-center"><Icon.Profile /> Acoount <Icon.ArrowDown2/></span>
                        <span className="icon-2 d-flex d-flex  align-items-center"><Icon.ShoppingCart /></span>

                    </div>
                </nav>
            </div>
            <div className="header-text d-flex container  position-relative">
                <h1 className="text-center mt-auto">{header}</h1>
            </div>
        </div>
    )
}