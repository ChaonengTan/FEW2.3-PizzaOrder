import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../actions'

import './styles/Pizza.css'

function Pizza(props) {
    const {data} = props

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [crust, addCrust] = useState('')
    const [cheese, addCheese] = useState('')
    const [toppings, addTopping] = useState([])

    function multiComponent(data, func) {
        return data.map((elem) => {
            const selected = toppings.includes(elem) ? 'selected' : ''
            return (
                <label className={`pizzaCard ${selected}`}>
                    <h3>{elem}</h3>
                    <input type='checkbox' onClick={(e) => {
                        toppings.includes(elem) ? func(toppings.filter(e => e !== elem)) : func([...toppings, elem])
                    }}/>
                </label>
            )
        })
    }
    function radioComponent(data, func) {
        return data.map((elem) => {
            const selected = crust === elem || cheese === elem ? 'selected' : ''
            return (
                <label className={`pizzaCard ${selected}`}>
                    <h3>{elem}</h3>
                    <input type='radio' name={data} value={elem} onChange={(e) => {
                        func(elem)
                    }}/>
                </label>
            )
        })
    }
    return (
        <div className='pizza'>
            <div>
                <input
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name} placeholder='Name Your Pizza'
                />
                <button onClick={(e) => {
                    dispatch(addPizza(name, [crust, cheese, toppings]))
                }}>
                    Save Pizza
                </button>
            </div>
            <div className='addButtons'>
                <div>{radioComponent(data.crust, addCrust)}</div>
                <div>{radioComponent(data.cheese, addCheese)}</div>
                <div>{multiComponent(data.toppings, addTopping)}</div>
            </div>
        </div>
    )
}

export default Pizza
