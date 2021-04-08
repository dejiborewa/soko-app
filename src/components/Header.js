import React from "react";
import styled from "styled-components";
import brand_image from "./assets/bruno.jpg";

const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0 0.5em;
`;
const Info = styled.div`
  padding: 0 0.7em;
`;

const Heading = styled.h3`
  margin: 0 0 2px 0;
`;
const Paragraph = styled.p`
  margin: 0;
`;

const Header = () => {
  return (
    <Head>
      <Avatar src={brand_image} alt="brand_image" />
      <Info>
        <Heading>Target</Heading>
        <Paragraph>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</Paragraph>
      </Info>
    </Head>
  );
};

export default Header;