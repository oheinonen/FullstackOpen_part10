import { View, Text } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositoryById from '../hooks/useRepository';

export const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepositoryById(id);

  if (loading) return <Text>loading repository...</Text>;
  if (error)
    return <Text>error happened when fetching single repository...</Text>;

  return (
    <View>
      <RepositoryItem item={repository.repository} standalone={true} />
    </View>
  );
};
