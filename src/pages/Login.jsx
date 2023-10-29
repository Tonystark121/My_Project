import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 80%;
  padding: 20px;
  font-size: 18px;
  background-color: rgb(155, 155, 243);
  color: #fff;
  border: 1px solid #04072f66;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  margin-bottom: 7px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const InputTag = styled.input`
  padding: 15px;
  height: 20px;
  outline: none;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #04072f66;
`;

const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 12px;

  @media (max-width: 767px) and (min-width: 467px) {
    width: 80%;
  }

  @media (max-width: 467px) {
    width: 80%;
    height: 85%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: red;

  @media (max-width: 767px) and (min-width: 467px) {
    margin-left: 4px;
  }

  @media (max-width: 467px) {
    margin-left: 4px;
  }
`;

const LoginContainer = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins";
`;

const Title = styled.div`
  text-align: center;
  font-weight: 2vw;
  font-size: 30px;
  margin-top: -60px;

  @media (max-width: 767px) and (min-width: 467px) {
    font-size: 25px;
  }

  @media (max-width: 467px) {
    font-size: 25px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 467px) {
    margin-top:-10px;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EmailHeading = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 16px;
  @media (max-width: 767px) and (min-width: 467px) {
    margin-bottom: 8px;
  }

  @media (max-width: 467px) {
    margin-bottom: 8px;
  }
`;

const Box = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #04072f66;

  @media (max-width: 767px) and (min-width: 467px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 18px;
  }

  @media (max-width: 467px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 12px;
  }
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkbox = styled.div`
  display: flex;
  margin-bottom: 6px;

  @media (max-width: 767px) and (min-width: 467px) {
    margin-bottom: 3px;
  }

  @media (max-width: 467px) {
    margin-bottom: 3px;
  }
`;

const CheckboxSpan = styled.span`
  margin-left: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ButtonSpan = styled.span`
  margin-bottom: 12px;
  @media (max-width: 767px) and (min-width: 467px) {
  }

  @media (max-width: 467px) {
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
  }
`;

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const userLogin = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    props.onUserInput(isLogin);
  };
  return (
    <Container onSubmit={userLogin}>
      <LoginContainer>
        <Title>
          <h1>Login</h1>
        </Title>
        <Details>
          <Email>
            <EmailHeading>Login ID</EmailHeading>
            <InputTag type="email" placeholder="enter login id" required />
          </Email>
          <Email>
            <EmailHeading>Password</EmailHeading>
            <InputTag type="password" placeholder="enter password" required />
          </Email>
        </Details>
        <Box>
          <Item1>
            <Checkbox>
              <input type="checkbox" />
              <CheckboxSpan>Remember me</CheckboxSpan>
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              <CheckboxSpan>
                Agree to <StyledLink href="#">Terms & Conditions</StyledLink>
              </CheckboxSpan>
            </Checkbox>
          </Item1>
          <div className="item2">
            <StyledLink href="#">Change Password</StyledLink>
          </div>
        </Box>
        <ButtonContainer>
          <StyledButton>Login</StyledButton>
          <ButtonSpan>
            Does not have an account?{" "}
            <StyledLink href="">Register Here</StyledLink>
          </ButtonSpan>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
