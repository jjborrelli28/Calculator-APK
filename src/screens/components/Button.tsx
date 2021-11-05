import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from '../theme/styles';

interface PropsBtn {
  btn: {
    symbol: string;
    backgroundColor: string;
    textColor: string;
    doubleSize: boolean;
  };
}

const Button = ({btn}: PropsBtn) => {
  return (
    <View
      style={
        btn.doubleSize
          ? {
              ...styles.longBtn,
              backgroundColor: btn.backgroundColor,
            }
          : {
              ...styles.btn,
              backgroundColor: btn.backgroundColor,
            }
      }>
      <Text style={{...styles.textBtn, color: btn.textColor}}>
        {btn.symbol}
      </Text>
    </View>
  );
};

export default Button;
