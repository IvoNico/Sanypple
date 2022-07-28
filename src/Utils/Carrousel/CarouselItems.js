import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample({image,image2,image3}) {
return (
    <Carousel fade interval="10000000" variant='dark'>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Imagen producto"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Imagen producto"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Imagen Producto"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;