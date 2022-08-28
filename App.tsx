import React from 'react';
import {View} from 'react-native';
import { styles } from './src/Assets/Styles/Global.Style';
import {LoginScreen} from './src/Screens/Public/LoginScreen/LoginScreen';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <LoginScreen />
    </View>
  );
};

export default App;
