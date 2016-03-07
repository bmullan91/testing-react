import React from 'react';
import Component from './Component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.state = {
      name: undefined
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value || undefined
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.name}
          onChange={this.updateName}
          autoFocus
          placeholder="who dis?"
        />
        <Component name={this.state.name} />
      </div>
    );
  }
}

export default App;
