import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/queries";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return mutate({ variables: { username, password } })
  };
  return [signIn, result];
};