import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import SubHeading from './SubHeading';
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

const AppBarTab = ({ name, to }) => {
  return (
    <Pressable style={styles.container}>
      <Link to={to}>
        <SubHeading color="textTertiary">{name}</SubHeading>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
