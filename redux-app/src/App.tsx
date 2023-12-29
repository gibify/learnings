import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Player } from './components/Player';

export function App() {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  )
}
