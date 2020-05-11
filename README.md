# TODO app using `Context API`

> * This is a simple "TODO App" using `context api` which includes adding a todo and removing it. During this I focussed bit on `actions`, `payload` and `reducers` and how `dispatch` is used. Also created `contextProvider`. And used `map` function to loop data from state

> * Also used a reactJs library `uuid` to generate random "id"

## Concepts Learnt -->
> * `uuid : v4()`
> * `useReducer[]` An alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method.
> * `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because `you can pass dispatch down instead of callbacks`.
> * `preventDefault`
> * `dispatch` carries multiple functions along with it.
> * `payload` it says what the information it carries with it like email,password.