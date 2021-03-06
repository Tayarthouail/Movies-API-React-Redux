import React from 'react';
import './PopUpMovie.css'
import {GrClose} from 'react-icons/gr';
import { useSelector } from 'react-redux';

const PopUpMovie = ({showClass, toggleHandler}) => {

    const moviesList = useSelector((state)=> state.allMovies.movies);
    return (
    <div className={`pop-up-container ${showClass}`}>
       <nav className="pop-up">
           <GrClose className="pop-up-close" onClick={()=> toggleHandler()}/>
           <div className="product-details">
               <div className="img-container">
                   <img src="./Pictures/FreeGuy.jpg" alt="FreeGuy" />
               </div>
               <div className="product info">
                   <h1 className="title">Free Guy movie</h1>
                   <div className="quantity">
                       <h4>Quantity</h4>
                       <span>4</span>
                   </div>
                   <h5 className="prix">11$</h5>
                   <button className="btn-checkout">Continue to checkout</button> 
               </div>
           </div>
       </nav>}
    </div>
    )
}

export default PopUpMovie;
