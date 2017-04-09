# React-toggle-state


Example:

```js
import ToggleState from 'react-toggle-state';
<ToggleState>
  {({state, turnTrue, turnFalse}) =>
    <div>
      <p>This is {state ? 'true': 'false'}</p>
      <button onClick={state ? turnFalse : turnTrue}>Toggle</button>
    </div>
  }
</ToggleState>
```