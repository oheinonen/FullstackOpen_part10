import { View, Text, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import SubHeading from './SubHeading';
import useRepositoryById from '../hooks/useRepository';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  reviewContainer: {
    margin: 5,
    flexShrink: 1,
  },
  date: {
    color: theme.colors.textSecondary,
    paddingBottom: 5,
  },
  rating: {
    color: theme.colors.primary,
    fontSize: 20,
    marginRight: 5,
    fontWeight: theme.fontWeights.bold,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 10,
    borderBottomColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(review.createdAt, 'dd.MM.yyyy');
  return (
    <View style={styles.outerContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}> {review.rating}</Text>
      </View>
      <View style={styles.reviewContainer}>
        <SubHeading color={'textPrimary'}>{review.user.username}</SubHeading>

        <Text style={styles.date}>{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

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
