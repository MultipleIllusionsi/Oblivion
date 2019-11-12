import React from "react";

import "./cart-item.scss";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}) => (
  <li className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </li>
);

export default React.memo(CartItem);
