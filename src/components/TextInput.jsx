import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.backgroundColors.lightBackgroundColor,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
