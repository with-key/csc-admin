import React from "react";
import { TCompany, TSelectedTab } from "./MemberManagementCT";
import styled from "styled-components";
import TopMenus from "./memberInfo/topMenus/TopMenus";
import MemberList from "./memberInfo/memberList/MemberList";
import SerachBar from "./memberInfo/searchBar/SerachBar";

type MemberManagementPTProps = {
  selectedTab: TSelectedTab;
  onSetSelectedTab: (tab: TSelectedTab) => void;
  companys: TCompany[] | null;
};

const MemberManagementPT: React.FC<MemberManagementPTProps> = ({
  selectedTab,
  onSetSelectedTab,
  companys,
}) => {
  const render = (tab: TSelectedTab) => {
    switch (tab) {
      case "memberInfo":
        return <MemberList companys={companys} />;
      case "companyInfo":
        return <div>companyInfo</div>;
      case "academyInfo":
        return <div>academyInfo</div>;
      case "groupInfo":
        return <div>groupInfo</div>;
      default:
        break;
    }
  };

  return (
    <Container>
      <TopMenus selectedTab={selectedTab} onSetSelectedTab={onSetSelectedTab} />
      <SerachBar />
      {selectedTab ? render(selectedTab) : <div>Loading...</div>}
    </Container>
  );
};

const Container = styled.section`
  padding-top: 80px;
  width: 1200px;
`;

export default MemberManagementPT;
