import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const productName= useRef("");
  const actualPrice= useRef("");
  const discountedPrice= useRef("");
  const productImage= useRef("");
  
  const navigate=useNavigate();

  function addProducts(){
    var product={
      name: productName.current.value,
      image: productImage.current.value,
      actualPrice: actualPrice.current.value,
      discountedPrice: discountedPrice.current.value,
    }
       axios.post("https://localhost:7110/api/Shop/PostProduct" ,product)
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

      
      <Button variant="primary" type="button" onClick={addProducts}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddProduct