import React from "react";
import styled from "styled-components";

const MemberDetailInfo = () => {
  return (
    <Container>
      {/* 헤더 */}
      <div className="info-header">
        <div className="header-col">
          <div className="header__top-row">
            <div className="top-row__name">SK텔레콤</div>
            <div className="top-row__certified">인증</div>
          </div>
          <div className="header__biz-no">2098142305</div>
        </div>
        <div className="header-col">
          <div className="header-more">아이콘</div>
        </div>
      </div>

      {/* 기초정보 */}
      <div className="info__basic">
        <div className="basic__title">기초정보</div>
        <div className="basic__biz-no basic__basic">
          <div className="biz-no__label label">사업자등록번호</div>
          <div className="biz-no__value value">2098142305</div>
        </div>
        <div className="basic__certified basic__basic">
          <div className="certified__label label">인증여부</div>
          <div className="certified__value value">인증</div>
        </div>
        <div className="basic__service basic__basic">
          <div className="service__label label">서비스</div>
          {/* bard: chip component로 수정해야함 */}
          <div className="service__kind value">
            <div className="service__value">YETA</div>
            <div className="service__value">아카데미</div>
            <div className="service__value">자문</div>
          </div>
          {/* --- */}
        </div>
        <div className="basic__version basic__basic">
          <div className="version__label label">YETA버전</div>
          <div className="version__value value">SAP</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__top-row {
      display: flex;
      align-items: center;
      .top-row__name {
        margin-right: 10px;
      }
    }
    .header__biz-no {
      font-size: 12px;
      margin-top: 2px;
      color: ${({ theme }) => theme.text.gray};
    }
  }
  .info__basic {
    margin-top: 32px;
    width: 309px;
    height: 148px;
    /* border: 1px solid red; */
    .basic__title {
      font-size: 13px;
      margin-bottom: 12px;
      font-weight: 700;
    }
    .basic__basic {
      display: flex;
      font-size: 13px;
      margin-bottom: 12px;
      .service__kind {
        display: flex;
      }
      .label {
        width: 100px;
        color: ${({ theme }) => theme.text.gray};
      }
      .value {
        width: 150px;
      }
      .service__kind {
        display: flex;
        gap: 10px;
      }
    }
  }
`;
export default MemberDetailInfo;
