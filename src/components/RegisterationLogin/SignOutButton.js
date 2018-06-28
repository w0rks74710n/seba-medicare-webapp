import React from 'react';
import UserService from '../../services/UserService'

const SignOutButton = () =>
  <button
    type="button"
    onClick={UserService.logout}
  >
    Sign Out
  </button>

export default SignOutButton;
