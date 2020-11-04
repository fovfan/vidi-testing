import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import SignUp from "../../components/sign-up/sign-up.component";
import { ReactComponent as ThumpsUpIcon } from "../../assets/Thumbs_up_icon.svg";
import { ReactComponent as BoltIcon } from "../../assets/Bolt_icon.svg";
import { ReactComponent as ShopIcon } from "../../assets/Shop_icon.svg";

const SignUpContainer = styled.div`
  margin-top: 12px;
`;
const BenefitSection = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f8;
`;

const Container = styled.div``;

const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const BenefitDescription = styled.div`
  margin-left: 20px;
`;

const SubText = styled.p`
  margin: 0 0;
  font-size: 18px;
`;

const SignUpLayout = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Grid container spacing={3}>
        <BenefitSection item xs={6}>
          <Container>
            <BenefitContainer>
              <ThumpsUpIcon />
              <BenefitDescription>
                <SubText>Signing up is fast and free</SubText>
                <SubText>— no card needed.</SubText>
              </BenefitDescription>
            </BenefitContainer>
            <BenefitContainer>
              <BoltIcon />
              <BenefitDescription>
                <SubText>Produce faster, with a unique video</SubText>
                <SubText>creation tool built for Ecommerce.</SubText>
              </BenefitDescription>
            </BenefitContainer>
            <BenefitContainer>
              <ShopIcon />
              <BenefitDescription>
                <SubText>Stand out, and sell more product</SubText>
                <SubText>with stunning video content.</SubText>
              </BenefitDescription>
            </BenefitContainer>
          </Container>
        </BenefitSection>
        <Grid item xs={6}>
          <SignUpLayout>
            <SignUp />
          </SignUpLayout>
        </Grid>
      </Grid>
    </SignUpContainer>
  );
};

export default SignUpPage;
