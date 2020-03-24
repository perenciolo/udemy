import React, { useState } from 'react';
import { object, string, reach } from 'yup';

import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

import DefInputText from '../DefInputText';
import DefFormSelect, { SelectTypeElm } from '../DefFormSelect';
import DefCheckBox from '../DefCheckBox';
import DefButton from '../DefButton';

const schema = object().shape({
  name: string().required('Please, give a valid beer name'),
  selectedType: string().required('Please, select a beer type'),
  ingredients: string().required('Please, give beer ingredients')
});

export interface IBeerFormState {
  name: string;
  selectedType: string;
  hasCorn: boolean;
  ingredients: string;
}

export interface FormValidErr {
  [key: string]: { invalid: boolean; errors: string[] };
}

export default function CreateBeerForm() {
  const INITIAL_STATE: IBeerFormState = {
    name: '',
    selectedType: '',
    hasCorn: false,
    ingredients: ''
  };
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [errorState, setErrorState] = useState<FormValidErr>({});

  /**
   * Change state based on a given value.
   * @param key - formState key
   * @param value - formState value to be changed
   */
  async function handleChange(key: string, value: string | boolean) {
    setFormState({ ...formState, [key]: value });
    const yupOptions = {
      abortEarly: false,
      recursive: false,
      strict: false,
      stripUnknown: true
    };
    try {
      await reach(schema, key).validate(value, yupOptions);
      const validationErr: FormValidErr = {
        [key]: { invalid: false, errors: [] }
      };
      setErrorState({
        ...errorState,
        ...validationErr
      });
    } catch ({ errors }) {
      const validationErr: FormValidErr = { [key]: { invalid: true, errors } };
      setErrorState({
        ...errorState,
        ...validationErr
      });
    }
  }

  /**
   * Handle Form subimit method.
   * @param {React.FormEvent} event - Click event.
   */
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const isValidForm = schema.isValidSync(formState);

    if (isValidForm) {
      console.log(formState);
      setFormState(INITIAL_STATE);
      return;
    }
  }

  return (
    <>
      <form method="post">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormGroup>
              <DefInputText
                name="Beer name"
                label="Beer name"
                value={formState.name}
                changeHandler={event =>
                  handleChange('name', event.target.value)
                }
                helperText="Enter a new Beer name"
                error={errorState && errorState.name && errorState.name.invalid}
                errorState={
                  errorState && errorState.name ? errorState.name.errors : []
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <DefFormSelect
                name="selectedType"
                label="Select beer type"
                value={formState.selectedType}
                options={[
                  { name: 'Ale', value: 'ale' },
                  { name: 'stout', value: 'Stout' },
                  { name: 'Brew', value: 'brew' }
                ]}
                handler={(event: React.ChangeEvent<SelectTypeElm>) => {
                  if (typeof event.target.value === 'string') {
                    handleChange('selectedType', event.target.value);
                  }
                }}
                helperText="Select a beer type"
                error={
                  errorState &&
                  errorState.selectedType &&
                  errorState.selectedType.invalid
                }
                errorState={
                  errorState && errorState.selectedType
                    ? errorState.selectedType.errors
                    : []
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <DefCheckBox
                name="hasCorn"
                label="Has corn?"
                checked={formState.hasCorn}
                handler={() => handleChange('hasCorn', !formState.hasCorn)}
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <DefInputText
                multiline
                name="ingredients"
                label="Ingredients"
                value={formState.ingredients}
                changeHandler={event =>
                  handleChange('ingredients', event.target.value)
                }
                helperText="Enter beer ingredients"
                error={
                  errorState &&
                  errorState.ingredients &&
                  errorState.ingredients.invalid
                }
                errorState={
                  errorState && errorState.ingredients
                    ? errorState.ingredients.errors
                    : []
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <DefButton
                handler={event => handleSubmit(event)}
                disabled={!schema.isValidSync(formState)}
              ></DefButton>
            </FormGroup>
            <pre>{JSON.stringify(formState, null, 4)}</pre>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
