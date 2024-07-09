export default function AddToCartBtn({productId, text,click}){
    return(
        <div className="card-button w-100">
        <button type="button" className='btn w-100 ' onClick={click}value={productId}>{text}</button>
      </div>
    )
}