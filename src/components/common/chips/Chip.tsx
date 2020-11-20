import React from "react";
import styled, { css } from "styled-components";

type ChipProps = {
  // bgColor:
  //   | "colorBlue"
  //   | "colorCyan"
  //   | "colorGary"
  //   | "colorPurple"
  //   | "colorRed"
  //   | "colorYellow"
  //   | "colorWhite";
  kindOfChip?: "YETA" | "컨설팅" | "아카데미"; //칩 종류
  isCertified?: boolean; //인증, 미인증
};

const Chip: React.FC<ChipProps> = ({ kindOfChip, isCertified, children }) => {
  console.log(children);
  return <Container>{children === true && "YETA"}</Container>;
};

const Container = styled.span<ChipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  ${(props) =>
    props.children
      ? css`
          font-size: 11px;
          padding: 6px 8px;
          background-color: ${({ theme }) => theme.chip.chipBgBlue};
          color: ${({ theme }) => theme.text.blue};
        `
      : css`
          font-size: 11px;
          background-color: ${({ theme }) => theme.chip.chipBgRed};
          color: ${({ theme }) => theme.text.blue};
        `};
  ${(props) =>
    props.children === "YETA" &&
    css`
      font-size: 12px;
      padding: 6px 8px;
      background-color: ${({ theme }) => theme.chip.chipBgBlue};
      color: ${({ theme }) => theme.text.accentBlue};
      fw
    `};
`;

export default Chip;
