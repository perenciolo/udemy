import { withFormik, FormikBag } from 'formik';
import * as Yup from 'yup';

import InnerForm from './InnerForm';

export interface FormProps {
  name?: string;
  selectedType?: string;
  hasCorn?: boolean;
  ingredients?: string;
}

const CreateBeerFormikForm = withFormik<FormProps, FormProps>({
  mapPropsToValues({ name, selectedType, hasCorn, ingredients }) {
    return {
      name: name || '',
      selectedType: selectedType || '',
      hasCorn: hasCorn || false,
      ingredients: ingredients || ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3)
      .max(255),
    selectedType: Yup.string().required(),
    ingredients: Yup.string()
      .required()
      .min(3)
      .max(500)
  }),
  handleSubmit: (
    values: FormProps,
    formikBag: FormikBag<FormProps, FormProps>
  ) => {
    console.log(values);
    formikBag.resetForm();
    formikBag.setSubmitting(false);
  }
})(InnerForm);

export default CreateBeerFormikForm;
