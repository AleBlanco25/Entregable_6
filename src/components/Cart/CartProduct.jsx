import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

const dispatch = useDispatch()

const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
    .then(res=> {
        console.log(res.data)
        dispatch(getUserCart())
    })
    .catch(err => console.log(err))
}

  return (
    <article className='cart-product'>
        <div className='cart__header-container'>
        <header className='cart__header'>
            <h4 className='cart__brand'>{product.brand}</h4>
            <h3 className='cart__title'>{product.title}</h3>
        </header>
            <button className='cart__btn' onClick={handleDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
        <div className='cart__quantity'>
            {product.productsInCart.quantity}
        </div>
        <div className='cart__price-container'>
            <p className='cart__span'>Unit Price:</p>
            <span className='cart__price'>$ {product.price}</span>
        </div>
    </article>
  )
}

export default CartProduct