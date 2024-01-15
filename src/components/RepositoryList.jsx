import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: theme.backgroundColors.lightBackgroundColor,
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};
const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();
  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) {
    console.log(error);
    return <Text>error...</Text>;
  }

  return <RepositoryListContainer repositories={repositories.repositories} />;
};

export default RepositoryList;
