import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { searchProduct } from '../redux/slice/productSlice';


function Header() {
  const dispatch=useDispatch()
  const wish=useSelector(state=>state.wishListReducer)
  const cart=useSelector(state=>state.cartReducer)
  return (
    <>
    <Navbar className="bg-body-tertiary d-flex justify-content-between py-3">
        <Container>
          <Navbar.Brand href="#home" >
          <i class="fa-brands fa-react d-md-none"></i>{' '}
          <Link to={'/'} className='text-decoration-none text-dark d-none d-md-block'>
          <i class="fa-brands fa-react"></i>{' '}
            Redux-Cart
           
          </Link>
          </Navbar.Brand>
        <div className="d-flex align-items-center">
            <span className='me-3'>
                <input type="text" className='form-control pe-5' placeholder='Enter keywords to search' onChange={(e)=>dispatch(searchProduct(e.target.value))} />
            </span>
            <Link to={'wish'}><button className='btn me-3 border position-relative'>Wishlist<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wish?.length}
           </span></button></Link>
            <Link to={'cart'}><button className='btn me-3 border position-relative'>Cart<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart?.length}
           </span></button></Link>
        </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header