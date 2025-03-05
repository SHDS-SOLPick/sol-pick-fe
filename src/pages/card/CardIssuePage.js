import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/common/header/MainHeader";
import noti from "../../assets/noti.svg";
import notiActive from "../../assets/notiActive.svg";
import shop from "../../assets/shop.svg";
import shopActive from "../../assets/shopActive.svg";
import Menu from "../../components/common/menu/Menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #ffffff;
`;

const CardContainer = styled.div`
  margin-top: 24px;
  width: 300px;
  height: 180px;
  border-radius: 12px;
  background: linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4, #ffffff);
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

const CardImage = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const CardChip = styled.div`
//   width: 35px;
//   height: 25px;
//   background-color: #f0f0f0;
//   border-radius: 3px;
//   margin-top: 15px;
// `;

// const CardNumber = styled.div`
//   color: #000;
//   font-size: 15px;
//   letter-spacing: 2px;
//   margin-top: 30px;
// `;

// const CardDetails = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
// `;

// const CardBrand = styled.div`
//   color: #000;
//   font-weight: bold;
//   align-self: flex-end;
// `;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 40px;
`;

const IssueButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5b4bc4;
  }
`;

// 메인 컴포넌트
const CardIssuePage = () => {
  const navigateToShop = () => {};

  const navigateToNoti = () => {};

  const navigate = useNavigate();

  const handleCardIssue = () => {
    navigate("/card/apply");
  };

  return (
    <Container>
      <MainHeader
        leftIcon={shop}
        leftIconActive={shopActive}
        rightIcon={noti}
        rightIconActive={notiActive}
        onLeftClick={navigateToShop}
        onRightClick={navigateToNoti}
      />
      <CardContainer>
        <CardImage>
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </CardImage>
        {/* <CardChip />
        <CardNumber>6277 7854 2527 4778</CardNumber>
        <CardDetails>
          <div>
            <div
              style={{ fontSize: "10px", color: "#333", marginBottom: "3px" }}
            >
              JOHN C.
            </div>
            <div style={{ fontSize: "10px", color: "#333" }}>CHOI</div>
          </div>
          <CardBrand>VISA</CardBrand>
        </CardDetails> */}
      </CardContainer>

      <MessageContainer>
        <Title>아직 쏠픽(SOL Pick) 카드가 없으신가요?</Title>
        <SubText>
          쏠픽(SOL Pick) 카드를 발급받고 다양한 혜택을 누려보세요.
        </SubText>
        <IssueButton onClick={handleCardIssue}>카드 발급받기</IssueButton>
      </MessageContainer>

      <Menu />
    </Container>
  );
};

export default CardIssuePage;
