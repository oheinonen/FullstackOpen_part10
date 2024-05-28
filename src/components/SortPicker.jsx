import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  picker: {
    height: 80,
    color: theme.colors.textSecondary,
    backgroundColor: theme.backgroundColors.lightBackgroundColor,
  },
  disabledPickerItem: {
    color: theme.colors.textSecondary,
  },
  enabledPickerItem: {
    color: theme.colors.textPrimary,
  },
});

const SortPicker = ({ order, setOrder }) => {
  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => setOrder(itemValue)}
      style={styles.picker}
      dropdownIconColor={theme.colors.textSecondary}
    >
      <Picker.Item
        label="Select an item..."
        enabled={false}
        style={styles.disabledPickerItem}
      />
      <Picker.Item
        label="Latest repositories"
        value="latest"
        style={styles.enabledPickerItem}
      />
      <Picker.Item
        label="Highest rated repositories"
        value="ratingDesc"
        style={styles.enabledPickerItem}
      />
      <Picker.Item
        label="Lowest rated repositories"
        value="ratingAsc"
        style={styles.enabledPickerItem}
      />
    </Picker>
  );
};
export default SortPicker;
