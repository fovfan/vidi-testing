import styled from "styled-components";
import SubmitButton from "../form-components/submit-button.component";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

const TitileContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledTitle = styled.span`
  font-size: 50px;
`;

const StyledMessage = styled.span`
  margin-top: 35px;
  max-width: 380px;
  font-size: 15px;
`;

const BoldMessage = styled(StyledMessage)`
  font-weight: bold;
`;

const SuccessMessage = ({ titile, message, boldMessage }) => {
  return (
    <StyledContainer>
      <TitileContainer>
        <StyledTitle>{titile}</StyledTitle>
      </TitileContainer>
      <StyledMessage>
        {message}
        <BoldMessage>{boldMessage}</BoldMessage>
      </StyledMessage>
      <Link to="/signin">
        <SubmitButton buttonText="Back to Sign in" />
      </Link>
    </StyledContainer>
  );
};

export default SuccessMessage;
