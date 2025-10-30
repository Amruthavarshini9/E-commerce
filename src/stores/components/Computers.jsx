

import React from 'react'
import {computerData } from "../data/computers"

const Computers = () => {

    const FirstFiveImages = computerData.slice(0, 5);
    return (
        <>
            <div className='proTitle'>
                <h2>Computers </h2>
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



export default Computers;