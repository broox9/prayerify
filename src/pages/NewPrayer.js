import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';

@inject('appStore')
export default class NewPrayer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      pinned: false
    };
  }
  submitForm(e) {
    appStore.submitPrayer(this.state)
  }
  render() {
    return (
      <StyledForm onSubmit={(e) => this.submitForm(e)}>
        <h3>New</h3>
        <p>
          <Label name="title" text="Title" />
          <Input type="text" name="title" />
        </p> 
        <p>
          <Label name="description" text="Description" />
          <StyledTextarea name="description" />
        </p> 

        <p>
          <input type="checkbox" name="pinned" onChange={(e) => {
            this.setState({pinned: e.target.value === 'on'})
          }} />
          <label htmlFor="pinned">Pinned?</label>
        </p>
        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}

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
  border: 1px solid #aaa;
  padding: 0.25rem;
  outline: none;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`;