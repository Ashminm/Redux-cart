import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decQuantity, emptyCart, incQuantity, removeFromCart } from '../redux/slice/cartSlice';


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer);

  return (
    <>
      <section className="pt-5 pb-5">
        <Container>
          <Row className="w-100">
            <Col lg={12} md={12} xs={12}>
              <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
              <p className="mb-5 text-center"><i className="text-info font-weight-bold">{cart?.length}</i> items in your cart</p>
              {
                cart?.length > 0 ?
                  <table id="shoppingCart" className="table table-condensed table-responsive">
                    <thead>
                      <tr >
                        <th style={{ width: '60%' }}>Product</th>
                        <th style={{ width: '12%' }}>Price</th>
                        <th style={{ width: '12%' }}>Quantity</th>
                        <th style={{ width: '14%' }}>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.map(item => (
                        <tr key={item.id}>
                          <td data-th="Product">
                            <div className="row">
                              <div className="col-md-2 text-left">
                              <img class="card-img-top" src={item.thumbnail} height={'60px'} width={'75px'} className='shadow' alt="..." />
                              </div>
                              <div className="col-md-7 text-left mt-sm-2">
                                <h4>{item?.title}</h4>
                                <p className="font-weight-light">{item.brand}</p>
                              </div>
                            </div>
                          </td>
                          <td data-th="Price">{item?.price}</td>
                          <td  data-th="Quantity">
                            <button className='btn' onClick={()=>dispatch(decQuantity(item.id))}>-</button>
                            <input type="number" className="w-50 text-center" value={item.quantity} disabled />
                            <button className='btn' onClick={()=>dispatch(incQuantity(item.id))}>+</button>
                          </td>
                          <td className="actions"  data-th="">
                            <div className="text-right ">
                              <Button variant="white" className="border-secondary bg-white btn-md mb-2" onClick={()=>dispatch(removeFromCart(item?.id))}>
                                <i className="fas fa-trash"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  :
                  <p className='text-center'>No items</p>
              }
              <div className="float-right text-right">
                <p>Total Products: <span>{cart?.length}</span></p>
                <h1>Subtotal:</h1>
                {
                cart?.length>0?
                <h3>
                    {
                        cart.map(item=>item.price*item.quantity).reduce((p1,p2)=>(p1+p2))
                    }
                </h3>
                :
                <span>0</span>

            }
                
              </div>
            </Col>
          </Row>
          <Row className="mt-4 d-flex align-items-center">
            <Col sm={6} className="order-md-2 text-right">
              <Link className='btn btn-primary' to={'/'}>CheckOut</Link>
            </Col>
            <Col sm={6} className="mb-3 mb-m-1 order-md-1 text-md-left">
              <Link to={'/'}>
                <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Cart;
