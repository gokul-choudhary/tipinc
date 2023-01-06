import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <Container fluid className="px-5 py-4 tipi-bgcolor">
      <Row>
        <Col>
          <footer>
            <p className="mb-0">© Copyright The Insight Partners Inc. All Rights Reserved.</p>
          </footer>
        </Col>
      </Row>
    </Container>
  )
}
