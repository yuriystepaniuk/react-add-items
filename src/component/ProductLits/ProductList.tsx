import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import productsArray from "./productsArray";
import "./ProductList.css";
import { Grid } from "@mui/material";

type Props = {};

type ProductProps = {
  name: string;
  description: string;
  price: number;
  id: number;
};

const ProductList = (props: Props) => {
  const [allPrice, setAllPrice] = useState<number>(0);

  const totalCount = (price: number) =>
    setAllPrice((prevState: number) => prevState + price);

  return (
    <>
      <div className="product-list-item">
        {productsArray.map(({ name, description, price, id }: ProductProps) => (
          <Grid key={id}>
            <ProductListItem
              totalCount={totalCount}
              name={name}
              description={description}
              price={price}
            />
          </Grid>
        ))}
      </div>
      <div>total: {allPrice}</div>
    </>
  );
};

export default ProductList;
