import React, { Component } from 'react';
import ToggleState from '../lib/react-toggle-state';

class App extends Component {
  render() {
    return (
      <div>
        <ToggleState>
          {({state, turnTrue, turnFalse}) =>
            <div>
              <p>This is {state ? 'true': 'false'}</p>
              <button onClick={state ? turnFalse : turnTrue}>Toggle</button>
            </div>
          }
        </ToggleState>
      </div>
    );
  }
}

export default App;
