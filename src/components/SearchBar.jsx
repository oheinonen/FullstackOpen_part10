import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  searchBar: {
    color: theme.colors.textSecondary,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
});

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchBar}
      iconColor={theme.colors.textSecondary}
    />
  );
};

export default SearchBar;
