import { View, StyleSheet  } from 'react-native';
import theme from '../theme';
import NumbersRow from './NumbersRow';
import RepositoryHeader from './RepositoryHeader';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10
  },
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <RepositoryHeader item={item} />
      <NumbersRow item={item} />
    </View>
    );
};

export default RepositoryItem;