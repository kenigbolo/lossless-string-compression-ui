import React, {Component} from 'react';
// import EncryptionForm from './components/EncryptionForm';
import Form from './components/Form';

class App extends Component {
  state = {
    hash: '',
    action: 'compression',
  };

  setAction = event => {
    this.setState({ action: event.target.value });
  };
  /**
   * Function to copy results to clipboard
   */
  copyToClipboard = () => {
    if (!this.state.hash) return alert(`There is no App Id to copy`);
    const copyText = document.getElementById('appId');
    window.prompt('Copy to clipboard: Ctrl+C, Enter', copyText.value);
  };
  /**
   * Function to set the compressed/decompressed result
   */
  handleSubmit = hashValue => {
    this.setState({ hash: hashValue });
  };
  /**
   * Function to switch header title
   * N/B - This should ideally be put inside the Form Component
   */
  handleHeaderSwitch = () => {
    return this.state.action === 'compression'
      ? <h1>Compress String</h1>
      : <h1>Decompress String</h1>
  };
  /**
   * Handle option default switching
   */
  handleOptionsSwitch = () => {
    return this.state.action === 'compression'
      ? <option value="space">Space separated Strings</option>
      : null;
  }

  render() {
    const { hash, action } = this.state;
    return (
      <div className="container">
        <br></br>
        <select>
          <option value="comma">Comma Separated Strings</option>
        </select>
        <select onChange={this.setAction}>
          <option value="compression">Compression</option>
          <option value="decompression">Decompression</option>
        </select>
        {this.handleHeaderSwitch()}
        <Form
          handleSubmit={this.handleSubmit}
          action={action}
        />
        <br></br>
        <textarea
          id="appId"
          rows="4"
          cols="50"
          value={hash}
          disabled
        ></textarea>
        <br></br>
        <button onClick={this.copyToClipboard} className="btn--aito">Copy To Clipboard</button>
      </div>
    );
  }
}

export default App;
