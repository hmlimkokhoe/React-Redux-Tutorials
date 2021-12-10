# redux-demo
This is a demonstration of the `redux thunk` middleware in a single JS file. The middleware is added to store, so that we can perform asynchronous operations such as API calls.

## How to run
1. Go to directory: `cd redux-demo`
1. Install axios and redux libraries: `npm install`
2. Fetch JSON example using action creator: `node ./asyncActions.js`

# react-redux-demo
This is a demonstration of the `redux thunk` middleware in a React project. The concepts in  redux-demo apply here as well.

## How it works
1. Reducer is defined in `userReducer.js` and updates state depending on what action has been passed. It's used in the createStore method in `store.js`. Reducers calculate new state given previous state and action. They are pure function, meaning no sideffects such as API calls.
2. Action creator `fetchUsers()` is defined in `UsersActions.js` and performs axios fetch. An Action is an object that represents change of state
3. `fetchUsers()` API call is invoked once the React Component `UsersContainer.js` is loaded.
4. `UsersContainer.js` is subscribed to `store`, because it is wrapped inside Provider in `App.js` and uses the `connect()` function. It also maps the state to props, so the fetch data can be consumed by the component for use in the DOM.

## How to run
1. Go to directory: `cd react-redux-demo`
1. Install axios, react and redux libraries: `npm install`
2. Deploy locally to see thunk allowing API call on action: `npm run start`

In userReducer.js, the response is going through a switch function