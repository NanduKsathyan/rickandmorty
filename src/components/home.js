import React, { Fragment } from 'react'
import Character from './charcters/character'
const Home = () => {
    return (
        <Fragment>
            <header>
            <h1 className='text-center'>Rick and Morty</h1>
            </header>
            
            <Character />
        </Fragment>
    )
}
export default Home