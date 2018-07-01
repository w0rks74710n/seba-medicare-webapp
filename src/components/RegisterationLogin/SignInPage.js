import React, { Component } from 'react';
import email_icon from '../../resources/email-icon.png';
import password_icon from '../../resources/pass-icon.png';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './DoctorSignUpPage';
import UserService from '../../services/UserService'
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";

const ContentDiv = styled.div`
  margin: 70px auto;
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
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const IconForm = styled.img`  
  display: inline-block;
  float: left;
  height: 2.4em;
  width: 3.2em;
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

const ErrorLabel = styled.p`
  text-align: center;
  color: red;
  font-size: 15px;
`;

const SignInPage = ({ history }) =>
  <ContentDiv>
    <Title>Sign In</Title>
    <HorizontalDivider/>
    <SignInForm history={history} />
    <SignUpLink />
  </ContentDiv>;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
    } = this.state;

    UserService.login(username, password).then((data) => {
      console.log(data.token);
      window.localStorage['jwtToken'] = data.token;
      window.localStorage['userType'] = data.userType;
      window.localStorage['id'] = data.id;
      window.localStorage['username'] = username;
      data.userType = 'doctor' ? this.props.history.push('/dashboard') : this.props.history.push('/');
    }).catch((e) => {
      console.error(e);
      this.setState({
        error: e
      });
    });
  };

  render() {
    const {
      username,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <LineDiv>
          <IconForm src={email_icon}/>
          <InputForm
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Username"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={password_icon}/>
          <InputForm
            value={password}
            onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </LineDiv>
        <HorizontalDivider/>
        <ButtonForm disabled={isInvalid} type="submit">
          Login
        </ButtonForm>

        {error &&
          <ErrorLabel>
            {'*'+error+'. Please verify your credentials.*'}
          </ErrorLabel>
        }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
