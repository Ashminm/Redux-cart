import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { fetchProductThunk, onNavigateNext, onNavigatePrev} from '../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { addToWish } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function Home() {

    const dispatch = useDispatch()

    const {loading, product, error,productPerPage, currentpage }=useSelector((state)=>state.productReducer)

    const totalPges=Math.ceil(product?.length / productPerPage)

    const startIndex=currentpage * productPerPage - productPerPage
    const lastIndex=startIndex+productPerPage
    const validCards=product.slice(startIndex,lastIndex)

    const onNext=()=>{
        if(currentpage!=totalPges)
        dispatch(onNavigateNext())
    }
    const onPrev=()=>{
        if(currentpage>1)
        dispatch(onNavigatePrev())
    }
    useEffect(()=>{
        dispatch(fetchProductThunk())
    },[])
  return (
    <>
       <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Redux Cart</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    {
        loading && 
        <div className="p-5 text-center">
            <Spinner animation='border' role='state' >

            </Spinner><span>Loading....</span>
        </div>
    }
    {
        !loading &&
        product.length > 0 &&
   
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        validCards?.map(item =>(
                         <div class="col mb-5">
                        <div class="card h-100 shadow">
                        <Link to={`/view/${item.id}`}>
                            <img class="card-img-top" src={item.thumbnail} height={'200px'} width={'180px'} alt="..." />

                        </Link> 
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">{item.title}</h5>
                                  
                                    ₹ {item.price}
                                </div>
                            </div>
                          
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between" style={{flexWrap:'wrap'}}>
                                <div class="text-center mt-2" onClick={()=>dispatch(addToWish(item))}><Link className='btn btn-outline-dark mt-auto'>Wishlist</Link></div>
                                <div class="text-center mt-2" onClick={()=>dispatch(addToCart(item))} ><Link className='btn btn-outline-dark mt-auto'>Add to cart</Link></div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                   
                </div>
            </div>
        </section>
}
         <div className="text-center">
           <div >
           <button className='btn' onClick={onPrev}><i class="fa-solid fa-angle-left"></i></button>
           <span>{currentpage} / {totalPges}</span>
            <button className='btn' onClick={onNext}><i class="fa-solid fa-angle-right"></i></button>
           </div> 
           </div>


    </>
  )
}

export default Home