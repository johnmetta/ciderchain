import React, { Component } from 'react';
import {capitalizeFirstLetter} from '../modules/utilities';
import { get } from '../modules/api';

export default class SimpleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      formName: this.props.singular + "_id"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.callbackParent(e);
  }
  async getInitialProps() {
    let path = this.props.url ? this.props.url : this.props.plural;
    const {data, response} = await get("/" + path);
    throw data;
    return {values: data};
  }
  render() {
    return (
      <select className='form-control'
        name={this.state.formName}
        value={this.props.current_value}
        onChange={this.handleChange}>
        <option value=''>{capitalizeFirstLetter(this.props.singular)}</option>
        {this.state.values.map(function(item) {
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
    )

  }
}
