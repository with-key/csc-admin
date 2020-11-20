import React from "react";
import styled from "styled-components";
import { TCompany } from "../../MemberManagementCT";
import MemberListDetail from "./MemberListDetail";
import _ from "lodash";
import MemberDetail from "../memberDetail/MemberDetail";
import Btn from "../../../common/chips/Btn";

type MemberListProps = {
  companys: TCompany[] | null;
};

const MemberList: React.FC<MemberListProps> = ({ companys }) => {
  if (!companys) return null;
  return (
    <Container>
      <div className="list-wrapper">
        <div className="list-header">
          <div className="header__title">고객사 정보</div>
          {/* bard : 체크박스가 1개 이상 true 일때 렌더링됨 */}
          <div className="header__btn-set">
            <Btn kindOfBtn="normal">선택항목 삭제</Btn>
            <Btn kindOfBtn="accent">선택항목 편집</Btn>
          </div>
          {/* --- */}
        </div>
        {_.map(companys, (company, key) => (
          <MemberListDetail company={company} key={key} />
        ))}
      </div>
      <MemberDetail />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  .list-wrapper {
    background-color: #fff;
    padding: 24px;
    border-radius: 4px;
    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 691px;
      height: 32px;
      margin-bottom: 24px;
      .header__title {
        color: ${({ theme }) => theme.text.accentBlue};
        font-size: 16px;
        font-weight: 700;
      }
      .header__btn-set {
        display: flex;
      }
    }
  }
`;
export default MemberList;
