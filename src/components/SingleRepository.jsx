import { View, Text, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepositoryById from '../hooks/useRepository';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 10,
    borderBottomColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useRepositoryById(id);
  if (loading) return <Text>loading repository...</Text>;
  if (error)
    return <Text>error happened when fetching single repository...</Text>;

  const { repository } = data;
  const { reviews } = repository;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} standalone={true} />
          <View style={styles.separator} />
        </>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default SingleRepository;
