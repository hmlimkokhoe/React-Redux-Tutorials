# redux-demo
This is a demonstration of the `redux thunk` middleware in a single JS file. The middleware is added to store, so that we can perform asynchronous operations such as API calls.

This project explains the core concepts of Redux in a short and concise manner.

## How to run
1. Go to directory: `cd redux-demo`
1. Install axios and redux libraries: `npm install`
2. Fetch JSON example using action creator: `node ./asyncActions.js`

# react-redux-demo
This is a demonstration of the `redux thunk` middleware in a React project. The concepts in `redux-demo` apply here as well.

1. Reducer is defined in `userReducer.js` and returns an updated state given the previous state and an action. It's used in the createStore method in `store.js` and is defined as a pure function, meaning no side-effects such as API calls are permitted.
2. Action creator `fetchUsers()` is defined in `UsersActions.js` and is able to do API calls. An Action is an object that represents change of state and needs to be dispatched to the store to trigger state changes.
3. `fetchUsers()` is an async action (API call) and is invoked once the React Component `UsersContainer.js` is loaded.
4. `UsersContainer.js` is subscribed to `store`, because it is wrapped inside Provider in `App.js` and uses the `connect()` function. It also maps the state to props, so the fetch data can be consumed by the component for use in the DOM.

## How to run
1. Go to directory: `cd react-redux-demo`
2. Install axios, react and redux libraries: `npm install`
3. Deploy locally to see thunk allowing API call on action: `npm run start`

In userReducer.js, the response is going through a switch function

# ts-react-redux-demo
This is a demonstration of the `redux thunk` middleware in a React project with Typescript and Redux-Toolkit (RTK).

Works similarly to `react-redux-demo`, but uses the RTK library:
* `UsersSlice.ts`: Here we create our reducer `usersSlice` and async action `getUsers`.
* `store\index.ts`: We create the store using `configureStore`. 

## How to run
1. Go to directory: `cd ts-react-redux-demo`
2. Install axios, react, redux, RTK and typescript libraries: `npm install`
3. Deploy locally to see thunk allowing API call on action: `npm run start`