import React from 'react';
import UserService from '../../services/UserService'
import styled from 'styled-components'

const SignOutButtonComponent = styled.a`
  order: 3;
  margin: auto;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  
  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  &:hover {
    background-color: #6FC6FF;
  }
`;

const SignOutButton = () =>
  <SignOutButtonComponent
    style={{float: 'right'}}
    type="button"
    onClick={UserService.logout}
  >
    Sign Out
  </SignOutButtonComponent>;

export default SignOutButton;
