import { useEffect, useState } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import items from '../data/menu.json'

const DishComments = ({ selectedPasta, match }) => {

    const [selectedDish, setSelectedDish] = useState(null)

    useEffect(() => {

        if (selectedPasta) {
            setSelectedDish(selectedPasta)
        } else {
            let selectedDish = items.find(pasta => pasta.id.toString() === match.params.dishId)
            setSelectedDish(selectedDish)
        }
    }, [match?.params.dishId, selectedPasta])

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={12} md={6}>
                    <ListGroup>
                        {
                            selectedDish ? selectedDish.comments.map(c => (
                                <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                            )) : <p>YOU DIDN'T SELECT ANYTHING</p>
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default DishComments