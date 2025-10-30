
import React from 'react'
import { womanData } from "../data/woman"

const woman = () => {

    const FirstFiveImages = womanData.slice(0, 5);
    return (
        <>
            <div className='proTitle'>
                <h2>Woman Fashion</h2>
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



export default woman;