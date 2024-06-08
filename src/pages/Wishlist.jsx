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
    <section class="py-5">
    <h3 className="display-5 mb-2 text-center">Wishlist</h3>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        wishlist.length>0 ?
                        wishlist?.map(item=>(
                            <div class="col mb-5">
                        <div class="card h-100">
                            
                        <img class="card-img-top" src={item.thumbnail} height={'200px'} width={'180px'} alt="..." />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">{item.title}</h5>
                                  
                                   ₹{item.price}
                                </div>
                            </div>
                          
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between" style={{flexWrap:'wrap'}}>
                                <div class="text-center mt-2" onClick={()=>dispatch(removeFromWishlist(item.id))}><Link className='btn btn-outline-dark mt-auto'>Remove</Link></div>
                                <div class="text-center mt-2" onClick={()=>addCart(item)} ><Link className='btn btn-outline-dark mt-auto'>Add to cart</Link></div>
                            </div>
                        </div>
                    </div>
                        )):(
                            <p className='text-center'>No item in yor wishlist</p>
                        )
                    }
                    
                    
                </div>
            </div>
        </section>
        </>
  )
}

export default Wishlist