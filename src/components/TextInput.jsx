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
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
