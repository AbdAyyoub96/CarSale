import {StyleSheet} from 'react-native';
import {Colors} from '../Colors/Global.Color';

export const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  Container: {
    flex: 1,
    borderTopEndRadius: 75,
    borderTopStartRadius: 25,
    backgroundColor: '#fff',
    padding: 25,
  },
  PublicContainer: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextH1: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  TextH2: {
    color: Colors.Primary,
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tinyLogo: {
    width: 200,
    height: 100,
  },
  TextInput: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
  Row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  Button:{
    alignItems: "center",
    backgroundColor: Colors.Primary,
    padding: 15,
    borderRadius :75,
    marginHorizontal :25
  },
  ButtonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:'bold'
  }
});
