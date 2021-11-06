import {useRef, useState} from 'react';
import {Alert} from 'react-native';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
  null,
}

export const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const operation = useRef<Operators>();

  const numberValidator = (n: string) => {
    if (number === '0') {
      setNumber(n);
    } else {
      if (+number < 0) {
        if (number.includes('.')) {
          if (number.length >= 14) {
            Alert.alert('', 'It is not possible to enter more than 12 digits', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          } else {
            setNumber(number + n);
          }
        } else {
          if (number.length >= 13) {
            Alert.alert('', 'It is not possible to enter more than 12 digits', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          } else {
            setNumber(number + n);
          }
        }
      } else {
        if (number.includes('.')) {
          if (number.length >= 13) {
            Alert.alert('', 'It is not possible to enter more than 12 digits', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          } else {
            setNumber(number + n);
          }
        } else {
          if (number.length >= 12) {
            Alert.alert('', 'It is not possible to enter more than 12 digits', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          } else {
            setNumber(number + n);
          }
        }
      }
    }
  };

  const buttons = [
    {
      symbol: 'C',
      backgroundColor: '#9b9b9b',
      textColor: '#000000',
      doubleSize: false,
      action: () => {
        setPrevNumber('0');
        setNumber('0');
      },
    },
    {
      symbol: '+/-',
      backgroundColor: '#9b9b9b',
      textColor: '#000000',
      doubleSize: false,
      action: () => {
        if (number !== '0') {
          if (number.substr(0, 1) === '-') {
            setNumber(number.slice(1));
          } else {
            setNumber('-' + number);
          }
        }
      },
    },
    {
      symbol: 'Del',
      backgroundColor: '#9b9b9b',
      textColor: '#000000',
      doubleSize: false,
      action: () => {
        if (number !== '0') {
          if (+number > -10 && +number < 10) {
            setNumber('0');
          } else {
            setNumber(number.substr(0, number.length - 1));
          }
        }
      },
    },
    {
      symbol: '/',
      backgroundColor: '#ff9427',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        if (operation.current !== Operators.divide) {
          setPrevNumber(number);
          setNumber('0');
          operation.current = Operators.divide;
        }
      },
    },
    {
      symbol: '7',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('7');
      },
    },
    {
      symbol: '8',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('8');
      },
    },
    {
      symbol: '9',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('9');
      },
    },
    {
      symbol: 'x',
      backgroundColor: '#ff9427',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        if (operation.current !== Operators.multiply) {
          setPrevNumber(number);
          setNumber('0');
          operation.current = Operators.multiply;
        }
      },
    },
    {
      symbol: '4',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('4');
      },
    },
    {
      symbol: '5',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('5');
      },
    },
    {
      symbol: '6',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('6');
      },
    },
    {
      symbol: '-',
      backgroundColor: '#ff9427',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        if (operation.current !== Operators.subtract) {
          setPrevNumber(number);
          setNumber('0');
          operation.current = Operators.subtract;
        }
      },
    },
    {
      symbol: '1',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('1');
      },
    },
    {
      symbol: '2',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('2');
      },
    },
    {
      symbol: '3',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        numberValidator('3');
      },
    },
    {
      symbol: '+',
      backgroundColor: '#ff9427',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        if (operation.current !== Operators.add) {
          setPrevNumber(number);
          setNumber('0');
          operation.current = Operators.add;
        }
      },
    },
    {
      symbol: '0',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: true,
      action: () => {
        if (number !== '0') {
          numberValidator('0');
        }
      },
    },
    {
      symbol: '.',
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        if (!number.includes('.') && +number <= 99999999999) {
          setNumber(number + '.');
        }
      },
    },
    {
      symbol: '=',
      backgroundColor: '#ff9427',
      textColor: '#ffffff',
      doubleSize: false,
      action: () => {
        switch (operation.current) {
          case Operators.add:
            if (prevNumber) {
              setNumber(`${+prevNumber + +number}`);
              setPrevNumber('');
              operation.current = Operators.null;
            }
            break;

          case Operators.subtract:
            if (prevNumber) {
              setNumber(`${+prevNumber - +number}`);
              setPrevNumber('');
              operation.current = Operators.null;
            }
            break;

          case Operators.multiply:
            if (prevNumber) {
              setNumber(`${+prevNumber * +number}`);
              setPrevNumber('');
              operation.current = Operators.null;
            }
            break;

          case Operators.divide:
            if (prevNumber) {
              if (+number === 0) {
                Alert.alert('', 'Cannot divide by "0"', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              } else {
                setNumber(`${+prevNumber / +number}`);
                setPrevNumber('');
                operation.current = Operators.null;
              }
            }
            break;
        }
      },
    },
  ];

  return {buttons, number, prevNumber};
};
