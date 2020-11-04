import React from "react";
import styled from "styled-components";
import FromInput from "../../components/form-components/from-input.component";
import UnderlineLink from "../../components/form-components/underline-link.component";

const PwResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  max-width: 600px;
`;
const StyledTitle = styled.span`
  font-size: 49px;
`;

const StyledLayout = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
`;

const PasswordResetPage = () => {
  return (
    <StyledLayout>
      <PwResetContainer>
        <StyledTitle>Password Recovery</StyledTitle>
        <FromInput
          type="email"
          name="email"
          label="Email"
          placeholder=" Enter your Email..."
          withBtn
          buttonText="Continue"
          buttonLink="/resetsuccess"
          required
        />
        <UnderlineLink linkTo="/signin" text="Back to Sign In" />
      </PwResetContainer>
    </StyledLayout>
  );
};

export default PasswordResetPage;
