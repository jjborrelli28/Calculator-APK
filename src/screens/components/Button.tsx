import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/styles';

interface PropsBtn {
  btn: {
    symbol: string;
    backgroundColor: string;
    textColor: string;
    doubleSize: boolean;
    action: () => void;
  };
}

const Button = ({btn}: PropsBtn) => {
  return (
    <TouchableOpacity onPress={btn.action}>
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
    </TouchableOpacity>
  );
};

export default Button;
