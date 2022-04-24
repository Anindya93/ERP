import React from 'react'
import { Carousel, Card, Row, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'



export default function Home() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://farvisionerp.com/images/sliders/home/sliderhome-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='mytext'>ERP For Construction</h3>
                        <p className='mytext'>Knowledge bringing efficiency.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://farvisionerp.com/images/sliders/home/sliderhome-5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='mytext'>Alter your business</h3>
                        <p className='mytext'>to align with best practices.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://farvisionerp.com/images/sliders/home/bg-partners.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            {/* ___________________________________________ */}


            <CardGroup className='style'>
                <Row xs={1} md={3} className="g-4">
                    <Card>
                        <Card.Img variant="top" src="https://farvisionerp.com/images/content-img/erp01.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>Real Estate</h1></Card.Title>
                            <Card.Text>
                                <p><strong> For Builder </strong> <br />
                                    End-to-end ERP Software for real estate solutions.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://farvisionerp.com/images/content-img/infra1234.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>Infrastructure</h1></Card.Title>
                            <Card.Text>
                                <p><strong> For Contractor </strong> <br />
                                    Best ERP software for construction industry addressing various concerns of infrastructure enterprise competently.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://farvisionerp.com/images/content-img/property-mgmnt-12234.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>Property Manager</h1></Card.Title>
                            <Card.Text>
                                <p><strong>For Commercial & Residential</strong><br />
                                    To manage your property effectively to maximize your profitability.</p>
                            </Card.Text>
                     </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.farvisionerp.com/images/content-img/oa1a.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>Facility Management</h1></Card.Title>
                            <Card.Text>
                                <p><strong>For Office & Homes</strong><br />
                                Enables an Owner Association to manage routine affairs easily.</p>
                            </Card.Text>
                     </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.farvisionerp.com/images/content-img/manufacture1212.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>Manufacturing</h1></Card.Title>
                            <Card.Text>
                                <p><strong>For RMC Batching Plant</strong><br />
                                Manufacturing ERP Solution is an ERP software used in manufacturing industry, offering modules to streamline
                                various business aspects</p>
                            </Card.Text>
                     </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.farvisionerp.com/images/content-img/erp04.jpg" style={{ height: "30vh" }} />
                        <Card.Body>
                            <Card.Title><h1>HRMS</h1></Card.Title>
                            <Card.Text>
                                <p><strong>For HR and Payroll</strong><br />
                                For HR and Payroll Managing your organization and its human resources efficiently</p>
                            </Card.Text>
                     </Card.Body>
                    </Card>
                </Row>
            </CardGroup>
        </div>
    )
}
