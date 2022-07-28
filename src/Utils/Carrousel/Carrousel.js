import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({image,image2,image3}) {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={image}
          alt="Banner de marca apple"
        />
        <Carousel.Caption>
          <h3 className='carouselTitle'>Apple</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={image2}
          alt="Banner de marca Samsung"
        />

        <Carousel.Caption>
          <h3 className='carouselTitle'>Samsung</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={image3}
          alt="Banner de marca Sony"
        />
        <Carousel.Caption>
          <h3 className='carouselTitle'>Sony</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;