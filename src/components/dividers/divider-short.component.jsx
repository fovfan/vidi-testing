import styled from "styled-components";

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0;
`;
const Divider = styled.div`
  width: 290px;
  border: 1px solid #efefef;
`;
const ShortDivider = () => {
  return (
    <DividerContainer>
      <Divider />
    </DividerContainer>
  );
};

export default ShortDivider;
