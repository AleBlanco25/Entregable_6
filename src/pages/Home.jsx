import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import ProductsOrder from '../components/Home/ProductsOrder'
import './styles/home.css'

const Home = () => {

const [productsFilter, setProductsFilter] = useState()
const [inputValue, setInputValue] = useState("")
const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity
})

const products = useSelector(state => state.products)

useEffect(() => {
    if(products){
        setProductsFilter(products)
    }
},[products])

const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim()
    console.log(inputValue)
    const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    setProductsFilter(filter)
    setInputValue(e.target.value)
}


const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to

  return (
    <div className='home-content'>

        <aside className='home-aside'>
            <FilterPrice setInputPrice={setInputPrice}/>
            <FilterCategory setInputValue={setInputValue}/>
        </aside>

        <div className='main-container'>

            <div className='home__input-container'>
                <input className='home__input' value={inputValue} onChange={handleChange} placeholder='What are you looking for?' type="text" />
                <button className='home__btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <ProductsOrder />

            <div className='products-container'>
                {
                    productsFilter?.filter(filterCallBack).length !== 0 ?
                    productsFilter?.filter(filterCallBack).map(product => (
                        <CardProduct 
                            key={product.id}
                            product={product}
                        />
                    ))
                    :
                    <h3>This product doesn't exist</h3>
                }
            </div>
        </div>

    </div>
  )
}

export default Home