import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../../Assets/Styles/Global.Style';

export const CustomButton = ({name,onPress}: any) => {
  return (
    <View>
      <TouchableOpacity  style={styles.Button}
      
      onPress={onPress}>
        <Text style={styles.ButtonText}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};
