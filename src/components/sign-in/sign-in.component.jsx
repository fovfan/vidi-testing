import React from "react";
import styled from "styled-components";
import FromInput from "../form-components/from-input.component";
import UnderlineLink from "../form-components/underline-link.component";
import SubmitButton from "../form-components/submit-button.component";
import ShortDivider from "../dividers/divider-short.component";
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

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInTitle>
        Sign In
        <SignInSubTitle>
          Don't have a account?{" "}
          <StyledLink to="/signup">
            <SignUpLink>Sign Up</SignUpLink>
          </StyledLink>
        </SignInSubTitle>
      </SignInTitle>
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
        placeholder=" Enter your password..."
        required
      />
      <UnderlineLink linkTo="/resetpw" text="Forget you password?" />
      <SubmitButton buttonText="Sign in" />
      <ShortDivider />
      <ThirdPartyButton buttonText="Sign in with Google" />
    </SignInContainer>
  );
};

export default SignIn;
