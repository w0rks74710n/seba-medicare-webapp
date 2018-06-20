import React, { Component } from 'react';
import email_icon from '../../resources/email-icon.png';
import { Link } from 'react-router-dom';
import { auth } from '../../services/Firebase';
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";

const ContentDiv = styled.div`
  margin: 20px auto;
  width: 450px; 
  -webkit-border-radius: 8px/7px; 
  -moz-border-radius: 8px/7px; 
  border-radius: 8px/7px; 
  background-color: #ebebeb; 
  -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  border: solid 1px #cbc9c9;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 300;
  color: #4c4c4c;
  text-align: center;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Paragraph = styled.p`
  text-align: center;   
  font-size: 14px;
	color: #424242;
  margin-top: 5%;
`;

const InputForm = styled.input`    
  font-size: 1.2em;
  outline: none; // Chrome outline
  box-shadow: none; // Firefox outline
  -webkit-appearance: none; // mobile Safari
  background: transparent;
  display: inline-block;
  height: 2em;
  width: 18em;
  padding: 0 3%;
  -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px; 
  -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px; 
  border-radius: 0px 4px 4px 0px/5px 5px 4px 4px; 
  background-color: #fff; 
  -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
  -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
  box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
  border: solid 1px #cbc9c9;
`;

const IconForm = styled.img`  
  display: inline-block;
  float: left;
  height: 2.2em;
  width: 3.2em;
`;

const ButtonForm = styled.button`  
  display: block;  
	margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 30px;
  width: 150px;
  font-size: 1em;
  border-radius: 10px;
  color: black;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const LineDiv = styled.div`  
  display: block;
	margin: auto;
  margin-left: 50px;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const HorizontalDivider = styled.hr`
  color: #a9a9a9;
  opacity: 0.3;
  width: 80%;
  margin: auto;
`;

const PasswordForgetPage = () =>
  <ContentDiv>
    <Title>Password Forgotten?</Title>
    <HorizontalDivider/>
    <PasswordForgetForm />
  </ContentDiv>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <LineDiv>
          <IconForm src={email_icon}/>
          <InputForm
            value={this.state.email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </LineDiv>
        <HorizontalDivider/>
        <ButtonForm disabled={isInvalid} type="submit">
          Reset My Password
        </ButtonForm>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <Paragraph>
    <Link to="/password-forget">Forgot Password?</Link>
  </Paragraph>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};