import * as React from 'react';

import Counter from './Counter';
import Random from './Random';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Counter />
      <Random />
    </div>
  );
}
