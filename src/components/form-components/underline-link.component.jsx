import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLinkContainer = styled.div`
  margin-top: 15px;
`;
const StyledLink = styled.a`
  font-size: 15px;
  font-weight: 400;
  color: #8c8c8c;
  text-decoration: none;
  border-bottom: 1px solid #8c8c8c;
`;
const UnderlineLink = ({ linkTo, text }) => {
  return (
    <Link to={linkTo}>
      <StyledLinkContainer>
        <StyledLink>{text}</StyledLink>
      </StyledLinkContainer>
    </Link>
  
  );
};

export default UnderlineLink;
