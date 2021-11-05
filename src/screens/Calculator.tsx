import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {buttons} from '../helpers/buttons';
import Button from './components/Button';
import {styles} from './theme/styles';

const Calculator = () => {
  return (
    <SafeAreaView style={styles.base}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        <Text style={styles.smallResult}>2,500</Text>
        <Text style={styles.result}>1,500</Text>
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
