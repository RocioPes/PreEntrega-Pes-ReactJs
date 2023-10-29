import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';



     
function NavBar() {
 return ( <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Natural Nomad</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#destinos">Destinos</Nav.Link>
            <Nav.Link href="#paquetes">Paquetes</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#usuario">Mi cuenta</Nav.Link>
            <Nav.Link href="#carrito">Carrito<CartWidget/>2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)}

export default NavBar;