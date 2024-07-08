export default function AddToCartBtn(productId){
    return(
        <div className="card-button w-100">
        <button type="button" className='btn w-100 ' value={productId}>Add To Cart</button>
      </div>
    )
}