import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import productsSlice from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'
import './styles/productDescription.css'

const ProductDescription = ({product}) => {

const cart = useSelector(state => state.cart)

const [counter, setCounter] = useState(1)


const handleMinus = () =>{
    if(counter - 1 > 0) 
    setCounter(counter-1)
}

const handlePlus = () => {
setCounter(counter + 1)
}

const dispatch = useDispatch()

const handleCart = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    const data = {
        id: product.id,
        quantity: counter 
    }
    axios.post(URL, data, getConfig())
    .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
    })
    .catch(err => {
        if(err.response.status === 400) {
            const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
            prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
            const data = {
                id: product.id,
                newQuantity: prevQuantity + counter 
            }
            axios.patch(URLPatch, data , getConfig())
            .then(res => {console.log(res.data)
                dispatch(getUserCart())
            }
                )
            .catch(err => console.log(err))
        }
    })
}


  return (
    <article className='description-container'>
        <h2 className='description__title'>{product?.title}</h2>
        <p className='description__text'>{product?.description}</p>
        <div className='container'>
        <section className='price-container'>
            <span className='price__span'>Price</span>
            <h3 className='price__title'>$ {product?.price}</h3>
        </section>
        <section className='quantity-containter'>
            <h3 className='quantity__title'>Quantity</h3>
            <div className='counter-container'>
                <button className='btn__quantity' onClick={handleMinus}>-</button>
                <div className='counter'>{counter}</div>
                <button className='btn__quantity' onClick={handlePlus}>+</button>
            </div>
        </section>
        </div>
        <button className='btn__cart' onClick={handleCart}>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductDescription

