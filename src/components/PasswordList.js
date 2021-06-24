import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import './styles/PasswordList.css'

function PasswordList() {
    const passwords = useSelector((state) => state.passwords)

    const passwordList = passwords.map((pass, index) => {
        return (
        <div key={index}>
            name:{pass.name} password: {pass.password} <br/>
        </div>)
        })
    return (
        <div className='passwordList'>
        {passwordList}
        </div>
    )
}

export default PasswordList
