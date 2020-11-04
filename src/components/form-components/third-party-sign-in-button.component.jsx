import styled from "styled-components";
import { ReactComponent as GoogleIcon } from "../../assets/google_icon.svg";

const ButtonContainer = styled.div`
  margin-top: 15px;
`;
const StyledButton = styled.button`
	display:flex;
	justify-content:space-between;
	align-items:center;
  width: 100%;
  width: 360px;
  min-width: 310px;
  height: 60px;
  margin-top: 10px;
  border-radius: 65px;
  background-color: #f4f6f8;
  font-weight: 700;
  font-size: 17px;
  text-align: left;
  padding: 0 25px;
  border: none;
	cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const ThirdPartyButton = ({ buttonText }) => {
  return (
    <ButtonContainer>
      <StyledButton>
				<span>{buttonText}</span>
				<GoogleIcon/>
			</StyledButton>
    </ButtonContainer>
  );
};

export default ThirdPartyButton;
