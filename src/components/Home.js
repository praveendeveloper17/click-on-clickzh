import { useState } from 'react';
import './Home.css';
import { Container, Row, Col } from "react-bootstrap";

const images = [
  'magina-1.jpg', 'magina-2.jpg', 'magina-3.jpg', 'magina-4.jpg',
  'magina-5.jpg', 'magina-6.jpg', 'magina-7.jpg', 'magina-10.jpg',
  'magina-11.jpg', 'magina-12.jpg', 'magina-13.jpg', 'magina-14.jpg',
  'magina-15.jpg', 'magina-16.jpg', 'magina-17.jpg', 'magina-18.jpg',
  'magina-19.jpg', 'magina-20.jpg', 'magina-21.jpg', 'magina-22.jpg',
  'magina-23.jpg', 'magina-24.jpg', 'magina-25.jpg', 'magina-26.jpg',
  'magina-35.jpg', 'magina-37.jpg', 'magina-29.jpg', 'magina-30.jpg',
  'magina-31.jpg', 'magina-32.jpg', 'magina-33.jpg', 'magina-34.jpg',
  'magina-35.jpg', 'magina-38.jpg', 'heroimg1.jpg'
];

function Home() {
  const [selectedImage, setSelectedImage] = useState(null); // Selected image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the clicked image
  const openImage = (index) => {
    setCurrentIndex(index);    // Set the index of the clicked image
    setSelectedImage(images[index]);  // Set the clicked image as selected
  };

  // Go to the next image
  const nextImage = (e) => {
    e.stopPropagation();  // Prevent closing the modal
    const newIndex = (currentIndex + 1) % images.length;  // Go to the next image, loop back to the start if at the end
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Go to the previous image
  const prevImage = (e) => {
    e.stopPropagation();  // Prevent closing the modal
    const newIndex = (currentIndex - 1 + images.length) % images.length;  // Go to the previous image, loop back if at the first
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Close the enlarged image view
  const closeImage = () => {
    setSelectedImage(null); // This will close the modal
  };

  const sendMessage = () => {
    const phoneNumber = "918248647478"; // Replace with your number
    const message = "Hello, I want to know more about your services!";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container fluid className="home-container">
      <Row className="align-items-center">
        <Col xs={12} md={12} lg={12}>
          <div className="home-content">
            <h1>
              "Capture your special day with lifetime <br /> memories at Photokadai.com!"
            </h1>

            <button onClick={sendMessage} className="whatsapp-button ">
              <h1><i class="fa-brands fa-whatsapp"></i></h1>
            </button>
          </div>
        </Col>


        <Container fluid className="text-center py-4 ">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={8}>
              <img
                src="heroimg1.jpg"
                alt="Descriptive Text"
                className="img-fluid rounded "
              />
            </Col>
          </Row>
        </Container>


      </Row>
      

      {/* Image Grid Structure */}
      <Container>
        <Row>
          <Col xs={6}><img src={images[0]} alt="magina-1" className="img-fluid gallery-image" onClick={() => openImage(0)} /></Col>
          <Col xs={6}><img src={images[1]} alt="magina-2" className="img-fluid gallery-image" onClick={() => openImage(1)} /></Col>
        </Row>

        <Row>
          <Col xs={4}><img src={images[2]} alt="magina-3" className="img-fluid gallery-image" onClick={() => openImage(2)} /></Col>
          <Col xs={4}><img src={images[3]} alt="magina-4" className="img-fluid gallery-image" onClick={() => openImage(3)} /></Col>
          <Col xs={4}><img src={images[4]} alt="magina-5" className="img-fluid gallery-image" onClick={() => openImage(4)} /></Col>
        </Row>
        <Row>
          <Col xs={6}><img src={images[5]} alt="magina-6" className="img-fluid gallery-image" onClick={() => openImage(5)} /></Col>
          <Col xs={6}><img src={images[6]} alt="magina-7" className="img-fluid gallery-image" onClick={() => openImage(6)} /></Col>
        </Row>
        <Row>
          <Col xs={4}><img src={images[7]} alt="magina-10" className="img-fluid gallery-image" onClick={() => openImage(7)} /></Col>
          <Col xs={4}><img src={images[8]} alt="magina-11" className="img-fluid gallery-image" onClick={() => openImage(8)} /></Col>
          <Col xs={4}><img src={images[9]} alt="magina-12" className="img-fluid gallery-image" onClick={() => openImage(9)} /></Col>
        </Row>
        <Row>
          <Col xs={12}><img src={images[10]} alt="magina-13" className="img-fluid gallery-image" onClick={() => openImage(10)} /></Col>
        </Row>
        <Row>
          <Col xs={6}><img src={images[11]} alt="magina-14" className="img-fluid gallery-image" onClick={() => openImage(11)} /></Col>
          <Col xs={6}><img src={images[12]} alt="magina-15" className="img-fluid gallery-image" onClick={() => openImage(12)} /></Col>
        </Row>

        <Row>
          <Col xs={4}><img src={images[16]} alt='fghjk' className="img-fluid gallery-image" onClick={() => openImage(16)} /></Col>
          <Col xs={4}><img src={images[17]} alt='fghjk' className="img-fluid gallery-image" onClick={() => openImage(17)} /></Col>
          <Col xs={4}><img src={images[18]} alt='fghjk' className="img-fluid gallery-image" onClick={() => openImage(18)} /></Col>
        </Row>

        <Row>
          <Col xs={6}><img src={images[13]} alt="magina-19" className="img-fluid gallery-image" onClick={() => openImage(13)} /></Col>
          <Col xs={3} className="d-flex justify-content-center align-items-center"><img src={images[14]} alt="magina-20" className="img-fluid gallery-image" onClick={() => openImage(14)} /></Col>
          <Col xs={3} className="d-flex justify-content-center align-items-center"><img src={images[15]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(15)} /></Col>
        </Row>

        <Row>
          <Col xs={6}><img src={images[19]} alt="magina-19" className="img-fluid gallery-image" onClick={() => openImage(19)} /></Col>
          <Col xs={6}><img src={images[20]} alt="magina-20" className="img-fluid gallery-image" onClick={() => openImage(20)} /></Col>
          <Col xs={6}><img src={images[21]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(21)} /></Col>
          <Col xs={6}><img src={images[23]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(23)} /></Col>
          <Col xs={12}><img src={images[22]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(22)} /></Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}><img src={images[24]} alt='fghjk' className="img-fluid gallery-image" onClick={() => openImage(24)} /></Col>
          <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center"><img src={images[25]} alt='fghjk' className="img-fluid gallery-image" onClick={() => openImage(25)} /></Col>
        </Row>

        <Row>
          <Col xs={4}><img src={images[26]} alt="magina-26" className="img-fluid gallery-image" onClick={() => openImage(26)} /></Col>
          <Col xs={4}><img src={images[27]} alt="magina-27" className="img-fluid gallery-image" onClick={() => openImage(27)} /></Col>
          <Col xs={4}><img src={images[28]} alt="magina-28" className="img-fluid gallery-image" onClick={() => openImage(28)} /></Col>
          <Col xs={4}><img src={images[29]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(29)} /></Col>
          <Col xs={4}><img src={images[30]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(30)} /></Col>
          <Col xs={4}><img src={images[31]} alt="magina-21" className="img-fluid gallery-image" onClick={() => openImage(31)} /></Col>
        </Row>


        {/* Add more rows as needed */}
      </Container>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="close" onClick={closeImage}>&times;</span>
          <img src={selectedImage} alt="selected" className="enlarged-image" />
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </Container>
  );
}

export default Home;
