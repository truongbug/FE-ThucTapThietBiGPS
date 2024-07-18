import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  height: 44px;
  &:hover {
    color: #fff;
    background: #f7e9b4;
    span {
      color: #013c9b;
    }
  }
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: #9255fd;
    span {
      color: #fff;
    }
  }
  width: 240px;
  margin: 10px auto;
  color: #9255fd;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid #9255fd;
  height: 38px;
  border-radius: 4px;
`;

export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
  margin: 0 auto;
  max-width: 1270px; /* Thêm chiều rộng tối đa để không bị rộng quá khung container */
`;

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
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

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #9255fd;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  z-index: 1000;

  &:hover {
    background-color: #7a3cc4;
  }
`;
