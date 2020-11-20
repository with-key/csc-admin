import React from "react";
import styled from "styled-components";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <div className="header__title">회원관리</div>
      <div className="header__menus">
        <div className="menus__my-info">😓</div>
        <div className="menus__my-alarm">😓</div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  width: 1200px;
  height: 80px;
  padding: 0 40px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.etc.bg};
  .header__title {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.black};
  }
  .header__menus {
    display: flex;
    gap: 24px;
  }
`;

export default Header;
