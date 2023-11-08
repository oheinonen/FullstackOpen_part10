import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { Formik } from 'formik';
import { StyleSheet, Pressable, Text, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: theme.backgroundColors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" />
          <Pressable onPress={handleSubmit} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
export default SignInForm;
