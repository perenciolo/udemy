import React from 'react';
import { FormControlLabel, CheckboxProps, Checkbox } from '@material-ui/core';
import { useField } from 'formik';

export interface CheckBoxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label: string;
}

export default function CheckBox(props: CheckBoxProps) {
  const { label, value, name } = props;
  const [field] = useField({
    name,
    type: 'checkbox',
    value
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={label}
    />
  );
}
