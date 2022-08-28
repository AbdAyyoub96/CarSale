import React from 'react';
import {Image, Text, View} from 'react-native';
import { styles } from '../../Assets/Styles/Global.Style';

export const CustomPublic = () => {
  return (
    <View style={styles.PublicContainer}>
    <Text style={styles.TextH1}>Car Sale</Text>
    
      <Image
        style={styles.tinyLogo}
        source={require('../../Assets/Images/logo.png')}
      />
    </View>
  );
};
