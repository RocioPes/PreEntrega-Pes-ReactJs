import { NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"


import CartWidget from './CartWidget';

import { products } from "../data/products";

const categories = products.map(item => item.category);
const simplifiedCategories = new Set(categories);

    
function NavBar() {
 return ( <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink to="/"><Navbar.Brand>Natural Nomad</Navbar.Brand></NavLink>
          <Nav className="me-auto">
          {[...simplifiedCategories].map(item => <Nav.Link as={NavLink} key={item} to={`/category/${item}`}> {item}</Nav.Link>)}
            
            <Nav.Link href="#carrito"><CartWidget/><span>2</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)}

export default NavBar;