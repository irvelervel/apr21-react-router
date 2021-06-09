import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Loading from './Loading'
import Error from './Error'

// 1) create some room for the reservations into the state
// 2) grab the reservations from an endpoint
// 3) we're going to put them into the state of this component

const Reservations = () => {

    const [reservations, setReservations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // what we want for our expensive operations is being able to call the ONCE
    // not only once, but also in a way that doesn't affect the speed of the app
    // the user experience

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://striveschool.herokuapp.com/api/reservation')
                console.log(response)
                // this is happening AFTER the initial render invocation
                let newReservations = await response.json()
                // .json() is a method in charge of converting your response body into something usable in JS
                console.log('RESERVATIONS', newReservations)
                setReservations(newReservations)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
                setIsError(true)
            }
        }
        getData()
    }, [])

    // this.setState({
    //     reservations: []
    // })
    // THIS SHOULD NEVER BE DONE!
    // render is NOT the perfect place to do our fetches || expensive operations

    // useful for avoiding too much clutter in your return statement
    // let shouldIShowTheEmptyReservation = this.state.reservations.length === 0 && this.state.isLoading === false

    // render is going to be executed every time there's a change
    // in the STATE or in the PROPS of this component
    return (
        <>
            {/* this is called a REACT FRAGMENT, it has no visible effect on your page */}
            <h3>RESERVATIONS:</h3>
            {/* {this.state.isLoading ? <Loading /> : <></>} */}
            {isLoading && <Loading />}
            {isError && <Error />}
            {/* because a valid React Component like <Loading /> is always going to be */}
            {/* a valid statement, the condition to check for the Spinner to appear */}
            {/* is going to be the left one, your state check */}
            {/* short circuit operator */}
            {
                (
                    reservations.length === 0
                    && isLoading === false
                    && isError === false
                )
                    ? <p>NO RESERVATIONS</p>
                    : <ListGroup>
                        {reservations.map(reservation =>
                            <ListGroup.Item key={reservation._id}>
                                {reservation.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
            }
        </>
    )
}

export default Reservations