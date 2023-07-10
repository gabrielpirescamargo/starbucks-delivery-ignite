import React from "react";
import { CartState } from "../../context/Context";
import "./Products.css";
import cartIcon from "../../img/shop.svg"

const Tile = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const priceInReal = product.price?.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const productTitle = product.title;
  const productSubTitle = product.subtitle;
  const productImage = product.image;
  const productAmount = product.amount;
  const productId = product.id;
  const productTags = product.tags;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="productTile">
      <img className="productImage" src={productImage} width={120} alt="" />
      <div className="productInfo">
     <div className="tags">
     {productTags?.map((tag) => {
          return <div className="productTag">{tag}</div>;
        })}
     </div>
        <span className="productTitle">{productTitle}</span>
        <span className="productSubtitle">{productSubTitle}</span>
      </div>
      <span className="productAmount">Em estoque: {productAmount}</span>
      <div className="buyInfos">
      <span className="productPrice"> {priceInReal}</span>
  
        {cart.some((p) => p.id === productId) ? (
          <button
            key={product.id}
            className={"productButtonRemove"}
            onClick={() => {
              handleRemoveFromCart();
            }}
          >
            <img style={{fill: 'red'}} width={20}  src={cartIcon}></img>
          </button>
        ) : (
          <button
            key={product.id}
            className="productButton"
            disabled={!productAmount}
            onClick={() => {
              if (productAmount) {
                handleAddToCart();
              }
            }}
          >
            {!productAmount ? <img width={20} src={cartIcon}></img> : <img width={20}  src={cartIcon}></img>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Tile;
