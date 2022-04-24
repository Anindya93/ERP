import React from 'react'
import { useParams } from 'react-router-dom'
import productObj from '../../Product.json';
// import { Card } from 'react-bootstrap';

export default function Products() {
    let data = useParams();
    console.log("Received Value: ", data);

    let ProductData = productObj.Product.find((x) => x.P_Name === data.P_Name)
    console.log("Data:", ProductData)

    // let single = ProductData.P_subcat.find((y) => y.S_name === data.subname)
    // console.log("Single:", single)
    return (
        <>
            {/* <Card>
                <Card.Body>
                    <Card.Title>{single.S_name}</Card.Title>
                    <Card.Text>
                        {single.S_Desc}
                    </Card.Text>
                </Card.Body>                
            </Card> */}
        </>
    )
}