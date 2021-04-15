import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Products from "./components/Products";
import arrow from "./components/assets/header/arrow.png";

const listItems = [
  "Electronics(12)",
  "Face Mask(3)",
  "Fresh Food(8)",
  "Grocery(6)",
  "Home(24)",
  "Kids(9)",
];

const Main = styled.div`
  @media (min-width: 768px) {
    width: 40%;
    margin: 3em auto 0;
  }
`;

const AllContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
const AllCategory = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 30%;
    display: block;
    margin-top: 3em;
    padding: 1em;
  }
`;
const ListAll = styled.div``;
const Bag = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 30%;
    margin-top: 3em;
    padding: 3em;
  }
`;

const App = () => {
  const deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  const [width, setWidth] = useState(deviceWidth);
  useEffect(() => {
    const checkSize = () => {
      setWidth(document.documentElement.clientWidth || window.innerWidth);
    };
    window.onresize = checkSize;
  });

  return (
    <>
      <Header />
      <AllContent>
        <AllCategory>
          <ListAll>
            {listItems.map((items, index) => {
              return (
                <ul key={index} style={{ listStyleType: "none" }}>
                  <li>{items}</li>
                </ul>
              );
            })}
          </ListAll>
          <h3>
            View all categories
            <span>
              <img src={arrow} alt="arrow-right" />
            </span>
          </h3>
        </AllCategory>
        <Main>
          <SearchBar />
          {width >= 768 ? <></> : <Category />}
          <Products />
        </Main>
        <Bag>
          <h3>Bag</h3>
          <div>
            <h4>It's empty here</h4>
            <p>Start shopping to add items to your bag</p>
          </div>
        </Bag>
      </AllContent>
    </>
  );
};

export default App;
