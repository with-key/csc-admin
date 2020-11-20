import React from "react";
import styled from "styled-components";
import Chip from "../../../common/chips/Chip";
import { TCompany } from "../../MemberManagementCT";
import _ from "lodash";

type MemberListDetailProps = {
  company: TCompany;
};

// export type TCompany = {
//   companyName: string;
//   // service: ["yeta" | "academy" | "consulting"];
//   service: string[];
//   isCertified: boolean;
//   version: "SAP" | "ONP" | "CLD";
//   memberCount: number;
// };

const MemberListDetail: React.FC<MemberListDetailProps> = ({ company }) => {
  return (
    <Cotainer className="list__container">
      {/* 1번 컬럼 */}
      <div className="col__checkBx">
        <input type="checkbox" className="" />
      </div>
      {/* 2번 컬럼 */}
      <div className="col__company-name">
        <div className="company-name__top-row">
          <div className="company-name__name">{company.companyName}</div>
          <Chip kindOfChip="YETA">{company.isCertified}</Chip>
        </div>
        <div className="company-name__biz-no">{company.bizNo}</div>
      </div>
      {/* 3번 컬럼 */}
      <div className="col__kindOfService">
        {_.map(company.services, (service, key) => (
          <Chip key={key}>{service}</Chip>
        ))}
      </div>
      {/* 4번 컬럼 */}
      <div className="col__yetaVer">{company.version}</div>
      <div className="col__memberCount">{company.memberCount}명</div>
    </Cotainer>
  );
};

const Cotainer = styled.div`
  background-color: #fff;
  width: 691px;
  height: 55px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.etc.border};
  /* 1번 컬럼 styles */
  .col__checkBx {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 2번 컬럼 styles */
  .col__company-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    .company-name__top-row {
      display: flex;
      align-items: center;
      .company-name__name {
        margin-right: 10px;
      }
    }
    .company-name__biz-no {
      font-size: 12px;
      margin-top: 2px;
      color: ${({ theme }) => theme.text.gray};
    }
  }

  /* 3번 컬럼 styles */
  .col__kindOfService {
    width: 197px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  /* 4번 컬럼 styles */
  .col__yetaVer {
    width: 124px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .col__memberCount {
    width: 80px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

export default MemberListDetail;
