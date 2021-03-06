import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'thisy-react';
import App from './components/App.connect';
import store, { Act } from './store';

// Logging
// TODO: Want to subscribe effect methods

store.subscribe((method) => {
  console.log(`Update: ${method.name}`, store.send(Act.takeSnapshot));
});

store.send(Act.loadInitialReddit);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
