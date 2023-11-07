import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextTertiary: {
    color: theme.colors.textTertiary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  primaryBackgroundColor: {
    backgroundColor: theme.backgroundColors.blueBackgroundColor,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({
  color = 'primary',
  fontSize = 16,
  fontWeight = 'normal',
  style,
  backgroundColor = theme.colors.white,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textTertiary' && styles.colorTextTertiary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    backgroundColor === 'primary' && styles.primaryBackgroundColor,
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {' '}
      {props.children}
    </NativeText>
  );
};

export default Text;
