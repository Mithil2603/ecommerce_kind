import React from 'react'
import './items.css'

export default function Items(props) {
  return (
    <>
        <div className="item">
            <img src={props.img} alt="" />
            <div className="productName">
                {props.title}
            </div>
            <div className="brandName">
                {props.brand}
            </div>
            <div className="productPrice">
                {props.price}
            </div>
            <a href="#">
                <input type="button" value="Show Details" />
            </a>
        </div>
    </>
  )
}
