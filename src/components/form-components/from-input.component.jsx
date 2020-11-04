import styled from "styled-components";
import { Link } from "react-router-dom";

const FromContainer = styled.div`
  margin-top: 15px;
`;

const StyledLabel = styled.label`
  display: block;
`;
const StyledInput = styled.input`
  display: block;
  width: 360px;
  min-width: 310px;
  height: 60px;
  font-size: 15px;
  text-indent: 15px;
  border: none;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 15px;
  border-radius: 6px;
  border: 1px solid #dadadf;
  font-size: 15px;
  text-indent: 15px;
  &:focus-within {
    border: 2px solid #0d0d0d;
  }
`;

const StyledButton = styled.button`
  display: ${(props) => (props.withBtn ? `block` : "none")};
  height: 60px;
  background-color: #6a7df4;
  width: 140px;
  font-weight: 700;
  font-size: 17px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  &:focus {
    outline: none;
  }
`;
const FromInput = ({ label, name, withBtn, buttonText,buttonLink, ...otherProps }) => {
  return (
    <FromContainer>
      <StyledLabel htmlFor={name}> {label} </StyledLabel>
      <InputContainer>
        <StyledInput {...otherProps} />
        <Link to={buttonLink}>
          <StyledButton withBtn={withBtn}>{buttonText}</StyledButton>
        </Link>
      </InputContainer>
    </FromContainer>
  );
};

export default FromInput;
