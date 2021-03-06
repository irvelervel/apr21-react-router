import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { useState } from 'react'

// usually a state belongs to a class component

// how to convert a functional component in a class-based component?
// it's pretty easy

const Home = ({ history }) => {
    const [selected, setSelected] = useState(null)

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={12} md={6}>
                    <h1>Welcome to Strivestaurant!</h1>
                    <h3>We can only cook pasta...</h3>
                    <Carousel>
                        {/* MAP */}
                        {
                            dishes.map((dish, i) => (
                                <Carousel.Item
                                    key={dish.id}
                                    onClick={() => {
                                        // setSelected(dish)
                                        history.push('/details/' + dish.id)
                                    }}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={dish.image}
                                        alt={"slide number " + (i + 1)}
                                    />
                                    <Carousel.Caption>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>)
                            )
                        }
                    </Carousel>
                </Col>
            </Row>

        </Container>
    )
}

export default Home