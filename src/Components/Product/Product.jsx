import React from "react";
import "./product.css";

const Product = (props) => {
  console.log(props);
  const { category, id, img, price, name, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img ? img : "not Available"} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p> price $:{price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(id)} className="btn-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
