import createStore from './createStore';

const initialState = {
  counter: 0,
  random: Math.random(),
}

const counterStore = createStore(
  initialState,
  /*
    set ===
    (setStateAction) => {
      const newVal = typeof setStateAction === 'function'
        ? setStateAction(state)
        ? setStateAction

      notify({ ...state, ...newVal })
    }
  */
  (set) => ({
    setCounter: (counter) => {
      set({ counter })
    },
    increment: () => {
      set(
        (state) => ({ counter: state.counter + 1 })
      )
    },
    getRandom: () => {
      set({ random: Math.random() })
    },
  })
  /*
    {
      setCounter: (counter) => {

      },
      increment: () => {

      }
    }
  */
);

export default counterStore;
type STATE = typeof initialState;
export { STATE };