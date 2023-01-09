import React, { useState } from 'react'
import './styles/sliderImg.css'



const SliderImg = ({listImgs}) => {

const [indexImg, setIndexImg] = useState(1)
   
const styleContainer = {
    transform: `translateX(calc(100% * -${indexImg} / 3))`
}

const handleBack = () => {
    if (indexImg - 1 < 0) {
        setIndexImg(2)
    } else {
        setIndexImg(indexImg -1)
    }
}


const handleNext = () => {
    if (indexImg +1 > 2) {
        setIndexImg(0)
    } else {
        setIndexImg(indexImg +1)
    }
}

  return (
    <div className='slider'>
        <button onClick={handleBack} className='slider__back'>&#60;</button>
        <div style={styleContainer} className='slider__container'>
            {
                listImgs?.map(url =>(
                    <div className='slider__img-container' key={url}>
                        <img className='slider__img' src={url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className='slider__next'>&gt;</button>
        <ul className='slider__ul'>
        {
            listImgs?.map((url, index) => (
            <li className={`slider__img-container ${index === indexImg && 'slider__border'}`} onClick={() => setIndexImg(index)} key={url}>
                <img className='slider__img' src={url} alt="" />
            </li>
            ))
        }
        </ul>
    </div>
   
  )
}

export default SliderImg



// import React from 'react'

// const SliderImg = ({ listImgs }) => {

//   console.log(listImgs)

//   return (
//     <div className="slider">
//       <button className='slider__back'>&#60;</button>
//       <div className='slider__container'>
//         {
//           listImgs?.map(url => (
//             <div className='slider__img-container' key={url}>
//               <img className='slider__img' src={url} alt="" />
//             </div>
//           ))
//         }
//       </div>
//       <button className='slider__next'>&#62;</button>
//     </div>
//   )
// }

// export default SliderImg
