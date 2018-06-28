import React, { Component } from 'react';
import user_icon from '../../resources/user-icon.png';
import email_icon from '../../resources/email-icon.png';
import password_icon from '../../resources/pass-icon.png';
import {  Link,  withRouter } from 'react-router-dom';
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";
import UserService from "../../services/UserService"

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
  margin-bottom: 5%;
  margin-top: 5%;
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
  address1: '',
  address2: '',
  phone: '',
  fullName,
  error: null
};

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      address1,
      address2,
      phone,
      fullName
    } = this.state;

    const {history} = this.props;

    UserService.registerPatient(username, email, passwordOne, address1, address2, phone, fullName)
      .then((token) => {

    });

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push("/home");
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <LineDiv>
          <IconForm src={user_icon}/>
          <InputForm
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={email_icon}/>
          <InputForm
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={password_icon}/>
          <InputForm
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </LineDiv>
        <LineDiv>
          <IconForm src={password_icon}/>
          <InputForm
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
        </LineDiv>
        <Paragraph>By clicking Register, you agree on our <StyledLink to="/terms-and-conditions">terms and condition</StyledLink>.</Paragraph>
        <HorizontalDivider/>
        <ButtonForm disabled={isInvalid} type="submit">
          Sign Up
        </ButtonForm>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <Paragraph>
    Don't have an account?
    {' '}
    <Link to="/sign-up">Sign Up</Link>
  </Paragraph>
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};
