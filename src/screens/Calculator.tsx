import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useCalculator} from '../hooks/useCalculator';
import Button from './components/Button';
import {styles} from './theme/styles';

const Calculator = () => {
  const {buttons, number, prevNumber} = useCalculator();

  return (
    <SafeAreaView style={styles.base}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        {prevNumber !== '0' && (
          <Text style={styles.prevNumber}>{prevNumber}</Text>
        )}
        <Text
          style={
            number.length <= 10
              ? styles.xlResult
              : number.length <= 16
              ? styles.mdResult
              : styles.smResult
          }>
          {number}
        </Text>
        <View style={styles.row}>
          {buttons.map((btn, index) => (
            <Button btn={btn} key={index} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
