import React from "react";
import styled, { css } from "styled-components";

type BtnProps = {
  kindOfBtn: "normal" | "accent";
};

const Btn: React.FC<BtnProps> = ({ kindOfBtn, children }) => {
  return <Container kindOfBtn={kindOfBtn}>{children}</Container>;
};

const Container = styled.div<{ kindOfBtn: "normal" | "accent" }>`
  cursor: pointer;
  ${(props) =>
    props.kindOfBtn === "normal" && //normal은 흰색 버튼
    css`
      display: flex;
      font-size: 12px;
      justify-content: space-evenly;
      align-items: center;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-left: 10px;
    `}
  ${(props) =>
    props.kindOfBtn === "accent" && // accent는 파란색 버튼
    css`
      display: flex;
      font-size: 12px;
      justify-content: space-evenly;
      align-items: center;
      padding: 8px 12px;
      background-color: ${({ theme }) => theme.primary.colorBlue};
      color: #fff;
      border-radius: 4px;
      margin-left: 10px;
    `}
`;

export default Btn;
