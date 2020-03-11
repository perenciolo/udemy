import React from 'react';
import { Button } from '@material-ui/core';

// import { Container } from './styles';

interface IAlertBtnProps {
  btnTxt?: string;
  alertTxt?: string;
}

export default function AlertBtn({ btnTxt, alertTxt }: IAlertBtnProps) {
  function handleClick() {
    alert(alertTxt);
  }

  return (
    <>
      <Button onClick={handleClick} variant="contained" color="secondary">
        {btnTxt}
      </Button>
    </>
  );
}
