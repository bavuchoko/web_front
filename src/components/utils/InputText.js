import React, {useRef, useState} from 'react';
import styled from "styled-components";
import leftArrow from "../../assets/icons/left-arrow.png"
import forbidden from "../../assets/icons/forbidden.png"
import checked from "../../assets/icons/checked.png"
import { useNavigate } from 'react-router-dom';
import {noAuhApi} from "../../apis/instance/Instance";
import googleIcon from '../../assets/icons/google.png'
import {Google, GoogleIcon, JoinDiv, NAVER} from "../buttons/loginButtons";


const InputBox = styled.input`
  width: 320px;
  border: 4px solid #ffe500;
  outline: #ffe500;
  border-radius: 4px;
  height: 50px;
  font-size: 13px;
  text-indent: 15px;
  background-color: #fffce9;
  margin-bottom: 10px;

`;
const Message = styled.p`
  font-size: 13px;
  color: red;
  text-align: left;
  width: 320px;
  margin: 0 auto;
  text-indent: 10px;
`;
function InputText(props) {
    const navigate = useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [message, setMessage]=useState("");
    const [mailType, setMailType]=useState(false);
    const [nameInputMode, setNameInputMode] =useState(true);
    const [user, setUser] =useState(null);
    const typeUsername = (e) => {
        setUsername(e.target.value)
        if(emailRegEx.test(username)){
            setMessage("")
            setMailType(true)
            setMessage("로그인 하세요")
        }else{
            setMailType(false)
            setMessage("이메일 형식이 아닙니다")
        }
        console.log(mailType)
    }
    const typePassword = (e) => {
        setPassword(e.target.value)
    }
    const focusRef =useRef(null);
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const usernameEnter = (e) => {
        if(e.key=="Enter"){
            if(emailRegEx.test(e.target.value)) {
                setMailType(true)
                setNameInputMode(false)
                setMessage("로그인 하세요")
            }else{
                setMailType(false)
                setMessage("이메일 형식이 아닙니다")
            }
        }
    }

    const passwordEnter = (e) => {
        if (e.key == "Enter") {
            const loginUser = {
                "username": username,
                "password": password
            }
            try {
                noAuhApi.post(
                    '/user/authentication', loginUser
                ).then(res => {
                    if (res.status === 200) {
                        localStorage.setItem("accessToken", res.data.accessToken)
                        let loginUser = {
                            "username" : res.data.username,
                            "nickname" : res.data.nickname,
                            "joinData" : res.data.joinData,
                            "proifle" : res.data.proifle
                        }
                        console.log(loginUser);
                        localStorage.setItem("loginUser", loginUser)
                        navigate("/");
                    }
                })
            }catch (error){
                console.log(error)
            }
        }
    }
    const backButtonHandler = () => {
        setPassword("");
        setNameInputMode(true);
    }
    const homeButtonHandler = () => {
        setUsername("");
        setPassword("");
        navigate('/');
    }

    return (
        <div>
            <form style={{display:'flex'}}>
                <div className="w-[320px] m-auto">
                {nameInputMode &&
                    <div>
                        <InputBox type="text" placeholder="username@email.com..."
                                    value={username}
                                    autoFocus
                                    onChange={typeUsername}
                                    onKeyPress={usernameEnter}
                        />
                        <button className="w-[90px] float-right " onClick={homeButtonHandler}>
                            <img src={leftArrow} className="w-3 h-4 inline-block" /> <span className="text-[11px]">home</span>
                        </button>
                    </div>
                }
                {!mailType &&
                    <div>
                        <img className="w-4 h-4 in absolute ml-3 mt-1.5" src={forbidden}/>
                        <span className="forbidden-loginmsg">{message}</span>
                    </div>
                }
                {mailType && nameInputMode &&
                    <div>
                        <img className="w-4 h-4 in absolute ml-3 mt-1.5" src={checked}/>
                        <span className="checked-loginmsg">{message}</span>
                    </div>
                    }
                {!nameInputMode &&
                    <div>
                        <InputBox type="password" placeholder="password..."
                                  value={password}
                                  ref={focusRef}
                                  autoFocus
                                  onChange={typePassword}
                                  onKeyPress={passwordEnter}
                        />
                        <button className="w-[90px] float-right " onClick={backButtonHandler}>
                            <img src={leftArrow} className="w-3 h-4 inline-block" /> <span className="text-[11px]">back</span>
                        </button>
                    </div>
                }
                </div>

            </form>
            <NAVER>NAVER</NAVER>
            <Google>
                <GoogleIcon src={googleIcon} alt="Button Icon" />
                <p className="sign-with-google">Sign with Google</p>
            </Google>
            <JoinDiv>JOIN US</JoinDiv>
        </div>
    );
}

export default InputText;