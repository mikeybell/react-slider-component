import React, { FunctionComponent } from 'react';
import { ReactComponent as ArrowNext } from './assets/arrow_next.svg';
import { ReactComponent as ArrowPrev } from './assets/arrow_prev.svg';
import './styles/button.css';

interface Props {
  prev?: boolean;
  next?: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const Button: FunctionComponent<Props> = ({
  prev,
  next,
  onClick,
  disabled
}) => {

  const disabledStyle = disabled ? "disabledStyle" : null;

  return (
    <button className={`button ${disabledStyle}`} onClick={!disabled ? onClick : undefined}>
      {prev && <ArrowPrev />}
      {next && <ArrowNext />}
    </button>
  )
}