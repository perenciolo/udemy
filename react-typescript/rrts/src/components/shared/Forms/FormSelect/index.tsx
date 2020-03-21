import React from 'react';
import { Field, ErrorMessage } from 'formik';
import {
  MenuItem,
  TextField,
  FormControl,
  FormHelperText
} from '@material-ui/core';

interface FormSelectProps {
  name: string;
  options: { name: string; value: string }[];
  label: string;
  error: boolean;
}

export default function FormSelect({
  name,
  options,
  label,
  error
}: FormSelectProps) {
  return (
    <FormControl error={error}>
      <Field name={name} as={TextField} select label={label} error={error}>
        {Boolean(options) &&
          options.length &&
          options.map((opt, index: number) => (
            <MenuItem key={String(index)} value={opt.value}>
              {opt.name}
            </MenuItem>
          ))}
      </Field>
      {error && (
        <FormHelperText>
          <ErrorMessage name="selectedType" />
        </FormHelperText>
      )}
    </FormControl>
  );
}
