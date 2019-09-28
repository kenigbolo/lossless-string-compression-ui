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

  toggleInputType = (stringValue) => {
    const { inputType } = this.props;
    if (inputType === 'comma') {
      return <textarea
        name="stringValue"
        id="appId"
        rows="4"
        cols="50"
        value={stringValue}
        onChange={this.handleChange}
      ></textarea>;
    } else {
      // Available on (IE 10+, Edge, Chrome, Firefox 42+)
      return <input type="file" accept=".txt" className="mb-20" />;
    }
  };

  toggleLabel = (action) => {
    const { inputType } = this.props;
    if (inputType === 'comma') {
      const hint = 'comma separated with no spaces inbetween commas';
      return <label>String for {action} - {hint}</label>
    } else {
      return <label>Select a properly formatted file with <b>.txt</b> entension</label>
    }
  }

  makeRequest = async () => {
    const { stringValue } = this.state;
    if (!stringValue) return alert('Please enter a valid string');
    const { action, handleSubmit } = this.props;
    const endpoint = this.state.endpoints[action];
    const body = { data: { stringValue } };
    try {
      const { data } = await postData(`http://localhost:9000/${endpoint}`, body);
      handleSubmit(data.toString());
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    const { stringValue } = this.state;
    const { action } = this.props;
    return (
      <section>
        <form>
          {this.toggleLabel(action)}
          {this.toggleInputType(stringValue, this.handleChange )}
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
