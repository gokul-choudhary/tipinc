import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Client = () => {
  return (
    <Container fluid id="clientLogo" className="p-4">
      <Row>
        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-1.png" alt="client-1" className="img-fluid" />
        </Col>

        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-2.png" alt="client-2" className="img-fluid" />
        </Col>

        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-3.png" alt="client-3" className="img-fluid" />
        </Col>

        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-4.png" alt="client-4" className="img-fluid" />
        </Col>

        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-5.png" alt="client-5" className="img-fluid" />
        </Col>

        <Col xs="4" sm="2">
          <Image src="https://theinsightpartnersinc.com/assets/img/clients/client-6.png" alt="client-6" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Client;

