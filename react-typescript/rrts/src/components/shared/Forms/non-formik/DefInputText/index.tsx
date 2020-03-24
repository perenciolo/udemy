import React from 'react';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';

interface InputTextProps {
  name: string;
  label: string;
  value: string;
  helperText?: string;
  error: boolean;
  errorState: string[];
  multiline?: boolean;
  changeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function DefInputText({
  name,
  label,
  value,
  helperText,
  multiline,
  error,
  errorState,
  changeHandler
}: InputTextProps) {
  const otherProps = multiline ? { rows: 3, rowsMax: 10, multiline } : null;

  return (
    <FormControl error={error}>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={changeHandler}
        onBlur={changeHandler}
        error={error}
        {...otherProps}
      />
      {error
        ? errorState.map(error => (
            <FormHelperText key={error}>{error}</FormHelperText>
          ))
        : !!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
