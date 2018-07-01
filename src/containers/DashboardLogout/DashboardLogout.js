import React, { Component } from 'react';
import styled from 'styled-components';
import UserService from "../../services/UserService";

class DashboardLogout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  logout() {
    UserService.logout();
  }

  componentWillMount(){
    this.setState({
      loading: true
    }, () => { this.logout() });
  }

  render() {
    if (this.state.loading) {
      return (<h2>Logging Out...</h2>);
    }

    return (
      <div>
      </div>
    );
  }
}

export default DashboardLogout;
