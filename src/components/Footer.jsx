import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {

  const usefulLinkList = ["Home", "About us", "Services", "Terms of service", "Privacy policy"];
  const usefulLinks = usefulLinkList.map((item, index) => {
    return (<ListGroup.Item key={index}><Icon.ChevronRight /> {item}</ListGroup.Item>
    );
  });

  const ourServicesList = ["Syndicate Research", "Custom Research", "Rapid Research", "Consulting Services", "Subscription"];
  const ourServices = ourServicesList.map((item, index) => {
    return (<ListGroup.Item key={index}><Icon.ChevronRight /> {item}</ListGroup.Item>
    );
  });

  return (
    <footer id="FooterSection">
      <Container className="tipi-footer-top py-4">
        <Row>
          <Col xs="12" sm="6" md="3" className="tipi-footer-contact mb-4">
            <h3>THE INSIGHT PARTNERS INC.</h3>
            <p>A108 Adam Street<br />
              New York, NY 535022<br />
              United States<br />
              <strong>Phone:</strong> +1800 121 6455<br />
              <strong>Email:</strong> admin@theinsightpartnersinc.com
            </p>
          </Col>

          <Col xs="6" sm="6" md="3" className="tipi-useful-links mb-4">
            <h4>Useful Links</h4>
            <ListGroup >{usefulLinks}</ListGroup>
          </Col>

          <Col xs="6" sm="6" md="3" className="tipi-our-services mb-4">
            <h4>Our Services</h4>
            <ListGroup >{ourServices}</ListGroup>
          </Col>

          <Col xs="12" sm="6" md="3" className="tipi-social-links mb-4">
            <h4>Our Social Networks</h4>
            <ListGroup className="d-block">
              <ListGroup.Item><Icon.Twitter /></ListGroup.Item>
              <ListGroup.Item><Icon.Facebook /> </ListGroup.Item>
              <ListGroup.Item><Icon.Instagram /></ListGroup.Item>
              <ListGroup.Item><Icon.Skype /> </ListGroup.Item>
              <ListGroup.Item><Icon.Linkedin /> </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="px-5 py-4 tipi-bgcolor">
          <p className="mb-0 text-center text-sm-start">©&nbsp;Copyright <strong>The&nbsp;Insight&nbsp;Partners&nbsp;Inc.</strong> All&nbsp;Rights&nbsp;Reserved.</p>
        </Row>
      </Container>

    </footer>
  )
}
