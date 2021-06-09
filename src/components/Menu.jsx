import items from '../data/menu.json'
import { Badge, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => (
    <Container>
        {items.map(dish => (
            <Row key={dish.id} className="text-center my-2">
                <Col md={{ span: 8, offset: 2 }}>
                    <Link to={"/details/" + dish.id}>
                        {/* dish.id will be 2, 3, 1, 0 */}
                        <img src={dish.image} alt="dish pic"></img>
                    </Link>
                    <h4>
                        {dish.name}
                    </h4>
                    <p>
                        {dish.description}
                    </p>
                    <h4>
                        <Badge variant="warning">{dish.price}</Badge>
                    </h4>
                </Col>
            </Row>))}
    </Container>
)

export default Menu