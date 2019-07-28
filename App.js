import * as React from 'react';
import { Provider } from 'react-redux';
import RNApp from './RNApp';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RNApp />
      </Provider>
    );
  }
}

export default App;