import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" >
      <Container >
        <Navbar.Brand href="#home">Rahu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end',gap:"20px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          <Button >Login</Button>  
          <Button>signup</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;