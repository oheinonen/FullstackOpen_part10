import { View, StyleSheet  } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  flexItemNumber: {
    flexGrow: 1,
  },
  flexItemTitle: {
    flexGrow: 1,
  },
});


const Numbers = ({number, title, style}) => {
  const formattedNumber = number > 1000
    ? Number.parseFloat(number / 1000).toFixed(1) + 'k'
    : number;

    const numberStyle = [
      styles.flexContainer,
      style,
    ]
  return (
    <View style={numberStyle} > 
      <View style={styles.flexItemNumber}>
        <Text color={'textPrimary'} fontWeight={'bold'}>{formattedNumber}</Text>
      </View>
      <View style={styles.flexItemTitle}>
        <Text color={'textSecondary'}>{title}</Text>
      </View>
    </View>
  );
};

export default Numbers;