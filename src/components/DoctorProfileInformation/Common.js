import styled from "styled-components";
import { FontIcon } from 'react-md';

export const Line = styled.div`
  padding: 5px 0 0 30px;
`;

export const Label = styled.div`
    font-weight: bold;
    font-size: 1.2em;
`;

export const Icon = styled.div`
  display:inline-block;
  width: 30px;
  text-align:center;
`;

export const Text = styled.div`
  display: inline-block;
  margin-left: 25px;
  vertical-align: middle;

  a {
    color: skyblue;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  } 
`;