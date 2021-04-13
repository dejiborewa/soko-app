import React from "react";
import styled from "styled-components";
import { Container, Label, Images, categories } from "./Category";

const Link = styled.a`
  text-decoration: none;
  color: var(--color-links);
  font-weight: bold;
`;

const Heading = styled(Label)`
  margin: 0;
  font-size: 0.7em;
`;

const Header = styled(Container)`
  justify-content: space-between;
  padding: 0.5em 0;
`;

const Button = styled.button`
  border: 1px solid var(--color-active);
  border-radius: 2.5px;
  width: 5em;
  padding: 5px 0;
  background: transparent;
  color: var(--color-btn);
  cursor: pointer;
`;

const Content = styled(Container)`
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  padding: 0.5em 0;
  font-size: 13px;
  margin-left: 0.5em;

  &.price {
    display: block;
    color: var(--color-text);
  }
`;

const Products = () => {
  return (
    <div style={{ marginTop: "1em" }}>
      <Header>
        <Heading>BEST SELLING PRODUCTS(10)</Heading>
        <Link>View All</Link>
      </Header>
      <>
        {categories.map((category, index) => {
          return (
            <Content>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: ".5em",
                  }}
                >
                  <Images
                    key={index}
                    style={{
                      backgroundImage: `linear-gradient(transparent, rgba(0,0,0,.3)), url(${category.image})`,
                    }}
                  ></Images>
                  <div>
                    <Span>{category.name}</Span>
                    <Span className="price">{category.price}</Span>
                  </div>
                </div>
              </div>
              <div>
                <Button>+ Add</Button>
              </div>
            </Content>
          );
        })}
      </>
    </div>
  );
};

export default Products;
