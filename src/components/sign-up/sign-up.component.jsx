import React from "react";
import styled from "styled-components";
import FromInput from "../form-components/from-input.component";
import SubmitButton from "../form-components/submit-button.component";
import ThirdPartyButton from "../form-components/third-party-sign-in-button.component";
import { Link } from "react-router-dom";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  max-width: 400px;
`;
const SignInTitle = styled.span`
  font-size: 50px;
`;
const SignInSubTitle = styled.div`
  font-size: 11px;
  padding-left: 3px;
`;
const SignUpLink = styled.a`
  cursor: pointer;
  color: #338fcc;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SignUp = () => {
  return (
    <SignInContainer>
      <SignInTitle>
        Sign Up
        <SignInSubTitle>
          or 
          <StyledLink to='/signin'>
            <SignUpLink> sign in to your account</SignUpLink>
          </StyledLink>
        </SignInSubTitle>
      </SignInTitle>
			<FromInput
        type="text"
        name="name"
        label="Name"
        placeholder=" First Name..."
        required
      />
      <FromInput
        type="email"
        name="email"
        label="Email"
        placeholder=" Enter your Email..."
        required
      />
      <FromInput
        type="password"
        name="password"
        label="Password"
        placeholder=" Password 8+ characters..."
        required
      />
      <SubmitButton buttonText="Sign Up" />
      <ThirdPartyButton buttonText="Sign Up with Google" />
    </SignInContainer>
  );
};

export default SignUp;
