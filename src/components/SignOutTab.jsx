import { StyleSheet, Pressable } from 'react-native';
import SubHeading from './SubHeading';
import { useSignOut } from '../hooks/useSignOut';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

const SignOutTab = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      navigate('/');
      await signOut();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Pressable style={styles.container} onPress={handleSubmit}>
      <SubHeading color="textTertiary">Sign out</SubHeading>
    </Pressable>
  );
};

export default SignOutTab;
