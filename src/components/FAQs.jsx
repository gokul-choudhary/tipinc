import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import * as Icon from 'react-bootstrap-icons';

const FAQs = () => {
  const FAQList = [
    {
      "id": 0,
      "que": "What is your company all about?",
      "ans": "The Insight Partners Inc. is a one stop shop of market research reports and solutions to various companies across the globe. We help our clients in their decision support system by helping them choose most relevant and cost effective research reports and solutions from various publishers."
    },
    {
      "id": 1,
      "que": "How can I raise a query related to a product ?",
      "ans": "Each of our report/product has an option to raise a query or question. You only need to submit a form along with your query and our customer service team will immediately respond to your query. They will not only answer your question but also try to help you to identify the best possible solution to your requirement."
    },
    {
      "id": 2,
      "que": "Why should I purchase from you?",
      "ans": "The Insight Partners Inc. has an extensive coverage of industry reports, company reports and country reports across all industries. In case your research needs are not met by syndicated reports offered by leading publishers, we can help you by offering a customized research solution by liaising with different research agencies saving your valuable time and money. We have experienced and trained staff that helps you navigates different options and lets you choose best research solution at most effective cost."
    },
    {
      "id": 3,
      "que": "What are the different payment options available on your site?",
      "ans": "You can pay us by using various methods, such as: Credit Card/Debit Card: You can make the payment of your order by using your credit or debit cards. We accept VISA, Mastercard and other credit/debits cards. We also issue an invoice/receipt once the payment is been done via an email. Transfer to bank account - You can pay by making a transfer to our bank account. Once you have placed an order, we will email you the order invoice. PayPal - you can select PayPal as payment option during order processing."
    },
    {
      "id": 4,
      "que": "How will I receive my order?",
      "ans": "Once you have placed an order and payment receipt is confirmed by our bank, you will get the report/product through an email within 48 hours. To ensure that our emails are reaching to your inbox and not going to junk or trash folders, you need to allow our company domain address which is info@reportsweb.com on your firewall or any other company security tool."
    },
  ];
  const FAQs = FAQList.map(item => {
    return (
      <Accordion className="bg-white m-3 mx-4 p-4" key={item.id}>
        <Accordion.Header><Icon.QuestionCircle  /> {item.que}</Accordion.Header>
        <Accordion.Body>{item.ans}</Accordion.Body>
      </Accordion>
    );
  })
  return (
    <Container fluid className="py-5 px-sm-5 tipi-section-bg" id="FAQsSection">
      <div className="tipi-section-title position-relative">
        <h2 className="text-center">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      
      {FAQs}
    
    </Container>
  );
}

export default FAQs;