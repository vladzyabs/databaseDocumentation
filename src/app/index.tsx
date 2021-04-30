import React        from 'react';
import View         from './pages/View';
import { Provider } from 'react-redux';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default App;