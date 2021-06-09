// because the NavBar is a simple component let's create it as a function
import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const MyNav = (props) => (
    // props is an object
    // this object will hold any prop you're calling your component with
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>{props.title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">
                    <div className={props.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
                </Link>
                <Link to="/menu">
                    <div className="nav-link">Menu</div>
                </Link>
                <Link to="/reservations">
                    <div className={props.location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}>Reservation</div>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default withRouter(MyNav)
// doing this, using withRouter we're giving MyNav history, location, match
// we're getting n.2