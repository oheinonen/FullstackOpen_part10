import { View, StyleSheet } from 'react-native'
import SubHeading from './SubHeading'
import Text from './Text'
import theme from '../theme'
import Avatar from './Avatar'

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  innerContainer: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  subheading: {},
  description: {
    color: theme.colors.textSecondary,
  },
  language: {
    backgroundColor: theme.backgroundColors.primary,
    padding: 5,
    borderRadius: 10,
  },
})

const RepositoryHeader = ({ item }) => {
  const { fullName, language, description, ownerAvatarUrl } = item

  return (
    <View style={styles.outerContainer}>
      <Avatar uri={ownerAvatarUrl} />
      <View style={styles.innerContainer}>
        <SubHeading color={'textPrimary'} style={styles.subheading}>
          {fullName}
        </SubHeading>
        <Text color={'textSecondary'} style={styles.description}>
          {description}
        </Text>
        <Text color={'textTertiary'} style={styles.language}>
          {language}
        </Text>
      </View>
    </View>
  )
}

export default RepositoryHeader
