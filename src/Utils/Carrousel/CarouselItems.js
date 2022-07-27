import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample({image,image2,image3}) {
return (
    <Carousel fade interval="10000000" variant='dark'>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;