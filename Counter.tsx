import * as React from 'react';

import counterStore from './store';
import useSelector from './useSelector';

const Counter = () => {
  const counter = useSelector(
    counterStore,
    (state) => state.counter,
  );

  return (
    <button onClick={counterStore.increment}>
      {counter}
    </button>
  );
}

export default Counter;