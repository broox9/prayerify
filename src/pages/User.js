import React from 'react';
import {inject} from 'mobx-react';

@inject('appStore')
export default class User extends React.Component {
  constructor(props) {
    super();

    this.state = {
      prayers: props.appStore.getPrayers()
    };
  }
  render() {
    const prayers = [];

    for (let prayer in this.state.prayers) {
      // console.log('users', prayer, this.state.prayers[prayer])
      prayers.push(this.state.prayers[prayer]);
    }

    const prayerItems = prayers.map((p, index) => {
      return (
        <li key={index}>
          <span>{p.title}</span>
        </li>
      )
    });
    
    return (
      <section>
        <h1>User</h1>
        <ul>
          {prayerItems}
        </ul>
      </section>
    )
  }
}