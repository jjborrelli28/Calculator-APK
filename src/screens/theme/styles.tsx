import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    backgroundColor: 'black',
    flex: 1,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 30,
    textAlign: 'right',
  },
});
