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
            return (
                <div className='pizzaCard'>
                    <label>
                        <h3>{elem}</h3>
                        <input type='checkbox' name={elem} onClick={(e) => {
                            func([...toppings, elem])
                        }}/>
                    </label>
                </div>
            )
        })
    }
    function radioComponent(data, func) {
        return data.map((elem) => {
            return (
                <div className='pizzaCard'>
                    <label>
                        <h3>{elem}</h3>
                        <div>
                            <input type='radio' name={String(func)} value={elem} onChange={(e) => {
                                func(elem)
                                console.log(cheese)
                            }}/>
                            <span>Select</span>
                        </div>
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
                value={name} placeholder='Name Your Pizza'
            />
            <button onClick={(e) => {
                dispatch(addPizza(name, [crust, cheese, toppings]))
            }}>
                Save Pizza
            </button>
            <div>{name} {crust} {cheese} {toppings}</div>
        </div>
    )
}

export default Pizza
