import React from "react";
import styled from "styled-components";

const SerachBar = () => {
  return (
    <Container>
      <input
        type="text"
        className="search-bar__input-box"
        placeholder="검색어를 입력하세요"
      />
      <div className="search-bar__filter"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 1120px;
  height: 36px;
  margin: 56px auto 32px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search-bar__input-box {
    height: 32px;
    border: 1px solid ${({ theme }) => theme.etc.border};
    width: 250px;
    border-radius: 4px;
    outline: none;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.etc.bg};
    font-size: 13px;
  }
`;

export default SerachBar;
