import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import DeleteConfirmation from '../Components/Delete';
import Modal from 'react-bootstrap/Modal';
const Product = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const navigate=useNavigate();
    const [products,setProducts]=useState([]);
    const[itemToDelete,setItemToDelete]=useState(0);
    useEffect(() => {
        axios.get("https://localhost:7110/api/Shop/GetProduct")
        .then((response) => {
          setProducts((data) => {
            return response.data;
          });
        });
      }, []);
     function showConfirmPopupHandler(id){
         setShow(true);
         setItemToDelete(id);
     }
     function deleteConfirmHandler(){
         axios.delete(`https://localhost:7110/api/Shop/DeleteProduct/${itemToDelete}`)
         .then((response)=>{         
             setProducts((existingdata)=>{
              return existingdata.filter(_ => _.id !== itemToDelete)
             })
             setItemToDelete(0);
             setShow(false);
         })
     }


  return (
    <>
       {/* delete confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteConfirmHandler}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    <div className=' container-md'>
    <Row md={3} className="g-4 mt-1">
        {products.map((p) => {
          return (
            <Col key={p.id}>
              <Card>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    <b>Price:</b> {p.actualPrice}
                  </Card.Text>
                  <Card.Text>
                    <b>Powers: </b>
                    {p.discountedPrice}
                  </Card.Text>
                  <Button variant="secondary"
                   onClick={ ()=>{
                    navigate(`/update/${p.id}`)
                   }
                  }>
                        Edit
                   </Button>
                   <Button variant="danger" onClick={()=>{showConfirmPopupHandler(p.id);}}>
                   Delete
                   </Button>
                  
                   <Button variant="primary"
                   onClick={ ()=>{
                    navigate(`/product/${p.id}`)
                   }
                  }>
                        More
                   </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      </div>
    </>
  )
}

export default Product