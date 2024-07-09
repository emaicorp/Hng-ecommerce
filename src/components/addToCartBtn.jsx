export default function AddToCartBtn({productId, text}){
    return(
        <div className="card-button w-100">
        <button type="button" className='btn w-100 ' value={productId}>{text}</button>
      </div>
    )
}