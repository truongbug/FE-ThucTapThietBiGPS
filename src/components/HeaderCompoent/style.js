import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: var(--primary-color);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 100%; /* Để chiếm toàn bộ chiều rộng của trang */
  padding: 10px 20px; /* Tăng khoảng padding để không gắn sát bên trái */
`;

export const WrapperLogo = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto; /* Đẩy logo về phía trái cùng */
`;

export const WrapperTextHeader = styled(Link)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  &:hover {
    font-size: 18px;
    color: #fff;
  }
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  max-width: 200px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: var(--primary-color);
  padding: 10px;
  margin-left: auto; /* Đẩy phần liên hệ về phía phải cùng */
  gap: 8px; /* Khoảng cách giữa biểu tượng và văn bản */
`;
