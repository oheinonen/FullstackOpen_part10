import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import SortPicker from './SortPicker';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: theme.backgroundColors.lightBackgroundColor,
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
  },
  listHeaderContainer: {
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
    padding: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  order,
  setOrder,
  searchQuery,
  setSearchQuery,
}) => {
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
      ListHeaderComponent={
        <View style={styles.listHeaderContainer}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortPicker order={order} setOrder={setOrder} />
        </View>
      }
    />
  );
};
const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const orderBy = order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = order === 'ratingAsc' ? 'ASC' : 'DESC';

  const { repositories, loading, error } = useRepositories(
    orderBy,
    orderDirection,
    debouncedSearchQuery
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
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;
