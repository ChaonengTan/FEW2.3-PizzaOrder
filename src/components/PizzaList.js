import { useSelector } from 'react-redux'
import './styles/PizzaList.css'

function PizzaList() {
    const pizzas = useSelector((state) => state.pizzas)
    const pizzaList = pizzas.map((pizza, index) => {
        pizza.composition[2] = pizza.composition[2].map(e => `${e} `)
        const composition = pizza.composition.map(item => {
            return(
                <div className='pizzaComposition'>
                    {item}
                </div>
            )
        })
        return (
            <div key={index} className='pizzaListCard'>
                <div className='name'>{pizza.name}</div>
                <div>{composition}</div>
            </div>
        )
    })
    return (
        <div className='pizzaList'>
            {pizzaList}
        </div>
    )
}

export default PizzaList
