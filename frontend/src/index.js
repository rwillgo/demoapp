import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import {navigationRef} from './navigation/NavigationService';
import {store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<View style={{flex: 1, backgroundColor: 'black'}} />}
        persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
