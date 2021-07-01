import { useSelector } from 'react-redux'
import './styles/PizzaList.css'

function PizzaList() {
    const pizzas = useSelector((state) => state.pizzas)
    const pizzaList = pizzas.map((pizza, index) => {
        return (
        <div key={index}>
            Name:{pizza.name} Composition: {pizza.composition}
        </div>)
        })
    return (
        <div className='pizzaList'>
            {pizzaList}
        </div>
    )
}

export default PizzaList
