import React, { useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import SliderData from './sliderdata.json'
import './slider.css'

const Slider = () => {
    let [current, setCurrent] = useState(0)
    const goLeft = (e) => setCurrent(() => {
        console.log(e.type)
        return (e.type === 'click') && current !== 0 ? current -= 1 : current = SliderData.length - 1
    })

    const goRigth = (e) => setCurrent(() => {
        return (e.type === 'click') && current !== SliderData.length - 1 ? current += 1 : current = 0
    })
    document.addEventListener('onkeypress', goLeft)
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }
    return (

        <section className="slider">
            <IoArrowBackCircleOutline className="arrow left" onClick={(e) => goLeft(e)} onKeyPress={(e) => goLeft(e)} />
            <IoArrowForwardCircleOutline className="arrow rigth" onClick={(e) => goRigth(e)} onKeyPress={(e) => goRigth(e)} />
            {SliderData.map((item, index) => {
                return (
                    <div key={index} className={index === current ? 'image selected' : 'image'} >
                        {
                            index === current &&
                            <img
                                src={item.image}
                                alt="nature"
                                key={index}
                            />
                        }
                    </div>
                )
            })}

        </section >
    )
}

export default Slider;