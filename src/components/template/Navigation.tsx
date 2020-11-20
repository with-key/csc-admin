import React from "react";
import styled from "styled-components";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Conatainer>
      <div className="nav__log"></div>
      <div className="nav__menus">
        {/* bard : 임시 a 태그,  router로 변경 해야함 */}
        <a href="#" className="menus__menu">
          <div>아이콘</div>
          <div>대시보드</div>
        </a>
        <a href="#" className="menus__menu">
          <div>아이콘</div>
          <div>회원관리</div>
        </a>
        <a href="#" className="menus__menu">
          <div>아이콘</div>
          <div>문의관리</div>
        </a>
        <a href="#" className="menus__menu">
          <div>아이콘</div>
          <div>솔루션관리</div>
        </a>
      </div>
    </Conatainer>
  );
};

const Conatainer = styled.nav`
  width: 240px;
  background-color: ${({ theme }) => theme.primary.colorWhite};
  height: 200vh;
  border: 1px solid ${({ theme }) => theme.etc.border};
  position: fixed;
  .nav__log {
    height: 80px;
    width: 100%;
  }
  .nav__menus {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 240px;
    .menus__menu {
      padding: 24px 0 24px 36px;
      font-size: 14px;
      color: ${({ theme }) => theme.text.gray};
      display: flex;
      justify-content: flex-start;
      div:nth-child(1) {
        margin-right: 10px;
      }
      :hover {
        font-weight: 700;
      }
    }
  }
`;
// Router-dom 적용 후 active 했을 때 font color 변경되는 코드 추가 필요
export default Navigation;
