import React, { Component } from 'react';
import user_icon from '../../resources/user-icon.png';
import email_icon from '../../resources/email-icon.png';
import password_icon from '../../resources/pass-icon.png';
import {  Link,  withRouter } from 'react-router-dom';
import styled from "styled-components";
import UserService from "../../services/UserService"
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

const ButtonForm = styled.button`  
  display: block;  
	margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 30px;
  width: 100px;
  font-size: 1em;
  border-radius: 10px;
  color: black;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const IconForm = styled.img`  
  display: inline-block;
  float: left;
  height: 2.2em;
  width: 3.2em;
`;

const LineDiv = styled.div`  
  display: block;
	margin: auto;
  margin-left: 50px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Paragraph = styled.p`
  text-align: center;   
  font-size: 14px;
	color: #424242;
  margin-bottom: 5%;
`;

const HorizontalDivider = styled.hr`
  color: #a9a9a9;
  opacity: 0.3;
  width: 80%;
  margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
	color: ${ ColorPalette.primary };
  margin: auto;

	&:hover {
    text-decoration: underline;
	}
`;

const ErrorLabel = styled.p`
  text-align: center;
  color: red;
  font-size: 15px;
`;

const SignUpPage = ({ history }) =>
  <ContentDiv>
    <Title>Sign Up</Title>
    <HorizontalDivider/>
    <SignUpForm history={history} />
  </ContentDiv>;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  validateForm() {
    let errorValidation;
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    username    === '' ? errorValidation = 'Username is required. ' : '';
    email       === '' ? errorValidation = errorValidation + 'Email is required. ' : '';
    passwordOne === '' ? errorValidation = errorValidation + 'Password is required. ' : '';
    passwordTwo === '' ? errorValidation = errorValidation + 'Confirm is required. ' : '';
    passwordOne !== passwordTwo ? errorValidation = errorValidation + 'Your given passwords does not match. Please verify.' : '';

    errorValidation === '' ? this.setState({error: null}) : this.setState({error: errorValidation})
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    this.validateForm(() => {
      if (this.state.error === null) {
        const { history } = this.props;
        UserService.registerDoctor(username, passwordOne, email, true)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push("/sign-in");
          }).catch((error) => {
          this.setState(updateByPropertyName('error', error));
        });
      }
    });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <LineDiv>
          <IconForm src={user_icon}/>
          <InputForm
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="* Username"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={email_icon}/>
          <InputForm
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="* Email Address"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={password_icon}/>
          <InputForm
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="* Password"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={password_icon}/>
          <InputForm
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="* Confirm Password"
          />
        </LineDiv>
        <Paragraph>By clicking Register, you agree on our <StyledLink to="/terms-and-conditions">terms and condition</StyledLink>.</Paragraph>
        <HorizontalDivider/>
        <ButtonForm type="submit">
          Sign Up
        </ButtonForm>

        { error && <ErrorLabel>{error+' Please verify.'}</ErrorLabel> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <Paragraph>
    Don't have an account?
    {' '}
    <Link to="/patient-sign-up">Sign Up</Link>
  </Paragraph>;
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};
