import { useState, useEffect } from "react"
import items from '../data/menu.json'
import DishComments from "./DishComments"

const DishDetails = ({ match, history }) => {

    const [selectedPasta, setSelectedPasta] = useState(null)

    useEffect(() => {
        console.log('the id to look for is', match.params.dishId)
        let id = match.params.dishId
        let dishToShow = items.find(pasta => pasta.id.toString() === id)
        console.log(dishToShow)
        setSelectedPasta(dishToShow)
    }, [match.params.dishId])

    return (
        <>
            {
                selectedPasta === null
                    ? <h1>LOADING...</h1>
                    : typeof selectedPasta === 'undefined'
                        ? <h1>404 - PASTA NOT FOUND</h1>
                        : (
                            <div>
                                <h1>{selectedPasta.name}</h1>
                                <img onClick={() => history.push('/comments/' + selectedPasta.id)} src={selectedPasta.image} alt="pasta pic"></img>
                                <DishComments selectedPasta={selectedPasta} />
                            </div>
                        )
            }
        </>
    )
}

export default DishDetails