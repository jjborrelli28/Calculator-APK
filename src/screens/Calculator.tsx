import React, {useRef, useState} from 'react';
import {Alert, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useCalculator} from '../hooks/useCalculator';
import Button from './components/Button';
import {styles} from './theme/styles';
import {buttons} from '../helpers/buttons';

const Calculator = () => {
  const {buttons, number, prevNumber} = useCalculator();

  return (
    <SafeAreaView style={styles.base}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        {prevNumber !== '0' && (
          <Text style={styles.smallResult}>
            {prevNumber.substr(0, 1) === '-'
              ? prevNumber.substring(0, 11)
              : prevNumber.substring(0, 10)}
          </Text>
        )}
        <Text style={styles.result}>
          {number.substr(0, 1) === '-'
            ? number.substring(0, 11)
            : number.substring(0, 10)}
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
