import React from 'react';
import Component from './Component';

const DEFAULT_NAME = 'stranger?';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.state = {
      name: ''
    };
  }

  updateName(event) {
    const name = event.target.value;
    this.setState({
      name
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.updateName} autofocus={true} placeholder='who dis?'/>
        <Component name={this.state.name || DEFAULT_NAME}/>
      </div>
    )
  }
}

export default App;
