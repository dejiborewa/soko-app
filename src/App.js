import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Products from "./components/Products";


const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Category />
      <Products />
    </>
  );
};

export default App;
