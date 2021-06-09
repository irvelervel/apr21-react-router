import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import upperName from '../helpers/lib'

// OUR ENDPOINT NEEDS:
// name - string
// phone - string | number
// numberOfPersons - string | number
// smoking - boolean
// dateTime - string
// specialRequests - string


// let myStyle = { color: 'red' }

const ReservationForm = () => {
    const [reservation, setReservation] = useState({
        name: '',
        phone: '',
        numberOfPersons: 1,
        smoking: false,
        dateTime: '',
        specialRequests: ''
    })

    const inputChange = (e) => {

        let id = e.target.id

        setReservation({
            ...reservation,
            [id]: id === 'smoking' ? e.target.checked : e.target.value
        })
    }

    useEffect(() => {
        console.log(reservation)
    }, [reservation])

    const submitReservation = async (e) => {
        e.preventDefault()
        console.log("I'm about to send my reservation!")
        console.log(reservation)
        // we're about to use fetch()
        // fetch() is always going to return you a Promise
        // a Promise is an asynchronous operation: you know when it starts,
        // you don't know when it ends

        // async/await
        // .then()

        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation", {
                method: 'POST',
                body: JSON.stringify(reservation),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            console.log(response.ok) // the ok property from the fetch() is going to tell you if the operation was successfull
            if (response.ok) {
                alert('Reservation saved!')
                setReservation({
                    name: '',
                    phone: '',
                    numberOfPersons: 1,
                    smoking: false,
                    dateTime: '',
                    specialRequests: ''
                })
            } else {
                // this is going to catch a server problem
                // i.e: server is down, db has a problem
                alert('Houston we had a problem, try again!')
            }
        } catch (error) {
            // if we fall here it means we don't have connection
            // or maybe the url is not quite right
            console.log(error)
        }

        // fetch("https://striveschool.herokuapp.com/api/reservation")
        //     .then(response => console.log(response.ok))
        //     .catch(error => console.log(error))

    }

    return (
        <>
            <h3 className="mt-3">RESERVATION FORM</h3>
            <Form className="mb-5" onSubmit={(e) => submitReservation(e)}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={reservation.name}
                        id="name"
                        // with value I'm reflecting into the input what I have into the state
                        onChange={e => inputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter phone"
                        id="phone"
                        value={reservation.phone}
                        onChange={e => inputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>How many people?</Form.Label>
                    <Form.Control
                        as="select"
                        value={reservation.numberOfPersons}
                        id="numberOfPersons"
                        onChange={e => inputChange(e)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Do you smoke?"
                        checked={reservation.smoking}
                        id="smoking"
                        onChange={e => inputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={reservation.dateTime}
                        id="dateTime"
                        onChange={e => inputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Any special request?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={reservation.specialRequests}
                        id="specialRequests"
                        onChange={inputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ReservationForm