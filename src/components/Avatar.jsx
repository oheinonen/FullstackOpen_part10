import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },

});

const Avatar = ({ uri }) => {
  console.log(uri)
  return (
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{uri}} />
    </View>
  );
};

export default Avatar;