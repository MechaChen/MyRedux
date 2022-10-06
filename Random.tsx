import * as React from 'react';

import useSelector from './useSelector';
import counterStore, { STATE } from './store';

const randomSelector = (state: STATE) => state.random

const Random = () => {
  const random = useSelector(counterStore, randomSelector);

  return (
    <div>
      <h3>Random number: {random}</h3>
      <button onClick={counterStore.getRandom}>Get new random number</button>
    </div>
  );
}

export default Random;