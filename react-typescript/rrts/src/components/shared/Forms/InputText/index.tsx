import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';

interface InputTextProps {
  name: string;
  label: string;
  error: boolean;
  multiline?: boolean;
}

export default function InputText({
  name,
  label,
  multiline,
  error
}: InputTextProps) {
  const otherProps = multiline ? { rows: 3, rowsMax: 10 } : null;

  return (
    <FormControl error={error}>
      <Field
        name={name}
        as={TextField}
        label={label}
        error={error}
        multiline={multiline}
        {...otherProps}
      />
      {error && (
        <FormHelperText>
          <ErrorMessage name={name} />
        </FormHelperText>
      )}
    </FormControl>
  );
}
