
import * as Icon from 'iconsax-react';


export default function CartItem() {
    return (
        <div className="cart-div">
            <div className='border-bot cart-item-div mb-3'>
                <div className="cart-item d-flex   justify-content-between ">
                    <div className="cart-item-img d-flex gap-3">
                        <img src="/images/vr_headset.svg" alt="" height={100} width={100} />
                        <div className="card-item-text">
                            <h6>Gaming virtual reality headset</h6>
                            <p>In Stock</p>
                        </div>
                    </div>
                    <div className="cart-item-details">

                        <h6><s>N</s>50,000</h6>
                        <p className="d-flex justify-content-between align-items-center">
                            <s>N65,000</s>
                            <p className="bg-main rounded smallest p-1 opacity-50">-20</p>
                        </p>
                        <div className="quantity d-flex gap-3">
                            <div className="plus btn bg-main text-white p-1">
                                <Icon.Add size="25" />

                            </div>
                            <span>1</span>
                            <div className="minus btn bg-main text-white p-1">
                                <Icon.Minus size="25" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cart-item-actions d-flex gap-3">
                    <button className="btn primary-border smallest">Remove</button>
                    <button className="btn primary-border smallest">Save For Later</button>
                </div>
            </div>
            <div className='border-bot cart-item-div mb-3'>
                <div className="cart-item d-flex   justify-content-between ">
                    <div className="cart-item-img d-flex gap-3">
                        <img src="/images/brownbag.svg" alt="" height={100} width={100} />
                        <div className="card-item-text">
                            <h6>Brown quality female bag</h6>
                            <p>In Stock</p>
                        </div>
                    </div>
                    <div className="cart-item-details">

                        <h6><s>N</s>40,000</h6>
                        <p className="d-flex justify-content-between align-items-center">
                            <s>N65,000</s>
                            <p className="bg-main rounded smallest p-1 opacity-50">-20</p>
                        </p>
                        <div className="quantity d-flex gap-3">
                            <div className="plus btn bg-main text-white p-1">
                                <Icon.Add size="25" />

                            </div>
                            <span>1</span>
                            <div className="minus btn bg-main text-white p-1">
                                <Icon.Minus size="25" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cart-item-actions d-flex gap-3">
                    <button className="btn primary-border smallest">Remove</button>
                    <button className="btn primary-border smallest">Save For Later</button>
                </div>
            </div>
        </div>
    )
}