import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Header from "./Header";
import MemberManagementCT from "../memberManagemenet/MemberManagementCT";

type TemplateProps = {};

const Template: React.FC<TemplateProps> = () => {
  return (
    <Container>
      <Navigation />
      <main className="main">
        <Header />
        <MemberManagementCT />
      </main>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  width: 1440px;
  /* height: 200vh; */
  .main {
    height: 100%;
    background-color: ${({ theme }) => theme.etc.bg};
    padding-left: 240px;
  }
`;

export default Template;
