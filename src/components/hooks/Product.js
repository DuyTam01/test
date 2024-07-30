import React from 'react'
import "./product.css"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'

export default function Product(props) {

    const {pro} = props
    return (
        <Col lg="3" sm={6} xs={12} >
            <Card className='card'>
                <img
                    alt="Sample"
                    src={pro.src_img}
                />
                <CardBody>
                    <CardSubtitle>
                    <i class="fa-solid fa-map-pin"></i>
                    <span>{pro.location}</span>
                    </CardSubtitle>
                    <CardTitle tag="h5">
                        {pro.name}
                    </CardTitle>
                    <CardText>
                        Price : {pro.price}
                    </CardText>
                </CardBody>
            </Card>
        </Col>

    )

}
