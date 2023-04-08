import styled from "styled-components";

export const JoinDiv = styled.button`
  display: block;
  width: 320px;
  height: 50px;
  border-radius: 4px;
  color: white;
  margin: 0 auto;
  background-color: #4e7bf8;
  font-size: 14px;
  padding-top: 5px;
  font-family: "Roboto";
  margin-top: 40px;
  &:active{
    transform: scale(0.95);
  }
`;
export const NAVER = styled.button`
  display: block;
  width: 320px;
  height: 50px;
  border-radius: 4px;
  border:1px solid #15c654;
  color: white;
  margin: 0 auto;
  background-color: #19ce60;
  font-size: 16px;
  padding-top: 5px;
  font-family: "Roboto";
  margin-top: 20px;
  &:active{
    transform: scale(0.95);
  }
`;
export const Google = styled.button`
  display: block;
  text-align: left;
  width: 320px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #dedede;
  color: #7e7d7d;
  margin: 0 auto;
  font-weight: 700;
  font-size: 15px;
  margin-top: 20px;

  &:active {
    transform: scale(0.95);
  }
`;

export const GoogleIcon = styled.img`
  margin-left: 10px;
  display: inline-block;
  height: 25px;
  width: 25px;
`;