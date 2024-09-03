import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

function Checkout() {

  const cartPackage = useContext(StateContext);
  const cartItemsAre = cartPackage.cartItems.map((items)=>{
    return(
      <div>
       <img src={items.img}/>
       <h6>{items.title}</h6>
      </div>
   )
    
  })
  return (
    <section className='checkout'>
      <div className="checkout-items gap-30">
      {cartItemsAre && cartItemsAre.length > 0 ? cartItemsAre : <h1>No Items Added in the cart</h1>}
      </div>
    </section>
  )
}

export default Checkout
