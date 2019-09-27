import React, { Component } from 'react';
import { postData } from '../helpers';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      stringValue: '',
      endpoints: {
        compression: 'compress',
        decompression: 'decompress'
      }
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  makeRequest = async () => {
    const { stringValue } = this.state;
    const { action, handleSubmit } = this.props
    if (!stringValue) return alert('Please enter a valid string');
    const endpoint = this.state.endpoints[action];
    const body = { data: { stringValue } };
    try {
      const { data } = await postData(`http://localhost:9000/${endpoint}`, body);
      handleSubmit(data.toString())
    } catch (error) {
      throw new Error(error)
    }
  }

  render() {
    const { stringValue } = this.state;
    const { action } = this.props;
    const hint = 'comma separated with no spaces inbetween commas';
    return (
      <section>
        <form>
          <label>String for {action} - {hint}</label>
          <textarea
            name="stringValue"
            id="appId"
            rows="4"
            cols="50"
            value={stringValue}
            onChange={this.handleChange}
          ></textarea>
          <br></br>
          <input
            className="btn--aito"
            type="button"
            value={action.charAt(0).toUpperCase() + action.slice(1)}
            onClick={this.makeRequest}
          />
        </form>
      </section>
    );
  }
}

export default Form;
