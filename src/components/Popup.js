import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";
import { DispatchContext } from "../context/AppProvider";

function Popup(props) {

  const menu = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);

  let dishDetails = menu.filter((item) => {
      return item.strMeal === props.currentDishe;
    }).map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          <button onClick={() => dispatch({type:'add_to_cart',payload: {
            title: item.strMeal,
            img :  item.strMealThumb
          }})}>OrderNow</button>
        <h5 className="popup-close" onClick={props.closePopUp}>
          Close
        </h5>
        </div>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}
      </div>
    </div>
  );
}

export default Popup;
