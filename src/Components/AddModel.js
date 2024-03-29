import React, { useRef,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const AddModel = () => {
    const productName= useRef("");
    const actualPrice= useRef("");
    const discountedPrice= useRef("");
    const productImage= useRef("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    function addProducts(){
        var product={
          name: productName.current.value,
          image: uploadedFileName,
          actualPrice: actualPrice.current.value,
          discountedPrice: discountedPrice.current.value,
        }
           axios.post("https://localhost:7110/api/Shop/PostProduct" ,product)
           .then((respose) => {
              handleClose();
           })
      }
      const handleUpload = async () => {
        try {
          const formData = new FormData();
          formData.append('imageFile', selectedFile);
    
          const response = await axios.post('https://localhost:7110/api/File/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
    
          });
           // Set the uploaded filename received from the server response
          setUploadedFileName(response.data);
          alert("Upload Successfully..!");
         
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Form.Control type="file"
         placeholder="Discounted Price"
         onChange={handleFileChange} />
         <Button variant="secondary" onClick={handleUpload}>
            Upload
          </Button>
      </Form.Group>

      
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="button" onClick={addProducts}>
           Submit
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddModel