import React, { useState } from 'react'

function Pagination(props) {

    let numberOfPages = [];

    let [activePage , setActivePage] = useState(1);

    for (let i = 1;i <= Math.ceil(props.filterDishes.length/props.numberOfItems); i++){
        numberOfPages.push(i);

    }

    function pageItemsHandler(event){


        setActivePage(event.target.id);

        props.currentPage(event.target.id);

        

    }

    let pages = numberOfPages.map((pageNumber)=>{
        return (
            <li className= {pageNumber == activePage ? "active" : ""} id = {pageNumber} onClick={pageItemsHandler}>
            {pageNumber}
         </li>
       )    
    })

    console.log(pages);

  return (
    <section>
         <ul className='pagination flex'>
          {pages}
    </ul>
    </section>
  )
}

export default Pagination
