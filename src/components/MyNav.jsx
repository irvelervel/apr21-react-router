// because the NavBar is a simple component let's create it as a function
import { Navbar, Nav } from 'react-bootstrap'

const MyNav = (props) => (
    // props is an object
    // this object will hold any prop you're calling your component with
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="#pricing">Reservation</Nav.Link>
                <Nav.Link href="#pricing">Find us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNav