import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../Assets/Styles/Global.Style';
import {CustomPublic} from '../../../Components/Public/CustomPublic';
import { CustomButton } from '../../../Components/Shared/CustomButton';
import {CustomInput} from '../../../Components/Shared/CustomInput';

export const LoginScreen = () => {
  return (
    <View style={styles.AppContainer}>
      <CustomPublic />

      <View style={styles.Container}>
        <Text style={styles.TextH2}>Welcome</Text>
        <View style={styles.Row}>
          <Text>
            Don't have an account?
            <Text>Register now</Text>
          </Text>
        </View>
        <View style={{marginVertical:50}}>
          <CustomInput name="Email" />
          <CustomInput name="Password" />
        </View>

        <View>
          <CustomButton name="Login" />
        </View>
      </View>
    </View>
  );
};
