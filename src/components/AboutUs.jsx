import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';

const AboutUs = () => {
  const AboutListVal = ['Making Intelligent Decision | Custom Research Solution', 'Identifying Business Solution to your Research Needs', '24x7 customer support | Free analyst support*'];

  const lists = AboutListVal.map((list) => <ListGroup.Item as="li"><Icon.Check size={'1.6rem'} style={{ color: '#47b2e4' }} />  {list} </ListGroup.Item>);

  return (
    <Container className="my-4" id="AboutUsSection">
      <div className="tipi-section-title position-relative">
        <h2 className="text-center">About Us</h2>
      </div>
      <Row className="gy-3">
        <Col xs="12" sm="6">
          <p>The Insight Partners Inc. is a one stop shop of market research reports and solutions to various companies across the globe. We help our clients in their decision support system by helping them choose most relevant and cost effective research reports and solutions from various publishers.</p>
          <ListGroup as="ul">
            {lists}
          </ListGroup>
        </Col>
        <Col xs="12" sm="6">
          <p>The Insight Partners Inc. can help you by offering a customized research solution by liaising with different research agencies saving your valuable time and money. We have experienced and trained staff that helps you navigate different options and lets you choose best research solution at most effective cost.</p>
          <p>Reports include detailed research, sales data and market information along with analysis, context also provide the complete picture of the past, present and future of key markets.</p>
          <Button variant="outline-info">Learn More</Button>
        </Col>
      </Row>
    </Container>

  );
}

export default AboutUs;