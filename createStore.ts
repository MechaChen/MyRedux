const createStore = <STATE, ACTIONS>(
  initialState: STATE,
  // a function with set param, which return actions
  actions: (set: 
    // a function return nothing, which accept partial state / function
    (state: 
      // partial state
      | Partial<STATE> 
      // function
      | ((current: STATE) => Partial<STATE>)
    ) => void
  ) => ACTIONS
) => {
  let state = initialState;

  type Subscriber = (state: STATE) => void;

  const subscribers: Subscriber[] = [];

  // subscribe a member api
  // return an unsubscribe api
  const subscribe = (subscriber: Subscriber) => {
    subscribers.push(subscriber);

    return () => {
      subscribers.splice(
        subscribers.indexOf(subscriber),
        1
      );
    }
  }

  const notify = (newState: STATE) => {
    for (const subscriber of subscribers) {
      subscriber(newState);
    }

    state = newState;
  }

  const setFunction = (setStateAction) => {
    const newVal = typeof setStateAction === 'function'
      ? setStateAction(state)
      : setStateAction;

    notify({ ...state, ...newVal });
  }

  const actualActions = actions(setFunction);
  
  return { state, subscribe, ...actualActions };
}

export default createStore;