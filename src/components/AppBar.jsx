import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import SignOutTab from './SignOutTab';
import useCurrentUser from '../hooks/useCurrentUser';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.backgroundColors.darkBackgroundColor,
  },
});

const AppBar = () => {
  const { data } = useCurrentUser();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={'Repositories'} to={'/'} />
        {data?.me ? (
          <>
            <AppBarTab name={'Create a review'} to={'/review'} />
            <SignOutTab />
          </>
        ) : (
          <>
            <AppBarTab name={'Sign in'} to={'/signIn'} />
            <AppBarTab name={'Sign up'} to={'/signUp'} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
