import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../actions'

import './styles/Pizza.css'

function Pizza(props) {
    const {data} = props
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [toppings, addTopping] = useState([])
    const [crust, addCrust] = useState('')
    const [cheese, addCheese] = useState('')

    function multiComponent(data, func) {
        return data.map((elem) => {
            return (
                <div className='pizzaCard'>
                    <h3>{elem}</h3>
                    <button onClick={(e) => {
                        func([...toppings, elem])
                    }}>Add</button>
                </div>
            )
        })
    }
    function radioComponent(data, func) {
        return data.map((elem) => {
            return (
                <div className='pizzaCard'>
                    <h3>{elem}</h3>
                    <label>
                        <input type='radio' name={String(func)} value={elem} onChange={(e) => {
                            func(elem)
                            console.log(cheese)
                        }}/>
                        <span>Select</span>
                    </label>
                    
                </div>
            )
        })
    }
    return (
        <div className='ToppingHandler'>
            <div className='addButtons'>
                <div>{radioComponent(data.crust, addCrust)}</div>
                <div>{radioComponent(data.cheese, addCheese)}</div>
                <div>{multiComponent(data.toppings, addTopping)}</div>
            </div>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <button onClick={(e) => {
                dispatch(addPizza(name, {crust, cheese, toppings}))
            }}>
                Save Pizza
            </button>

            <div>{name}: {crust} {cheese} {toppings}</div>
        </div>
    )
}

export default Pizza
