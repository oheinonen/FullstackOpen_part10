import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { useSignUp } from '../hooks/useSignUp';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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

export const SignUpContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, 'Username must be at least 5 characters')
      .max(30, 'Username must be at most 30 characters')
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password must be at least 5 characters')
      .max(50, 'Password must be at most 50 characters')
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords are not matching')
      .required('Password confirmation required'),
  });

  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: null }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            secureTextEntry
          />
          <Pressable onPress={handleSubmit} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignUpForm = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password, passwordConfirmation } = values;
    try {
      if (password != passwordConfirmation) {
        console.error("Passwords don't match");
        return;
      }
      const { error } = await signUp({ username, password });
      if (error) {
        console.log(error);
      } else {
        await signIn({ username, password });
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
    return;
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};
export default SignUpForm;
