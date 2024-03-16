import React from "react";
import Container from "../full/Container";
import PineconeHeader from "../extra/SignUp/PineconeHeader";
import Steps from "../extra/Dashboard/Steps";
import PineconeFooter from "../extra/SignUp/PineconeFooter";

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
