import React from 'react';

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
      <button onClick={handleClick}>{btnTxt}</button>
    </>
  );
}
