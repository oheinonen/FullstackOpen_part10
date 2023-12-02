import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = () => {
  const { data, error, loading } = useQuery(CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  });
  return { data, error, loading };
};

export default useCurrentUser;