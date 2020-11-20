import React from "react";
import styled, { css } from "styled-components";
import { TSelectedTab } from "../../MemberManagementCT";

type TopmenusProps = {
  selectedTab: TSelectedTab;
  onSetSelectedTab: (tab: TSelectedTab) => void;
};

const TopMenus: React.FC<TopmenusProps> = ({
  selectedTab,
  onSetSelectedTab,
}) => {
  const moveMember = () => onSetSelectedTab("memberInfo");
  const moveCompany = () => onSetSelectedTab("companyInfo");
  const moveAcademy = () => onSetSelectedTab("academyInfo");
  const moveGroup = () => onSetSelectedTab("groupInfo");
  return (
    <Container>
      <Menu
        className="menus__menu"
        onClick={moveMember}
        isSelected={selectedTab === "memberInfo"}
      >
        회원정보
      </Menu>
      <Menu
        className="menus__menu"
        onClick={moveCompany}
        isSelected={selectedTab === "companyInfo"}
      >
        고객사정보
      </Menu>
      <Menu
        className="menus__menu"
        onClick={moveAcademy}
        isSelected={selectedTab === "academyInfo"}
      >
        강의정보
      </Menu>
      <Menu
        className="menus__menu"
        onClick={moveGroup}
        isSelected={selectedTab === "groupInfo"}
      >
        그룹정보
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  display: flex;
  height: 32px;
  margin: 0 40px;
  width: 1120px;
  /* padding: 0 40px; */
  position: fixed;
  left: 240;
  border-bottom: 1px solid ${({ theme }) => theme.etc.border};
  background-color: ${({ theme }) => theme.etc.bg};
  top: 80px;
  .menus__menu {
    text-align: center;
    font-size: 13px;
    width: 110px;
    padding: 0 24px 12px 24px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Menu = styled.div<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 3px solid ${({ theme }) => theme.primary.colorBlue};
    `}
`;

export default TopMenus;
