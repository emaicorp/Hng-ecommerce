import * as Icon from 'iconsax-react';
import DropDown from './dropDown';
import ProgressBar from './priceRange';


function Category(){
    return(
        <div>
            <a href="#">Computer and accessories</a>
            <a href="#">Phones and Tablet</a>
            <a href="#">Electronic</a>
            <a href="#">Home and kitchen</a>
            <a href="#">Fashion Wears</a>
            <a href="#">Other category</a>
        </div>
    )
}
function Availability(){
    return(
        <div>
            <div className=" d-flex align-items-center gap-1 px-1">
                <input type="radio" name="radio1" id="radio12" checked/>
                <label htmlFor="radio12">In Stock</label>
            </div>
            <div className=" d-flex align-items-center gap-1 px-1">
                <input type="radio" name="radio1" id="radio11"  />
                <label htmlFor="radio11">Out Of Stock</label>
            </div>
        </div>
    )
}
export default function SidebarComponent(){
    return(
        <div className="px-2">
            <div className="category row gy-3">
                <DropDown btnName={"category"} dropItems={<Category/>}/>
                <DropDown btnName={"Price"} dropItems={<ProgressBar/>}/>
                <DropDown btnName={"Availability"} dropItems={<Availability/>}/>
            </div>
        </div>
    )
}