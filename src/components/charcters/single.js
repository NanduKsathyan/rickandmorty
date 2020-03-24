import React from 'react'
const SingleItem=({item,search})=>{
    let currentYear = new Date().getFullYear()
    if(search !=='' && item.name.toLowerCase().indexOf(search.toLowerCase())===-1)
            return null
    return(
        <div className=" col-md-3 col-sm-6 col-6 " key={item.id}>
                    <div className='character-card'>
                        <div className='card-header'>
                            <img src={item.image} className='img-fluid card-image' />
                            <div className='mask'>
                                <h3>{item.name}</h3>
                                <p>Id: {item.id}  - created {currentYear - (new Date(item.created).getFullYear())} years ago</p>
                            </div>
                        </div>
                        <div className="character-card-content">
                            <div className='sub-text'>
                                <span className='cap'>Status</span><p>{item.status}</p>
                            </div>
                            <div className='sub-text'>
                                <span className='cap'>SPECIES</span>  <p>{item.species}</p>
                            </div>
                            <div className='sub-text'>
                                <span className='cap'>GENDER</span> <p>{item.gender}</p>
                            </div>
                            <div className='sub-text'>
                                <span className='cap'>ORIGIN</span> <p>{item.origin.name}</p>
                            </div>
                            <div className='sub-text'>
                                <span className='cap'>LAST LOCATION</span>  <p>{item.location.name}</p>
                            </div>
                        </div>
                    </div>

                </div>
    )
}
export default SingleItem