import React, { Fragment } from 'react'
import SingleItem from './single'
const CharacterItem = ({ info, search }) => {
    let data = info && info.length ? info.map(item => {
        
        return (
                <SingleItem item={item} key={item.id} search={search}/>
              
        )
    }) : null
    return (
        <div className='perfect-center container'>
            <div className=' row '>
                {data}
            </div>
        </div>

    )
}
export default CharacterItem