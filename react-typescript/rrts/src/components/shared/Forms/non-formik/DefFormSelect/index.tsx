import React, { ChangeEvent } from 'react';
import {
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Select
} from '@material-ui/core';

export interface SelectTypeElm {
  name?: string | undefined;
  value: any;
}

interface DefFormSelectProps {
  label: string;
  name: string;
  value: string;
  options: { name: string; value: string }[];
  handler: (
    event: ChangeEvent<SelectTypeElm> | React.FocusEvent<HTMLSelectElement>
  ) => void;
  helperText?: string;
  error: boolean;
  errorState: string[];
}

export default function DefFormSelect({
  name,
  value,
  options,
  label,
  error,
  handler,
  errorState,
  helperText
}: DefFormSelectProps) {
  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={handler} onBlur={handler}>
        <MenuItem value="">none</MenuItem>
        {options.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.name}
          </MenuItem>
        ))}
      </Select>
      {(error &&
        errorState &&
        !!errorState.length &&
        errorState.map(errTxt => (
          <FormHelperText key={errTxt}>{errTxt}</FormHelperText>
        ))) ||
        (!!helperText && <FormHelperText>{helperText}</FormHelperText>)}
    </FormControl>
  );
}
