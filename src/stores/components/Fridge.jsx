import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
    const FirstFiveImages = fridgeData.slice(0, 5) // get first 5 fridges

    return (
        <>
            <div className="proTitle">
                <h2>Fridges</h2>
            </div>
            <div className='proSection'>
                {
                    FirstFiveImages.map((item) => {
                        return (
                            <div className='imgBox'>
                                <img className='proImage' src={item.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Fridge
