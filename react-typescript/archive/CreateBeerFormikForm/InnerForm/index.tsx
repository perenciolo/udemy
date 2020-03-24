import React from 'react';
import { FormikProps, Form } from 'formik';
// import Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { FormProps } from '..';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  ySpace: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default function InnerForm({
  dirty,
  errors,
  isSubmitting,
  isValid,
  handleChange,
  setFieldValue,
  setFieldTouched,
  touched,
  values
}: FormikProps<FormProps>) {
  const classes = useStyles();

  function change(name: string, e: React.ChangeEvent) {
    handleChange(e);
    setFieldTouched(name, true, false);
  }

  return (
    <>
      <Form className={classes.ySpace}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl
                className={classes.formControl}
                error={touched.name && Boolean(errors.name)}
              >
                <TextField
                  id="formik-form-name"
                  data-testid="name"
                  label="Beer name"
                  name="name"
                  error={touched.name && Boolean(errors.name)}
                  value={values.name}
                  onChange={change.bind(null, 'name')}
                />
                <FormHelperText>
                  {touched.name ? errors.name : 'Enter a new Beer name'}
                </FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl
                className={classes.formControl}
                error={touched.selectedType && Boolean(errors.selectedType)}
              >
                <InputLabel id="formik-form-type-select-label">
                  Type of Beer
                </InputLabel>
                <Select
                  labelId="formik-form-type-select-label"
                  id="formik-form-type-select"
                  value={values.selectedType}
                  onChange={event => {
                    const name = 'selectedType';
                    setFieldValue(name, event.target.value);
                    setFieldTouched(name, true, false);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Ale">Ale</MenuItem>
                  <MenuItem value="Lager">Lager</MenuItem>
                  <MenuItem value="Stout">Stout</MenuItem>
                </Select>
                <FormHelperText>
                  {touched.selectedType
                    ? errors.selectedType
                    : 'Choose a beer type'}
                </FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.hasCorn}
                      onChange={handleChange}
                      value="primary"
                      inputProps={{
                        'aria-label': 'primary checkbox',
                        name: 'hasCorn'
                      }}
                    />
                  }
                  label="Has Corn?"
                />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <FormGroup row>
              <FormControl
                className={classes.formControl}
                error={touched.ingredients && Boolean(errors.ingredients)}
              >
                <TextField
                  multiline
                  id="formik-form-ingredients-textfield"
                  label="Ingredients"
                  error={touched.ingredients && Boolean(errors.ingredients)}
                  helperText={
                    touched.ingredients
                      ? errors.ingredients
                      : 'Enter beer ingredients'
                  }
                  rows="4"
                  name="ingredients"
                  value={values.ingredients}
                  onChange={change.bind(null, 'ingredients')}
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <Button
                  disabled={!dirty || !isValid || isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </FormControl>
            </FormGroup>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
