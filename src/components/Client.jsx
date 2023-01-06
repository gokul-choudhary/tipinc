import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Client = () => {

  const clientsList = ['client-1.png', 'client-2.png', 'client-3.png', 'client-4.png', 'client-5.png', 'client-6.png'];
  const clients = clientsList.map((item) => 
              <Col xs="4" sm="2"> 
                <Image src={"https://theinsightpartnersinc.com/assets/img/clients/" + item} alt={item} className="img-fluid" />
              </Col>);

  return (
    <Container fluid id="clientLogo" className="p-4">
      <Row>        
          {clients}        
      </Row>
    </Container>
  );
}

export default Client;

