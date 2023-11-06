import { StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  subHeading: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
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
});

const SubHeading = ({ color, style, ...props }) => {
  const textStyle = [
    styles.subHeading,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textTertiary' && styles.colorTextTertiary,
    color === 'primary' && styles.colorPrimary,
    style,
  ];

  return <Text style={textStyle} {...props}>{props.children}</Text>;
};

export default SubHeading;