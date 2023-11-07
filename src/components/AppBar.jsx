import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 5,
    backgroundColor: theme.backgroundColors.darkBackgroundColor,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={'Repositories'} to={'/'} />
        <AppBarTab name={'Sign in'} to={'/signIn'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
