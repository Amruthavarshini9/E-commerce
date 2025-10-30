import React from 'react'
import { kitchenData } from "../data/kitchen"

const kitchen = () => {

    const FirstFiveImages = kitchenData.slice(0, 5);
    return (
        <>
            <div className='proTitle'>
                <h2>Kitchen</h2>
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

export default kitchen;
