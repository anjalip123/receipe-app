import React, { useContext, useState,useEffect } from "react";
import Pagination from "./Pagination";
import CardDishe from "./CardDishe";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {

  const menu = useContext(AllMenuContext);
  let [filterDish, setFilterDishe] = useState([]);

  let [activeDish, setActiveDish] = useState("Beef");

  let [currentPage, setCurrentPage] = useState(1);
  let [numberofItems, setNumberofItems] = useState(4);
  const [showPopUp, SetShowPopUp] = useState(false);
  const [currentDishe, setCurrentDishe] = useState("");
  const[menuCategory , setMenuCategory] = useState([]);
  const [singleDish ,setSingleDish] = useState([])


  let indexOfLastDishe = currentPage * numberofItems;

  let indexOfFirstDishe = indexOfLastDishe - numberofItems;

  let dishesShown = filterDish.slice(indexOfFirstDishe, indexOfLastDishe);

  

      const fetchAllCategories = async () => {
          const API_URL = "https:/www.themealdb.com/api/json/v1/1/categories.php";
          let response = await fetch(API_URL);
          let categoryData = await response.json();
          setMenuCategory(categoryData.categories);
          }

          const fetchSingleDish = async () => {
            const API_URL = "https:/www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
            let response = await fetch(API_URL);
            let singleData = await response.json();
            setSingleDish(singleData.meals);
            }

  useEffect(()=> {
      fetchAllCategories();
      fetchSingleDish();
  }, [])









  function showPopUpHandler(dishName) {
    setCurrentDishe(dishName);
    SetShowPopUp(true);
  }

  function closePopUpHandler() {
    SetShowPopUp(false);
  }

  function filterDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);
    let filterDishesAre = menu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return <CardDishe menuItems={item} showPopUp={showPopUpHandler} />;
      });

    setFilterDishe(filterDishesAre);
  }


  let MaxDishes = 8;
  let singleDishItem = singleDish.map((item, index) => {
    if (index < MaxDishes) {
      return <CardDishe menuItems={item} showPopUp={showPopUpHandler} />;
    }
  });


  let menuCategories = menuCategory.map((item) => {
    return (
      <li
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          filterDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="filtred-dishes">
      {showPopUp && (
        <Popup
          closePopUp={closePopUpHandler}
          currentDishe={currentDishe}
         
        />
      )}

      <div className="container">
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            asperiores soluta delectus nisi amet! Asperiores animi quisquam quam
            commodi voluptate?
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{menuCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItem}
            {filterDish.length != 0 || singleDishItem.length != 0 ? (
              dishesShown
            ) : (
              <div className="alert">
                <h3>Sorry, No items found.</h3>
                <h4>Please try another dishes</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filterDishes={filterDish}
          numberOfItems={numberofItems}
          currentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
