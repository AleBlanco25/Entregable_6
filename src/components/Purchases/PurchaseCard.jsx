import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {

    console.log(purchase)

    const datePurchase = new Date(purchase.createdAt)


  return (
    <article className='purchases__card'>
        <header className='purchases__card-container'>
            <h3 className='purchases__date'>{datePurchase.toLocaleDateString()}</h3>
            <section className='purchases__list-container'>
                <ul className='purchases__list'>
                    {
                        purchase.cart.products.map(prod => (
                        <li className='purchase__card-list' key={prod.id}>
                            <h4 className='purchases-card__title'>{prod.title}</h4>
                            <span className='purchases__quantity'>{prod.productsInCart.quantity}</span>
                            <span className='purchases__price'>{prod.price}</span>
                        </li> 
                        ))
                    }
                </ul>
            </section>
        </header>
    </article>
  )
}

export default PurchaseCard


// const purchases = res.data.data.purchases.sort((a, b) => {
//     const prevDate = new Date(a.createdAt)
//     const nextDate = new Date(b.createdAt)
//     return nextDate - prevDate;
// })
// const options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// }

// const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)
