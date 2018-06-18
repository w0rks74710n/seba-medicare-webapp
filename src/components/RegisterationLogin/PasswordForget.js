import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 600px;
  display: flex column;
  margin: auto;
  padding: 15px;
  border: 1px solid black;
`;

const Paragraph = styled.p`
  text-align: center;   
  font-size: 14px;
	color: #424242;
  margin-top: 5%;
`;

const PasswordForgetPage = () =>
  <ContentDiv>
    <h1>Password Forget</h1>
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
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

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