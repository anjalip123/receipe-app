import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

function AddToCart(props) {

  const cartPackage = useContext(StateContext) ;
  console.log(cartPackage.cartItems);

   
  const cartItemsAre = cartPackage.cartItems.map((items)=>{
    return(
      <div>
       <img src={items.img}/>
       <h6>{items.title}</h6>
      </div>
   )
    
  })


  let allCardItems =   props.cardItems.map((item)=>{

        return(
           <div>
            <img src={item.img}/>
            <h6>{item.title}</h6>
           </div>
        )

    })
  return (
    <div className='add-to-cart-wrapper'>
        <div className="add-to-cart-item">
            <h6>Your Cart</h6>
            {cartItemsAre}
        </div>
      
    </div>
  )
}

export default AddToCart
