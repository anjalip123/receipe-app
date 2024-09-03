import React from 'react'

function CardDishe(props) {

  return (
          <li>
             <a href="javascript:;" onClick={()=> props.showPopUp(props.menuItems.strMeal)}>
          <img src={props.menuItems.strMealThumb} className="br-10" />
          <h5>{props.menuItems.strMeal}</h5>
          </a>
        </li>
  )
}

export default CardDishe
