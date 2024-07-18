// style.js

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative; // Thay đổi từ fixed thành relative
  width: 100%;
`;

export const FooterContent = styled.div`
  width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin: 5px 0;
  }
`;
