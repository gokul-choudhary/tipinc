import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const navLink = {
  color: '#ffffff'
}

const Menu = () => {
  const MenuItems = ['Home', 'About', 'Services', 'Contact'];
  const MenuItem = MenuItems.map((item) => <Nav.Link href={item} style={navLink} > {item}</Nav.Link >);

  return (
    <Navbar expand="sm" className="tipi-bgcolor">
      <Container className="align-items-center">
        <Navbar.Brand style={{ color: "#ffffff" }}>THE INSIGHT PARTNERS INC.</Navbar.Brand>
        <Navbar.Toggle aria-controls="tipinc-navbar-nav" style={navLink} />
        <Navbar.Collapse id="tipinc-navbar-nav" >
          <Nav className="ms-auto">
            {MenuItem}
            <Button variant="outline-info" className="px-3" style={{ borderRadius: '10rem', color: '#ffffff' }}>Get Started</Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;