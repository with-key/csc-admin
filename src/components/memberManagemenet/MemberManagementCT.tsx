import React, { useEffect } from "react";
import MemberManagementPT from "./MemberManagementPT";
import { useState } from "react";

export type TCompany = {
  companyName: string;
  // service: ["yeta" | "academy" | "consulting"];
  services: string[];
  isCertified: boolean;
  version: "SAP" | "ONP" | "CLD";
  memberCount: number;
  bizNo: string;
};

export type TSelectedTab =
  | "memberInfo"
  | "companyInfo"
  | "academyInfo"
  | "groupInfo";

const MemberManagementCT = () => {
  const [selectedTab, setSelectedTab] = useState<TSelectedTab>("memberInfo"); // 멤버인포, 콤파니 인포, 아카데미 인포, 그룹 인포
  const [companys, setCompanys] = useState<TCompany[] | null>(null);
  const onSetSelectedTab = (tab: TSelectedTab) => setSelectedTab(tab);

  useEffect(() => {
    setTimeout(() => {
      setCompanys([
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
        {
          companyName: "SKT",
          services: ["YETA", "아카데미", "컨설팅"],
          isCertified: false,
          version: "CLD",
          memberCount: 25,
          bizNo: "1234512345",
        },
      ]);
    }, 500);
  }, []);

  return (
    <MemberManagementPT
      companys={companys}
      selectedTab={selectedTab}
      onSetSelectedTab={onSetSelectedTab}
    />
  );
};

export default MemberManagementCT;
