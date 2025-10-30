import React from 'react'
import { watchData } from "../data/watch"

const watch = () => {

    const FirstFiveImages = watchData.slice(0, 5);
    return (
        <>
            <div className='proTitle'>
                <h2>Watch </h2>
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



export default watch;