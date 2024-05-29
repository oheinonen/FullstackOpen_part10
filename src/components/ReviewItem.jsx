import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import SubHeading from './SubHeading';
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
export default ReviewItem;
