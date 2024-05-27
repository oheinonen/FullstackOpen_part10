import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/queries";

export const useReview = () => {

  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ ownerName, repositoryName, rating, text }) => await mutate({ variables: { ownerName, repositoryName, rating, text } })

  return [review, result];
};