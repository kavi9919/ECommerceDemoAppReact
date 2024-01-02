import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [products,setProducts]=useState([]);
    useEffect(() => {
        axios.get("https://localhost:7110/api/Shop/GetProduct").then((response) => {
          setProducts((data) => {
            return response.data;
          });
        });
      }, []);
  return (
    <>
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