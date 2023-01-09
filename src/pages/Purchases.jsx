import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {

const [purchasesList, setPurchasesList] = useState()

useEffect(()=>{
    const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
    axios.get(URL, getConfig())
    .then(res => setPurchasesList(res.data.data.purchases))
    .catch(err => console.log(err))
},[])

console.log(purchasesList)

  return (
    <section className='purchases'>
        <h2 className='purchases__title'>My Purchases</h2>
        <div className='purchases-container'>
            {
                
                purchasesList?.map(purchase => (
                    <div className='purchases__card-list'>
                    <PurchaseCard 
                    key={purchase.id}
                    purchase={purchase}
                    />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Purchases