import React, { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useFoods from '../../../hooks/useFoods';


const Allfoods = () => {
    const [foods] = useFoods();

    return (
        <div>

            {
                foods.map(food =>
                    <Col xs={6} md={4} className="shadow-lg p-3 g-2 mb-5 bg-white rounded">
                        <Card.Img variant="top" src={food.photo} />
                        <Card.Body>
                            <Card.Title>{food.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Col>
                )
            }

        </div>
    );
};

export default Allfoods;