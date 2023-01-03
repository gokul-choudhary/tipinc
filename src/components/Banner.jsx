import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import * as Icon from 'react-bootstrap-icons';

const Banner = () => {
  return (
    <Container fluid className="align-items-center tipi-bgcolor px-sm-5">
      <Row className="align-items-center py-4">
        <Col xs="auto" sm="8" md="6">
          <h1 className="h1">Better Solutions For Your Business</h1>
          <p className="h5" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>The Insight Partners Inc. is a one stop shop of market research reports and solutions to various companies across the globe.</p>
          <br />
          <Button variant="info" className="px-3" style={{ borderRadius: '10rem', color: '#ffffff' }}>Get Started</Button>
          <Button variant="transparent" className="text-white fs-6 px-3" ><Icon.PlayCircle /> Watch Video</Button>
          <br />
        </Col>
        <Col xs="auto" sm="4" md="6">
          <Figure.Image src="https://theinsightpartnersinc.com/assets/img/hero-img.png"
            className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;