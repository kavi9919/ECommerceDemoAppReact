import React, { useEffect, useRef,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';
const Update = () => {
    const productName= useRef("");
    const actualPrice= useRef("");
    const discountedPrice= useRef("");
    const productImage= useRef("");
     
    
    const navigate=useNavigate();
    const {id} =useParams();
    useEffect(()=>{
        axios.get(`https://localhost:7110/api/Shop/GetProduct/${id}`)
        .then(response => {
          // Handle the successful response here
          productName.current.value=response.data.name;
          actualPrice.current.value=response.data.actualPrice;
          discountedPrice.current.value=response.data.discountedPrice;
          productImage.current.value=response.data.image;

        })
    },[] );


    function updateProduct(){
        var product={
            name: productName.current.value,
            image: productImage.current.value,
            actualPrice: actualPrice.current.value,
            discountedPrice: discountedPrice.current.value,
            id:id
          }
          axios.patch(`https://localhost:7110/api/Shop/UpdateProduct/${id}`, product)
        .then((respose) => {
            navigate("/");
        })
      }
    
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        ref={productName} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formActualPrice">
        <Form.Label>Actual Price</Form.Label>
        <Form.Control type="text" placeholder="Actual Price"
        ref={actualPrice} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDiscountedPrice">
        <Form.Label>Discounted Price</Form.Label>
        <Form.Control type="text" placeholder="Discounted Price" ref={discountedPrice} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="text" placeholder="Discounted Price" ref={productImage} />
      </Form.Group>

      
      <Button variant="primary" type="button" onClick={updateProduct}>
        Update
      </Button>
    </Form>
    </div>
  )
}

export default Update;