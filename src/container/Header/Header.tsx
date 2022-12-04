import React from "react";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <h1>Our shop page:</h1>
      <button>USD</button>
      <button>EUR</button>
      <button>UAH</button>
      <button>PLN</button>
    </div>
  );
};

export default Header;
