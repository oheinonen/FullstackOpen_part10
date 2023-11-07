import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import SubHeading from './SubHeading';

const AppBarTab = ({ name, to }) => {
  console.log(to);
  return (
    <Pressable>
      <Link to={to}>
        <SubHeading color="textTertiary">{name}</SubHeading>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
