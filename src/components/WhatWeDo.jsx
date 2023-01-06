import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import ProgressBar from 'react-bootstrap/ProgressBar';

const WhatWeDo = () => {

  const whatWeDoData = [
    {
      "id": 1,
      "title": "Syndicated Research Service",
      "description": "The Insight Partners Inc's syndicated research service provides complete solution to the client requirements through their experienced analyst team. Each report provides in-depth analysis on the topic and discuss drivers, restraints and opportunities available in the market."
    },
    {
      "id": 2,
      "title": "Custom Research Service",
      "description": "We help our clients in making smarter decisions through our custom solutions. We are expert in delivering high quality custom projects in Technology and Telecom industry. We are helping our clients by creating solutions as per their research requirements."
    },
    {
      "id": 3,
      "title": "Rapid Research Services",
      "description": "Our rapid research solutions help clients in getting quick solutions without burning much of their approved budgets. We work with agile research approach to meet specific client requirements in short turnaround time, our domain expertise, reports repository, databases, integrated with project management skills makes it different from the rest."
    }
  ];
  const wwdAccordion = whatWeDoData.map((item) => {
    return (
      <Accordion.Item className="mb-3" eventKey={item.id} key={item.id}>
        <Accordion.Header>
          <h3><span>{item.id}. </span> {item.title}</h3>
        </Accordion.Header>
        <Accordion.Body>{item.description}</Accordion.Body>
      </Accordion.Item>
    );
  });

  const skillProgress = [
    {
      "id": 1,
      "skill": "Quality of Reports",
      "progress": 100
    },
    {
      "id": 2,
      "skill": "Monthly Updates",
      "progress": 90
    },
    {
      "id": 3,
      "skill": "Subscription",
      "progress": 75
    },
    {
      "id": 4,
      "skill": "Analyst Support",
      "progress": 55
    }
  ];

  const skillProgressBars = skillProgress.map((item) => {
    return (
      <div className="skill-progress mb-3" key={item.id}>
        <div className="skillName">{item.skill} <span className="float-end"> {item.progress}% </span></div>
        <ProgressBar now={item.progress} label={item.progress} />
      </div>
    );
  }
  );

  return (
    <>
      <Container fluid className="my-5 px-sm-5 px-3 py-5 tipi-section-bg" id="WhatWeDoAccordion">
        { /*What We Do*/}
        <Row>
          <Col xs="12" sm="8" md="6" className="mb-4">
            <div className="tipi-section-title2 position-relative">
              <h2>What We Do</h2>
            </div>
            <Accordion flush defaultActiveKey="1">
              {wwdAccordion}
            </Accordion>
          </Col>
          <Col xs="12" sm="4" md="6">
            <Figure>
              <Figure.Image src="https://theinsightpartnersinc.com/assets/img/why-us.png" className="" />
            </Figure>
          </Col>
        </Row>
      </Container>

      { /*Getting the most from our research*/}
      <Container className="bg-white" id="tipiSkills">
        <Row>
          <Col xs={{ span: 12, order: 'first' }} sm="8" md={{ span: 6, order: 'last' }} className="mb-4" order="last">
            <div className="tipi-section-title2 position-relative">
              <h3>Getting the most from our research</h3>
              <p className="fst-italic">
                The key findings highlight crucial progressive industry trends in the global market, thereby allowing players across the value chain to develop effective long-term strategies.
              </p>
              {skillProgressBars}
            </div>
          </Col>
          <Col xs={{ span: 12, order: 'last' }} sm="4" md={{ span: 6, order: 'first' }}>
            <Figure>
              <Figure.Image src="https://theinsightpartnersinc.com/assets/img/skills.png" className="" />
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhatWeDo;