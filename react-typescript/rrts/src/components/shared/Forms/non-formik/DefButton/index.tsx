import React from 'react';
import { FormControl, Button } from '@material-ui/core';

interface DefButtonProps {
  handler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
}

export default function DefButton({ handler, disabled }: DefButtonProps) {
  return (
    <FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handler}
        disabled={disabled}
      >
        Submit
      </Button>
    </FormControl>
  );
}
