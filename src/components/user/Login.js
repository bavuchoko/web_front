import React from 'react';
import styled from "styled-components";
import Inputs from "../input/Inputs";
import InputText from "../utils/InputText";


const LoginDiv = styled.div`
  width: 320px;
  background-color: hsl(204, 15%, 94%);
  margin: 0 auto;
  border-radius: 8px;
  height: 300px;
  border: 1.5px solid #d3dcec;
`;
const LoginTag = styled.div`
  font-family: "Roboto";
`;

function Login(props) {
    return (
        <div className="pt-[150px] text-center ">
            <LoginTag className="text-[38px] mb-[15px]">SIGN IN TO SITE</LoginTag>
            <InputText></InputText>
        </div>
    );
}

export default Login;
