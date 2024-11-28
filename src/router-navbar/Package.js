import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    // MDBBtn,
} from "mdb-react-ui-kit";
import "./Package.css";
import emailjs from "@emailjs/browser";

import { Container, Row, Col } from "react-bootstrap";


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Package() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // 1. Send "Thank You" email to the user
        const userParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        emailjs
            .send(
                "service_6rkxqyd", // YOUR_SERVICE_ID
                "template_if4ku0k", // template_id
                userParams, // Pass the user details as parameters
                "gbHgYxlABI8gRDoDt" // public key
            )
            .then((response) => {
                console.log(
                    "Thank You email sent successfully to the user!",
                    response.status,
                    response.text
                );

                // Clear the form fields after successful submission
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((err) =>
                console.error("Failed to send Thank You email to the user:", err)
            );

        // 2. Send admin email with user details
        const adminParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        emailjs
            .send(
                "service_6rkxqyd", // YOUR_SERVICE_ID
                "template_1i32ju5", // template_id
                adminParams, // Pass the user details as parameters
                "gbHgYxlABI8gRDoDt" // public key
            )
            .then((response) => {
                console.log(
                    "Admin email sent successfully!",
                    response.status,
                    response.text
                );
            })
            .catch((err) => console.error("Failed to send admin email:", err));
    };




    return (
        <>
            <MDBContainer fluid>
                <MDBRow className="justify-content-center mb-0">
                    <h1 className="type-packag">Type's of packages</h1>
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                            <MDBCardBody>

                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="magina-1.jpg"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">

                                        <h5>Silver Package</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>

                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>includes Silver</span>
                                            <span className="text-primary"> • </span>
                                            <span>Photo</span>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                Video's
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span className="text-primary"> • </span>
                                            <span>Single album</span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            Our Silver Package is the perfect choice for
                                            preserving your special <br></br> moments
                                            with elegance and simplicity. It includes:
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">40.000</h4>
                                            <span className="text-danger">
                                                <s>$46.999</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success"> Onwards </h6>
                                        <div className="d-flex flex-column mt-5">

                                            <Button className="btn-add" onClick={handleShow}>
                                                add pack
                                            </Button>

                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center mb-3">
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="magina-7.jpg"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Gold Package</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>

                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>includes Gold Package </span>
                                            <span className="text-primary"> • </span>
                                            <span>Traditional photo , candid photo,</span>
                                            <span classNAme="text-primary"> • </span>
                                            <span>
                                                traditional video
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span className="text-primary"> • </span>
                                            <span>2 Album</span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            Timeless Memories with a Personal Touch
                                            Our Gold Package offers <br></br> a comprehensive and personalized
                                            experience to capture <br></br> your special day from every angle. It includes:
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">60.000</h4>
                                            <span className="text-danger">
                                                <s>$72.000</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Onwards</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <Button className="btn-add" onClick={handleShow}>
                                                add pack
                                            </Button>

                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center mb-3">
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="magina-35.jpg"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Diamond Package</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>

                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>Diamond includes</span>
                                            <span className="text-primary"> • </span>
                                            <span>Traditional photo , candid photo, </span>
                                            <br></br>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                traditional video , candid video
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span className="text-primary"> • </span>
                                            <span>2 Album's</span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            Ultimate Experience for Unforgettable Moments <br></br>
                                            The Diamond Package  offers the ultimate coverage,
                                            ensuring <br></br>every special moment is   captured beautifully. It includes:
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">80.000</h4>
                                            <span className="text-danger">
                                                <s>$95.000</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Onwards
                                        </h6>
                                        <div className="d-flex flex-column mt-4">
                                            <Button className="btn-add" onClick={handleShow}>
                                                add pack
                                            </Button>

                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-center mb-3">
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="magina-36.jpg"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Platinum Package</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>

                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>Platinum includes</span>
                                            <span className="text-primary"> • </span>
                                            <span>Traditional photo , candid photo, </span>
                                            <br></br>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                traditional video , candid video-2
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span className="text-primary"> • </span>
                                            <span>Drone, pre wedding , post wedding ,2 album</span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            The Platinum Package ensures that every angle,<br></br>
                                            every moment, and every emotion is expertly captured,<br></br>
                                            offering you a complete and unforgettable wedding experience.
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">80.000</h4>
                                            <span className="text-danger">
                                                <s>$95.000</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Onwards
                                        </h6>
                                        <div className="d-flex flex-column mt-4">
                                            <Button className="btn-add" onClick={handleShow}>
                                                add pack
                                            </Button>

                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Modal show={show} onHide={handleClose}>
                <Container fluid className="footer-container" id="Contact">
                    <Row className="align-items-center">
                        <Col xs={12} md={12} lg={12}>
                            <div className="login-box">
                                <form className="contactform" onSubmit={sendEmail}>
                                    <div className="user-box">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="user-box">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="user-box">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone Number"
                                            required
                                        />
                                    </div>
                                    <div className="user-box">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Text Your Message"
                                            required
                                        />
                                    </div>
                                    <div className="btn-container">
                                        <Button type="close" onClick={handleClose} id="footer-btn">
                                            Close
                                        </Button>

                                        <Button type="submit" variant="success" id="footer-btn">
                                            send
                                        </Button>

                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal>

        </>
    );
}

export default Package;