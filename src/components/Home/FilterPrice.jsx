import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        
        if(inputFrom && inputTo){
            setInputPrice({
                from: inputFrom,
                to: inputTo 
            }) 
        } else if (!inputFrom && inputTo) {
                setInputPrice ({
                    from: 0,
                    to: inputTo
                })
        } else if (inputFrom && !inputTo) {
                setInputPrice({
                    from: inputFrom,
                    to: Infinity
                })
        } else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        
            }
        }

  return (
    <section className='filter-price__container'>
        <div className='filter__price'>
            <h2 className='filter__title'>Price</h2>
            <div className='line'></div>
            <form className='filter__form' onSubmit={handleSubmit}>
                <div className='filter__from'>
                    <label className='filter__label' htmlFor="from">From</label>
                    <input className='filter__input' type="number" id='from' />
                </div>
                <div className='filter__to'>
                    <label className='filter__label' htmlFor="from">To</label>
                    <input className='filter__input' type="number" id='to' />
                </div>
                <button className='filter__btn'>Filter Price</button>
            </form>
        </div>
    </section>
  )
}

export default FilterPrice



// const handleSubmit = e => {
//     e.preventDefault()
//     const inputFrom = +e.target.from.value
//     const inputTo = +e.target.to.value
//     if(inputFrom && inputTo){
//       setInputPrice({
//         from: inputFrom,
//         to: inputTo
//       })
//     } else if (!inputFrom && inputTo) {
//       setInputPrice({
//         from: 0,
//         to: inputTo
//       })
//     } else if (inputFrom && !inputTo) {
//       setInputPrice({
//         from: inputFrom,
//         to: Infinity
//       })
//     }
//   }
