import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/vidi_logo.svg";
import { URLS } from "../../config";

export const HeaderContainer = styled.header`
  margin-bottom: 0;
  border-bottom: 1px solid #efefef;
`;

const Container = styled.header`
  margin: 0px auto;
  max-width: 1250px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const BookNowBtn = styled.button`
  height: 55px;
  width: 130px;
  border: none;
  border-radius: 28px;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: bold;
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const SignInLink = styled.a`
  font-weight: 400;
  size: 18px;
  margin-right: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
          <Link to={URLS.home}>
            <Logo />
          </Link>
        <Options>
          <StyledLink to={URLS.signIn}>
            <SignInLink>Sign In</SignInLink>
          </StyledLink>
          <BookNowBtn>Book Now</BookNowBtn>
        </Options>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
