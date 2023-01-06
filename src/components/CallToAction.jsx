import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CallToAction = () => {
  return (
    <Container fluid className="tipi-cta px-sm-5 px-3">
      <Row className="d-flex justify-content-around align-items-center">
        <Col xs="12" sm="8" className="text-center text-sm-start">
          <h3>Call To Action</h3>
          <p>We adhere to the codes of practice of the Market Research Society. For queries or questions, please contact us at admin@theinsightpartnersinc.com</p>
        </Col>
        <Col xs="12" sm="4" className="text-center">
          <Button variant="outline-light" className="px-3">Call To Action</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CallToAction;