import theme from '../theme';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingIndicator;
