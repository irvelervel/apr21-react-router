import { useEffect } from "react"
import items from '../data/menu.json'

const DishDetails = (props) => {

    useEffect(() => {
        console.log('the id to look for is', props.match.params.dishId)
        let id = props.match.params.dishId
        let dishToShow = items.find(pasta => pasta.id.toString() === id)
        console.log(dishToShow)
    }, [props.match.params.dishId])

    return (
        <h1>DISH NAME GOES HERE</h1>
    )
}

export default DishDetails