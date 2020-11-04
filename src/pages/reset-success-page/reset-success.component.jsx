import styled from "styled-components";
import SuccessMessage from "../../components/success-message/success-message.component";

const StyledLayout = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
`;

const ResetSuccess = () => {
  return (
    <StyledLayout>
      <SuccessMessage
        titile="Thank You!"
        message="We’ve sent password reset instructions to your email address. "
        boldMessage="If no email is received within ten minutes,
please check that the submitted address is correct."
      />
    </StyledLayout>
  );
};

export default ResetSuccess;
