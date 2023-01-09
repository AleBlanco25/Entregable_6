import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'
import './styles/productsOrder.css'

const ProductsOrder = () => {


    const dispatch = useDispatch()

    const handleAscending = () =>{
        dispatch(ascendingOrderProducts())
    }

    const handleDescending = () => {
        dispatch(descendingOrderProducts())
    }

  return (
    <div className='order-btns'>
        <button className='btn' onClick={handleAscending}>Ascending Order</button>
        <button className='btn' onClick={handleDescending}>Descending Order</button>
    </div>
  )
}

export default ProductsOrder