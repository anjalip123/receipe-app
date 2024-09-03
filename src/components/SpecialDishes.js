import React, { useContext, useState } from "react";
import CardDishe from "./CardDishe";
import Popup from "./Popup";
import {AllMenuContext} from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes() {

  const menu = useContext(AllMenuContext);

  const [showPopUp, SetShowPopUp] = useState(false);
  const [currentDishe , setCurrentDishe] = useState("");
  const [cardItems,setCardItem] = useState([])
  const [isVisible,setIsVisible] = useState(false);



  function showPopUpHandler (dishName){
    setCurrentDishe(dishName);
    SetShowPopUp(true);
  }

  function closePopUpHandler(){
    SetShowPopUp(false);
  }

  let MaxDishes = 8;

  let menuItems = menu.map((items, index) => {
    if (index < MaxDishes) {
      return (
      <CardDishe menuItems = {items}
           showPopUp = {showPopUpHandler}/>
      );
    }
  });

  function addToCartHandler(cardImage,cardTitle){
    setIsVisible(true);
    setCardItem ([
      ...cardItems,
      {
        img:cardImage,
        title : cardTitle
      }
    ])

  }


  return (
    <section className="special-dishes">
      {showPopUp && <Popup  closePopUp = {closePopUpHandler}
           currentDishe = {currentDishe}
           addToCartHandler = {addToCartHandler}
           />}
      <div className="container">
      <AddToCart 
      cardItems = {cardItems}
      isVisible = {isVisible}/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            molestiae dignissimos hic quo, quasi nobis nemo sit rerum, beatae
            facilis delectus minima commodi, illo autem!
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap flex-center gap-30">{menuItems}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
