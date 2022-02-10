import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  { Text } from 'react-native';
import { update } from './src/actions'
import reducers from './src/reducers';
import NewTimer from './src/components/NewTimer'
import ListTimers from './src/components/ListTimer'
import { loadState, saveState } from './src/utils'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})


let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 5000)



function App() {
  return (
    <Provider store={store}>
      <Text>TMRZ</Text>
        <NewTimer />
      <ListTimers />
    </Provider>
  );
}



export default App;