import { useState, useEffect } from 'react';

const useSelector = (
  store,
  selector
) => {
  // declare a useState, store selected store state
  const [selectedState, setSelectedState] = useState(selector(store.state));

  // subscribe setState method, trigger when selected store state updated
  useEffect(() => {
    const unsubscribe = store.subscribe(
      (newState) => setSelectedState(selector(newState))
    )

    // unsubscribe when component unmounted
    return unsubscribe;
  }, []);

  return selectedState;
}

export default useSelector;