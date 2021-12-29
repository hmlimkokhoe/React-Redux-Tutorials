import React from 'react';
import { Provider } from 'react-redux';
import UsersContainer from './components/UsersContainer';
import {store} from "./store/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersContainer/>
      </Provider>
    </div>
  );
}

export default App;
