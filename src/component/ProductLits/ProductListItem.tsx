import { stringify } from "querystring";
import React from "react";
import "./ProductList.css";

type Props = {
  name: string;
  description: string;
  price: number;
  totalCount: (price: number) => void;
};

const ProductListItem = ({ name, description, price, totalCount }: Props) => {
  return (
    <>
      <div className="products-item">
        <div>
          <h2>{name}</h2>
        </div>
        <div className="products-description">{description}</div>
        <div>EUR {price}</div>
        <button onClick={() => totalCount(price)}>buy</button>
      </div>
    </>
  );
};

export default ProductListItem;
