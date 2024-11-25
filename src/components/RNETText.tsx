import React from 'react';
import { Text, TextStyle, StyleSheet, TextProps } from 'react-native';

type FontWeight = 'bold' | 'regular' | 'thin';

interface CustomTextProps extends TextProps {
  style?: TextStyle;
  size?: number; // Font size
  weight?: FontWeight; // 'bold' | 'regular' | 'thin'
  children: React.ReactNode;
}

const weightToFontFamily: Record<FontWeight, string> = {
  bold: 'Raleway-Bold',
  regular: 'Raleway-Regular',
  thin: 'Raleway-Thin',
};

const RNETText: React.FC<CustomTextProps> = ({ 
  style, 
  size = 14, 
  weight = 'regular', 
  children, 
  ...rest 
}) => {
  const fontFamily = weightToFontFamily[weight];

  return (
    <Text
      style={[
        styles.text, 
        { fontSize: size, fontFamily, fontVariant: ['lining-nums'] }, 
        style, // Allow external styles to override
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#334669', // Default text color
  },
});

export default RNETText;
