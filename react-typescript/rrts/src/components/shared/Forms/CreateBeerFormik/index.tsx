import React from 'react';
import { Formik, Form } from 'formik';
import InputText from '../InputText';
import FormSelect from '../FormSelect';
import CheckBox from '../CheckBox';
import { Box, FormGroup, FormControl, Button } from '@material-ui/core';
import { object, string } from 'yup';
import FormSubmitBtn from '../FormSubmitBtn';

export interface CreateBeerFormikProps {
  name?: string;
  selectedType?: string;
  hasCorn?: boolean;
  ingredients?: string;
}

const initialValues: CreateBeerFormikProps = {
  name: '',
  selectedType: '',
  hasCorn: false,
  ingredients: ''
};

export default function CreateBeerFormik() {
  const typeOptions = [
    { name: 'Ipa', value: 'ipa' },
    { name: 'Stout', value: 'stout' }
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={object({
        name: string()
          .required('Please, give a valid beer name')
          .min(3)
          .max(255),
        selectedType: string().required('Please, select a beer type'),
        ingredients: string()
          .required('Please, fill beer ingredients')
          .min(3)
          .max(500)
      })}
      onSubmit={(values, formikHelpers) =>
        new Promise(resolve => {
          console.log(values);
          console.log(formikHelpers);
          resolve();
        })
      }
    >
      {({ values, errors, touched, isSubmitting, dirty }) => (
        <Form>
          <Box marginBottom={2} display="flex">
            <Box flex={1} mr={1}>
              <FormGroup>
                <InputText
                  name="name"
                  label="Beer Name"
                  error={Boolean(errors.name && touched.name)}
                />
              </FormGroup>
            </Box>
            <Box flex={1} ml={1}>
              <FormGroup>
                <FormSelect
                  name="selectedType"
                  options={typeOptions}
                  label="Beer Type"
                  error={Boolean(errors.selectedType && touched.selectedType)}
                />
              </FormGroup>
            </Box>
          </Box>
          <Box marginBottom={2}>
            <FormGroup>
              <CheckBox name="hasCorn" label="Has corn?" />
            </FormGroup>
          </Box>
          <Box marginBottom={2}>
            <FormGroup>
              <InputText
                name="ingredients"
                label="Ingredients"
                multiline
                error={Boolean(errors.ingredients && touched.ingredients)}
              />
            </FormGroup>
          </Box>
          <Box marginBottom={2}>
            <FormSubmitBtn
              isDisabled={
                isSubmitting || Boolean(Object.keys(errors).length) || !dirty
              }
            />
          </Box>
          <pre>{JSON.stringify(errors, null, 4)}</pre>
          <pre>{JSON.stringify(values, null, 4)}</pre>
        </Form>
      )}
    </Formik>
  );
}
