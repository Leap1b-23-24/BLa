import React from "react";
import Container from "../../global/Container";
import PineconeHeader from "../../extra/SignUp/PineconeHeader";
import Steps from "../../extra/SignUp/Steps";
import PineconeFooter from "../../extra/SignUp/PineconeFooter";

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
