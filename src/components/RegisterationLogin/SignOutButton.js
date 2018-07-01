import React from 'react';
import UserService from '../../services/UserService'
import styled from 'styled-components'

const SignOutButtonComponent = styled.a`
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 12px;
  color: #fff;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  
  &:active {
    transform: translate(0px, 2px);
    -webkit-transform: translate(0px, 2px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  &:hover {
    background-color: #6FC6FF;
    cursor: pointer;
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
