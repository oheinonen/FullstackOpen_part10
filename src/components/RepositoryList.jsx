import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: theme.backgroundColors.lightBackgroundColor,
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handlePress = (id) => {
    navigate(`/repository/${id}`);
  };
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
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
