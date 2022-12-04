import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {};
function App(props: Props) {
  return (
    <>
      <CssBaseline />
      <div className="global">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
