import { View, StyleSheet, Pressable, Text } from 'react-native';
import theme from '../theme';
import NumbersRow from './NumbersRow';
import RepositoryHeader from './RepositoryHeader';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: theme.backgroundColors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryItem = ({ item, standalone }) => {
  const handlePress = () => {
    Linking.openURL(item.url);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryHeader item={item} />
      <NumbersRow item={item} />
      {standalone && (
        <Pressable onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Open in Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
