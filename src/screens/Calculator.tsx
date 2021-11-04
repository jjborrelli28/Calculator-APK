import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {styles} from './theme/styles';

const Calculator = () => {
  return (
    <SafeAreaView style={styles.base}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        <Text style={styles.smallResult}>1,500</Text>
        <Text style={styles.result}>1,500</Text>
        <View>
          <View>{/* Btn */}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
