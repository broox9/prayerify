import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

// actions
import { signInUser } from '../actions'

const LoginForm = styled.form`
  padding: 1rem;
  margin: 1rem auto;
  max-width: 250px;
  border: 1px solid #ccc;

  label {
    display: block;
    font-size: 0.75rem;
    margin-bottom: 6px;
  }

  > p,
  h3 {
    margin-bottom: 0.5rem;
  }
`;

class Login extends React.Component {
  // "class" property (but it's intance level. I don't like that name)
  state = {
    uid: "",
    pwd: ""
  };

  submitForm(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { user } = this.props;
    if (user) {
      return <Redirect to="/" />;
    }

    return (
      <LoginForm
        onSubmit={e => {
          this.submitForm(e);
        }}
      >
        <h3>Login</h3>
        <p>
          <Label name={"uid"}>email</Label>
          <Input
            type="text"
            name="uid"
            onInput={e => this.setState({ uid: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="uid">password</label>
          <Input
            type="password"
            name="pwd"
            onInput={e => this.setState({ pwd: e.target.value })}
          />
        </p>
        <Button type="submit">Login</Button>
      </LoginForm>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => ({
  signIn: (credentials) => dispatch(signInUser(credentials))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
