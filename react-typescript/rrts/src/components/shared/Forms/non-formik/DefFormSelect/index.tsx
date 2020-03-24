import React, { ChangeEvent, ReactNode } from 'react';
import {
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Select
} from '@material-ui/core';

export interface SelectTypeElm {
  name?: string | undefined;
  value: unknown;
}

interface DefFormSelectProps {
  label: string;
  name: string;
  value: string;
  options: { name: string; value: string }[];
  handler: (event: ChangeEvent<SelectTypeElm>, child: ReactNode) => void;
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
      <Select name={name} value={value} onChange={handler}>
        <MenuItem value="-1">
          <em>None</em>
        </MenuItem>
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
