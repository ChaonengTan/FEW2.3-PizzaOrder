import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../actions'

import data from '../data.json'
import './styles/Pizza.css'

function Pizza() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const {toppings, addTopping} = useState([])
    const {crust, addCrust} = useState('')
    const {cheese, addCheese} = useState('')

    function variComponent(data, name) {
        return data.map((elem) => {
            return (
                <div className='pizzaCard'>
                    <h3>{elem}</h3>
                    <button onClick={e => {
                        name.push({elem})
                    }}>Add</button>
                </div>
            )
        })
    }
    function Component(data, name) {
        return data.map((elem) => {
            return (
                <div className='pizzaCard'>
                    <h3>{elem}</h3>
                    <button onClick={e => {
                        name({elem})
                    }}>Add</button>
                </div>
            )
        })
    }
    return (
        <div className='ToppingHandler'>
            <div className='addButtons'>
                <div>{Component(data.crust, addCrust)}</div>
                <div>{Component(data.cheese, addCheese)}</div>
                <div>{variComponent(data.toppings, addTopping)}</div>
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
        </div>
    )
}

export default Pizza
