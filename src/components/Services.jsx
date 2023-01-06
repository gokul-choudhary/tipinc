import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';

const Services = () => {
  const servicesList = [
    {
      "id": 1,
      "title": "Syndicated Research",
      "description": "Our syndicated research service provides complete solution to the client requirements through their experienced analyst team"
    },
    {
      "id": 2,
      "title": "Custom Research",
      "description": "We help our clients in making smarter decisions through our custom solutions and creating solutions as per their research requirements."
    },
    {
      "id": 3,
      "title": "Rapid Research",
      "description": "Our rapid research solutions help clients in getting quick solutions without burning much of their approved budgets"
    },
    {
      "id": 4,
      "title": "Subscription",
      "description": "e-Insights is the one stop solution for all your market research needs. It includes repository of over thousands of reports spread across various domains."
    },
  ];
  const services = servicesList.map(item => {
    return (
      <Col xs="12" md="6" className="single-service" key={item.id}>
        <div className="bg-white m-3 mx-4 p-4">
          { /*
            switch(item.id) {            
              case  '1' : return <span><Icon.Dribbble /></span> 
              case  '2' : return <span><Icon.FileEarmarkText /></span> 
              case  '3' : return <span><Icon.ArrowRight /></span> 
              case  '4' : return <span><Icon.Layers /></span>
          */
          }
          <span><Icon.Dribbble /></span> 
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </Col>
    );
  });

  return (
    <Container fluid className="py-5 px-sm-5 tipi-section-bg" id="ServicesSection">
      <div className="tipi-section-title position-relative">
        <h2 className="text-center">Services</h2>
      </div>
      <p className="text-center">We provide best in class customer service and our customer support team is always available to help you on your research queries. We also offer enterpise subscriptions which provide significant cost savings to our clients.</p>
      <Row>
        {services}
      </Row>
    </Container>
  );
}

export default Services;