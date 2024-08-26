import React from 'react'
import propTypes from 'prop-types'
import Button from './ButtonSecond'

const Header =({title})=>{
    const onClick=()=> {
        console.log('Click')
    }
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
           

        </header>
    )
}



Header .defaultProps={
    title:'task tracker',
}
Header .propTypes={
    title: propTypes.string.isRequired,
}

//CSS in JS
const headingStyle={
    color:'red', background:'black'
}
export default Header
