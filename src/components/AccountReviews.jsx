import { View, Text, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';
import ReviewItem from './ReviewItem';
import useCurrentUser from '../hooks/useCurrentUser';
const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 10,
    borderBottomColor: theme.backgroundColors.lightBackgroundColor,
  },
});

const AccountReviews = () => {
  const includeReviews = true;
  const { data, loading, error } = useCurrentUser(includeReviews);

  if (loading) return <Text>loading reviews...</Text>;
  if (error || !data.me)
    return <Text>error happened when fetching your reviews...</Text>;
  const { me } = data;

  const { reviews } = me;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return reviewNodes.length > 0 ? (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  ) : (
    <Text>You don&apos;t have any reviews yet</Text>
  );
};

export default AccountReviews;
