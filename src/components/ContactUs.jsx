import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
  
const ContactUs = () => {
  return(
    <Container className="py-5" id="ContactUsSection">
      <div className="tipi-section-title position-relative">
        <h2 className="text-center">CONTACT</h2>
      </div>
      <Row>
        <Col xs="12" md="6" className="tipi-info mb-3">
          {/*Contact Info*/}
          <Row>
            <Col xs="12" sm="6" lg="12">
                {/*Content*/}
                <Row>
                  <Col xs="1"><Icon.PinMap /></Col>
                  <Col xs="11">
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1"><Icon.Envelope /></Col>
                  <Col xs="11">
                    <h4>Email:</h4>
                    <p>admin@theinsightpartnersinc.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1"><Icon.Phone /></Col>
                  <Col xs="11">                
                    <h4>Call:</h4>
                    <p>+1800 121 6455</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" sm="6" lg="12">
                {/*Map*/}
              </Col>
          </Row>
        </Col>
        <Col xs="12" md="6" className="tipi-form mb-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <textarea className="form-control" rows="5"></textarea>
            </Form.Group>
            
            <div className="text-center">
              <Button type="submit" variant="info" className="px-4">Submit Message</Button>
            </div>
            
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;