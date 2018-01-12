import React from "react";
// import { inject } from "mobx-react";
import { connect } from "react-redux";
import styled from "styled-components";
import history from "../services/history";

//actions
import { createPrayer } from "../actions";

// components
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

class NewPrayer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      pinned: false,
      public: false
    };
  }
  submitForm(e) {
    e.preventDefault();
    this.props.submitPrayer(this.state);
    history.push("/");
  }
  render() {
    return (
      <StyledForm onSubmit={e => this.submitForm(e)}>
        <h3>New Prayer</h3>
        <p>
          <Label name="title" text="Title" />
          <Input
            type="text"
            name="title"
            onInput={e => this.setState({ title: e.target.value })}
          />
        </p>
        <p>
          <Label name="description" text="Description" />
          <StyledTextarea
            name="description"
            onInput={e => this.setState({ description: e.target.value })}
          />
        </p>

        <p>
          <input
            type="checkbox"
            name="pinned"
            onChange={e => {
              this.setState({ pinned: e.target.value === "on" });
            }}
          />
          <label htmlFor="pinned">Pinned?</label>
        </p>

        <p>
          <input
            type="checkbox"
            name="public"
            onChange={e => {
              this.setState({ public: e.target.value === "on" });
            }}
          />
          <label htmlFor="public">Make Public?</label>
        </p>

        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}

const mapDispatchProps = dispatch => ({
  submitPrayer: prayer => dispatch(createPrayer(prayer))
});

export default connect(state => ({}), mapDispatchProps)(NewPrayer);

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 414px;
  box-sizing: border-box;
  margin: 0 auto;
  p {
    padding: 0 0 1rem;
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  color: ${props => props.theme.primaryText};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.accent};
  padding: 0.25rem;
  outline: none;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`;
