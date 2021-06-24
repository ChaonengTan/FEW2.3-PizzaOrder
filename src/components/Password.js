import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addPassword } from '../actions'
import './styles/Password.css'

function generatePassword(num) {
    return (Array(num).fill(0).map(() => {
        return String.fromCharCode(Math.floor(Math.random()*92+33))
    }).join(''))
}
function Password() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('p@$$w0rd')
    return (
        <div className='password'>
            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className='passwordButtons'>
                    <button onClick={(e) => {
                        dispatch(addPassword(name, password))
                    }}>Save</button>
                    <button onClick={e => {
                        setPassword(generatePassword(8))
                    }}>Generate</button>
            </div>
            
        </div>
    )
}

export default Password