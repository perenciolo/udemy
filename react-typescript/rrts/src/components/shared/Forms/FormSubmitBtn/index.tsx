import React from 'react';
import { FormGroup, Button } from '@material-ui/core';

interface FormSubmitBtnProps {
  isDisabled: boolean;
}

export default function FormSubmitBtn({ isDisabled }: FormSubmitBtnProps) {
  return (
    <FormGroup>
      <Button
        disabled={isDisabled}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </FormGroup>
  );
}
