# React-toggle-state


Example:

```js
import ToggleState from 'react-toggle-state';
<ToggleState>
  {({isTrue, turnTrue, turnFalse}) =>
    <div>
      <p>This is {isTrue ? 'true': 'false'}</p>
      <button onClick={isTrue ? turnFalse : turnTrue}>Toggle</button>
    </div>
  }
</ToggleState>
```