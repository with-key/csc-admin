import React from "react";
import styled from "styled-components";

type MemberDetailLogProps = {};

const MemberDetailLog: React.FC<MemberDetailLogProps> = () => {
  return (
    <Container>
      <div className="log__tab">
        <div className="tab__activity">문의내역</div>
        <div className="tab__member-info">소속인원</div>
      </div>
      <div className="log__legend">
        <div className="legend__await legend__legend">
          <div className="legend__dot await"></div>
          <div className="legend__text">접수대기</div>
        </div>
        <div className="legend__ing legend__legend">
          <div className="legend__dot ing"></div>
          <div className="legend__text">답변작성중</div>
        </div>
        <div className="legend__complete legend__legend">
          <div className="legend__dot complete"></div>
          <div className="legend__text">답변완료</div>
        </div>
        <div className="legend__solved legend__legend">
          <div className="legend__dot solved"></div>
          <div className="legend__text">해결됨</div>
        </div>
      </div>
      <div className="log__log">
        <div className="log__row">
          <div className="row__info">
            <span className="info__id"></span>
            <span className="info__channel"></span>
            span.
          </div>
          <div className="row__title"></div>
        </div>
        <div className="log__row"></div>
        <div className="log__row"></div>
        <div className="log__row"></div>
        <div className="log__row"></div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  .log__tab {
    display: flex;
    margin-bottom: 32px;
    .tab__activity,
    .tab__member-info {
      width: 72px;
      height: 32px;
      font-size: 13px;
      padding: 0 12px 12px 12px;
      :hover {
        // bard : 클릭 시 아래 보더 바텀 활성화되도록 수정 후 hover 삭제해야함
        border-bottom: 3px solid ${({ theme }) => theme.primary.colorBlue};
      }
    }
  }
  .log__legend {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
    width: 309px;
    margin: 0 auto;
    .legend__legend {
      display: flex;
      align-items: center;
      gap: 5px;
      .legend__dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }
      .await {
        background-color: #0082ba;
      }
      .ing {
        background-color: #8d65b3;
      }
      .complete {
        background-color: #00bfbf;
      }
      .solved {
        background-color: #f9c271;
      }
      .legend__text {
        font-size: 12px;
      }
    }
  }
`;

export default MemberDetailLog;
