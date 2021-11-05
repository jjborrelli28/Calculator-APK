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
    paddingHorizontal: 15,
    paddingVertical: 15,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  longBtn: {
    height: 80,
    width: 170,
    backgroundColor: '#9b9b9b',
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
