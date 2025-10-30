import React from 'react'
import { furnitureData } from "../data/furniture"

const furniture = () => {

    const FirstFiveImages = furnitureData.slice(0, 5);
    return (
        <>
            <div className='proTitle'>
                <h2>Furniture</h2>
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



export default furniture;