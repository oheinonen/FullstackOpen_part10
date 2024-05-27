import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { useReview } from '../hooks/useReview';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: theme.backgroundColors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

export const ReviewFormContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
    text: yup.string(),
  });

  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '',
        text: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput name="text" placeholder="Review" multiline />
          <Pressable onPress={handleSubmit} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create a review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const ReviewForm = () => {
  const [review] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data, error } = await review({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      if (error) {
        console.log(error);
      } else {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.error(e);
    }
    return;
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};
export default ReviewForm;
