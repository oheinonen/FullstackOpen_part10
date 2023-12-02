import { StyleSheet, Pressable } from 'react-native';
import SubHeading from './SubHeading';
import { useSignOut } from '../hooks/useSignOut';
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

const SignOutTab = () => {
  const signOut = useSignOut();
  const handleSubmit = async () => {
    try {
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
