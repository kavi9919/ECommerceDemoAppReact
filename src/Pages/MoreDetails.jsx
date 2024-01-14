import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const MoreDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:7110/api/Shop/GetProduct/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container-sm'>
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <b>Price:</b> {product.actualPrice}
                    </Card.Text>
                    <Card.Text>
                        <b>Discounted Price:</b> {product.discountedPrice}
                    </Card.Text>
                    {/* Add more details as needed */}
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MoreDetails;
