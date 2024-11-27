import React from "react";
import './Package.css';
import { Container, Row, Col, Nav,  } from "react-bootstrap";
import { useState } from "react";



function Package() {
    const [activeTab, setActiveTab] = useState('Package Includes');

    const tabs = [
        { name: 'Silver includes', content: 'Photo ,video with single album.' },
        { name: 'Gold includes', content: 'Traditional photo , candid photo, traditional video with 2 album.' },
        { name: 'Diamond includes', content: 'Traditional photo , candid photo, traditional video , candid video , 2 album.' },
        { name: 'Platinum includes ', content: 'Traditional photo, candid photo, traditional video, candid video (2), Drone, pre wedding , post wedding ,2 album.' },
    ];



    return (
        <>
            <Container className="packagecontainer">
                <Row className="align-items-center">
                    <Col xs={12} md={12} lg={12}>
                        <div className="package-content">
                            <h1>Type of packages</h1>
                            <h2 className="package-item">Silver Package - 40k Onwards</h2>
                            <h2 className="package-item">Gold Package - 60k Onwards</h2>
                            <h2 className="package-item">Diamond Package - 80k Onwards</h2>
                            <h2 className="package-item">Platinum Package - 1,20,000 Onwards</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Container className="mt-5">
                        <Row>
                            {/* Sidebar */}
                            <Col md={3} className="bg-light p-3 rounded contentshowing">
                                <Nav variant="pills" className="flex-column">
                                    {tabs.map((tab) => (
                                        <Nav.Item key={tab.name}>
                                            <Nav.Link
                                                active={activeTab === tab.name}
                                                onClick={() => setActiveTab(tab.name)}
                                                
                                            >
                                                {tab.name}
                                                
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>

                            {/* Content */}
                            <Col md={9} className="bg-white p-4  contentshowing rounded">
                                <h4>{activeTab}</h4>
                                <p>
                                    {
                                        tabs.find((tab) => tab.name === activeTab)
                                            ?.content
                                    }
                                </p>
                            </Col>
                        </Row>
                    </Container>

                </Row>


            </Container>
        </>
    );
};
export default Package;