import React from "react";
import styled from "styled-components";
import MemberDetailInfo from "./MemberDetailInfo";
import MemberDetailLog from "./MemberDetailLog";

type MemberDetailProps = {};

const MemberDetail: React.FC<MemberDetailProps> = () => {
  return (
    <Container>
      <MemberDetailInfo />
      <MemberDetailLog />
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
  width: 357px;
  height: 794px;
  border-radius: 4px;
  background-color: #fff;
  position: sticky;
  top: 112px;
`;

export default MemberDetail;
