import { View, StyleSheet } from 'react-native';
import Numbers from './Numbers';
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
});

const NumbersRow = ({ item }) => {
  const { forksCount, stargazersCount, ratingAverage, reviewCount } = item;
  return (
    <View style={styles.flexContainer}>
      <Numbers
        number={stargazersCount}
        testID="stargazersCount"
        title={'Stars'}
      />
      <Numbers number={forksCount} testID="forksCount" title={'Forks'} />
      <Numbers number={reviewCount} testID="reviewCount" title={'Reviews'} />
      <Numbers number={ratingAverage} testID="ratingAverage" title={'Rating'} />
    </View>
  );
};

export default NumbersRow;
