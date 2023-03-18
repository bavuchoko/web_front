import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const UserMenuBody = styled.div`
  position: relative;
  text-align: right;
  border-right: 1px solid #d2d4d7;
  top: 12px;
  right: 100px;
  width: 130px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 500;

`;

const UserMenuList = styled.div`
  margin-bottom: 4px;
  padding: 10px;
  border-radius: 4px;
  &:hover{
    background-color: #1D4ED8;
    color: white;
  }
  &:active{
    transform:scale(0.9) ;
  }
`;

function HeaderUserMenu({setUserOpen}) {

    const onClickHandler =()=>{
        setUserOpen(false)

    }
    
    return (
        <UserMenuBody>
            <ul>
                <UserMenuList><Link to="/login"> <button onClick={()=>onClickHandler()}>로그인</button></Link></UserMenuList>
                <UserMenuList><button>문의하기</button></UserMenuList>
            </ul>
        </UserMenuBody>
    );
}

export default HeaderUserMenu;