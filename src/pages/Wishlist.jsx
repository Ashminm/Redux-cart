import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {
    const dispatch = useDispatch()
        const wishlist= useSelector((state)=>state.wishListReducer)
        console.log(wishlist);

        const addCart=(product)=>{
            dispatch(addToCart(product))
            dispatch(removeFromWishlist(product.id))
        }


  return (
    <>
    <section className="py-5">
    <h3 className="display-5 mb-2 text-center fw-bolder">Wishlist</h3>
    <p className="mb-5 text-center">
        <i className="text-info font-weight-bold">{wishlist?.length}</i> items in your wishlist
    </p>
    <div className="container">
        <div className="row">
            {wishlist.length > 0 ? (
                wishlist.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                        <div className="card h-100">
                            <img
                                className="card-img-top"
                                src={item.thumbnail}
                                height={'200px'}
                                width={'180px'}
                                alt={item.title}
                            />
                            <div className="card-body p-4 text-center">
                                <h5 className="fw-bolder">{item.title}</h5>
                                <p>₹{item.price}</p>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between" style={{ flexWrap: 'wrap' }}>
                                <div className="text-center mt-2" onClick={() => dispatch(removeFromWishlist(item.id))}>
                                    <button className='btn btn-outline-dark mt-auto'>Remove</button>
                                </div>
                                <div className="text-center mt-2" onClick={() => addCart(item)}>
                                    <button className='btn btn-outline-dark mt-auto'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center'>No item in your wishlist</p>
            )}
        </div>
    </div>
</section>


        </>
  )
}

export default Wishlist