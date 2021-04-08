import React from "react";
import styled from "styled-components";
import image1 from "./assets/category/1.jpg";
import image2 from "./assets/category/2.jpg";
import image3 from "./assets/category/3.jpg";
import image4 from "./assets/category/4.jpg";
import image5 from "./assets/category/5.jpg";
import image6 from "./assets/category/6.jpg";

const CategoryWrapper = styled.div`
  width: 100%;
`;
const Label = styled.h4`
  font-weight: 300;
`;

const Slider = styled.div`
  display: flex;
  overflow: scroll;
`;

const Images = styled.img`
  width: 7em;
  height: 7.4em;
  padding: 0 0.2em;
  border-radius: 5px;
`;

const Heading = styled.div`
  display: flex;
  overflow: scroll;
`;

const Head = styled.h4`
  min-width: 7em;
  padding: 0 0.2em;
`;

const categories = [
  "Beauty & Health",
  "Women's Shoes",
  "Men's Shoes",
  "Women's Accessories",
  "Men's Accessories",
  "Bags",
];

const paths = [image1, image2, image3, image4, image5, image6];

const ImageWrapper = () => {
  return (
    <CategoryWrapper>
      <Label>TOP CATEGORY</Label>
      <Slider>
        {paths.map((path) => {
          return (
            <div>
              <Images src={path} />
            </div>
          );
        })}
      </Slider>
    </CategoryWrapper>
  );
};

const HeadingWrapper = () => {
  return (
    <Heading>
      {categories.map((category) => {
        return <Head>{category}</Head>;
      })}
    </Heading>
  );
};

export default function Category() {
  return (
    <>
      <ImageWrapper />
      <HeadingWrapper />
    </>
  );
}
