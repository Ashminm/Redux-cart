import React,{useEffect} from "react";
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import { addToCart } from '../redux/slice/cartSlice'
import { addToWish } from '../redux/slice/wishlistSlice'

function View() {
    const dispatch = useDispatch()
    const {id}=useParams()
    const product=JSON.parse(localStorage.getItem("products"))
    const data=product.find(item=>item.id==id)
    useEffect(()=>{
        console.log(id);
        console.log(data);
    })

    return (
        <>
             <section className="py-5">
            <Container className="px-4 px-lg-5 my-5">
                <Row className="gx-4 gx-lg-5 align-items-center">
                <Col md={1} className="d-none d-md-block">
                           
                           {
                               data.images.length>0 &&
                               data.images.map(item=>(
                                   <img className="border me-3 mb-4" style={{height:'100px',width:'100px'}} src={item} alt="" />
                               ))
                           }
                       </Col>
                    <Col md={6}><Image className="card-img-top mb-5 mb-md-0" src={data.thumbnail} alt="..." /></Col>
                    <Col md={5}>
                        <div className="small mb-1">ID: {data?.id}</div>
                        <p >{data.brand}</p>
                        <h1 className="display-5 fw-bolder">{data?.title}</h1>
                        <div className="fs-5 mb-3">
                            <span>₹{data?.price} ¦ <span>{data?.discountPercentage}% off</span> </span>
                        </div>
                        <p className="lead m-0">Caregory: {data?.category}</p>
                        <p className="lead">Rating: {data?.rating}</p>
                        <p className="lead">{data?.description}</p>
                        <p className="lead m-0">Returen: {data?.returnPolicy}</p>
                        <p className="lead">Shipping: {data?.shippingInformation}</p>
                        <div className="d-flex">

                            <Button variant="outline-dark" onClick={()=>dispatch(addToWish(data))}>
                                <i className="bi-cart-fill me-1"></i>
                                Add To Wishlist 
                            </Button>
                            <Button variant="outline-dark ms-3" onClick={()=>dispatch(addToCart(data))}>
                                <i className="bi-cart-fill me-1"></i>
                                Add To Cart
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>    
        </>
    );
}

export default View;
