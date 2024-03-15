import React from "react";
import Container from "../full/Container";
import PineconeHeader from "../extra/PineconeHeader";
import Steps from "../extra/Steps";
import PineconeFooter from "../extra/PineconeFooter";

const SignUpSteps = () => {
  return (
    <Container>
      <PineconeHeader />
      <Steps />
      <PineconeFooter />
    </Container>
  );
};

export default SignUpSteps;
