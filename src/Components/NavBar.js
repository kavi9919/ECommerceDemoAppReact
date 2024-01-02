import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import AddModel from './AddModel';
const NavBar = () => {
const navigate=useNavigate();
  return (
    <div>
          <Navbar className="bg-body-tertiary justify-content-between container-md my-2">
      <Form inline>    
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
              <AddModel/>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default NavBar