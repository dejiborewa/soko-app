import React from "react";
import styled from "styled-components";
import { Container } from "./Category";
import { Link } from "./Products";
import Bag from "./assets/header/bag.png";
import Account from "./assets/header/account.png";

const HeadLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
const HeaderLinks = styled(Link)`
  color: var(--color-text);
`;
const HeadRight = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Head = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 10em;
    margin-top: 0.5em;
  }
`;

const Header = () => {
  return (
    <Head>
      <HeadLeft>
        <Avatar
          src="https://soko.fra1.digitaloceanspaces.com/TestImg/bd53537b-ef7c-49af-b2d3-b458cefa8c77.jpg"
          alt="brand"
        />
        <Info>
          <Heading>Target</Heading>
          <Paragraph>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</Paragraph>
        </Info>
      </HeadLeft>
      <HeadRight>
        <Container>
          <Container bag>
            <img
              src={Bag}
              alt="bag"
              style={{ width: "20px", height: "20px", marginRight: "1em" }}
            />
            <HeaderLinks>Bag</HeaderLinks>
          </Container>
          <Container account>
            <img
              src={Account}
              alt="account"
              style={{ width: "20px", height: "20px", marginRight: "1em" }}
            />
            <HeaderLinks>Account</HeaderLinks>
          </Container>
        </Container>
      </HeadRight>
    </Head>
  );
};

export default Header;
