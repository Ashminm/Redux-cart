import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
    <div style={{ width: '100%', height: '100%', backgroundColor: 'rgb(55, 58, 60)',color:'#FFF' }}>
      <Row className='p-5'>
        <Col md='4'>
          <h4><i class="fa-brands fa-react me-3"></i>Redux-Cart</h4><hr />
          <p style={{ textAlign: 'justify' }} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum recusandae exercitationem hic voluptas debitis repudiandae quisquam laboriosam ullam possimus non ab, animi, voluptates nam accusantium, provident id? Temporibus saepe laboriosam quae ipsum, repudiandae velit animi quasi veniam ipsa cumque? Nemo.</p>
        </Col>
        <Col md='4' className='d-flex flex-column text-center'>
          <h4>Links</h4>
          <hr />
          <Link className=' mt-3' style={{ textDecoration: 'none' }} to={'/'}>Landing Page</Link>
          <Link className=' mt-2' style={{ textDecoration: 'none' }} to={'/home'}>Home</Link>
          <Link className=' mt-2' style={{ textDecoration: 'none' }} to={'/watch-history'}>Watch History</Link>

        </Col>
        <Col className='d-flex flex-column text-center'>
          <h4>Guides</h4>
          <hr />
          <Link className=' mt-3' style={{ textDecoration: 'none' }} to={'https://react.dev/'}>React</Link>
          <Link className=' mt-2' style={{ textDecoration: 'none' }} to={'https://react-bootstrap.netlify.app/'}>ReactBootstrap</Link>
          <Link className=' mt-2' style={{ textDecoration: 'none' }} to={'https://fontawesome.com/'}>Fontawesome</Link>

        </Col>
      </Row>
      <p className='text-center p-3'>Copyright © 2023 Redux-cart. All rights reserved.</p>

    </div>

  </div>
  )
}

export default Footer