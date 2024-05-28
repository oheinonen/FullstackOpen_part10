import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import SortPicker from './SortPicker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: theme.backgroundColors.lightBackgroundColor,
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
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
      ListHeaderComponent={<SortPicker order={order} setOrder={setOrder} />}
    />
  );
};
const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const orderBy = order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = order === 'ratingAsc' ? 'ASC' : 'DESC';

  const { repositories, loading, error } = useRepositories(
    orderBy,
    orderDirection
  );
  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) {
    console.log(error);
    return <Text>error...</Text>;
  }

  return (
    <RepositoryListContainer
      repositories={repositories.repositories}
      order={order}
      setOrder={setOrder}
    />
  );
};

export default RepositoryList;
