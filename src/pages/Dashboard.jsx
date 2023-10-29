import React, { useState } from "react";
import image from "./image.png";
import styled from "styled-components";

const Dashboard = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleBtn = () => {
    setIsLoggedIn(!isLoggedIn);
    props.onUserInput(isLoggedIn);
  };

  const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #650465;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Heading = styled.h1`
    font-size: 40px;
    margin-left: 160px;
    cursor: pointer;
    font-family: "Poppins";

    @media (max-width: 767px) and (min-width: 467px) {
      font-size: 30px;
      margin-left: 60px;
    }
    @media (max-width: 467px) {
      font-size: 24px;
      margin-left: 30px;
    }
  `;

  const StyledButton = styled.button`
    margin-right: 130px;
    padding: 10px 16px;
    font-size: 20px;
    border-radius: 8px;
    background-color: rgb(86, 86, 229);
    border: 1px solid rgb(86, 86, 229);
    color: #fff;
    outline: none;
    cursor: pointer;

    @media (max-width: 767px) and (min-width: 467px) {
      margin-right: 60px;
    }
    @media (max-width: 467px) {
      margin-right: 20px;
      font-size: 18px;
    }
  `;

  const ImgContainer = styled.div`
    max-width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-self: center;

    img {
      height: 600px;
    }

    @media (max-width: 767px) and (min-width: 467px) {
      width: 80%;
    }
  `;

  const Text = styled.div`
    font-size: 25px;
    text-align: center;
    color: #650465;
    gap: 0;

    @media (max-width: 767px) and (min-width: 467px) {
      font-size: 24px;
    }

    @media (max-width: 467px) {
      font-size: 18px;
    }
  `;

  const WelcomeText = styled.h1`
    font-size: 25px;
    text-align: center;
    color: #650465;
    margin: 0;

    @media (max-width: 767px) and (min-width: 467px) {
      font-size: 24px;
    }

    @media (max-width: 467px) {
      font-size: 18px;
    }
  `;

  const DashboardImage = styled.img`
    height: 600px;
  `;

  return (
    <div>
      <Nav>
        <Heading>My Dashboard</Heading>
        <StyledButton onClick={toggleBtn}>Log Out</StyledButton>
      </Nav>
      <ImgContainer>
        <Text>
          <WelcomeText>Welcome To the Dashboard !</WelcomeText>
        </Text>
        <DashboardImage src={image} alt="Logo" />
      </ImgContainer>
    </div>
  );
};

export default Dashboard;
