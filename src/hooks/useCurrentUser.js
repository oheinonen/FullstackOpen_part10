import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews = false) => {
  const { data, error, loading } = useQuery(CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });
  return { data, error, loading };
};

export default useCurrentUser;