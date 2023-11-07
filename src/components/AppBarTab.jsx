import { Pressable } from 'react-native'
import SubHeading from './SubHeading'
const AppBarTab = ({ name }) => {
  return (
    <Pressable>
      <SubHeading color={'textTertiary'}> {name} </SubHeading>
    </Pressable>
  )
}

export default AppBarTab
