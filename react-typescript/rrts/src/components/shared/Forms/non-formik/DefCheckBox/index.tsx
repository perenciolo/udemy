import React from 'react';
import {
  FormControlLabel,
  CheckboxProps,
  Checkbox,
  FormControl
} from '@material-ui/core';

export interface DefCheckBoxProps extends CheckboxProps {
  name: string;
  checked: boolean;
  label: string;
  handler: () => void;
}

export default function DefCheckBox({
  name,
  label,
  checked,
  handler
}: DefCheckBoxProps) {
  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            name={name}
            checked={checked}
            onChange={handler}
            value="primary"
            inputProps={{
              'aria-label': 'primary checkbox',
              name
            }}
          />
        }
      />
    </FormControl>
  );
}
