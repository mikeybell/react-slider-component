import { ReactComponent as ArrowNext } from './assets/arrow_next.svg';
import { ReactComponent as ArrowPrev } from './assets/arrow_prev.svg';
import './styles/button.css';

export const Button = ({ prev, next, onClick }) => {
  const buttonStyle = prev ? "button--prev" : "button--next";

  return (
    <button className={`button ${buttonStyle}`} onClick={onClick}>
      {prev && <ArrowPrev />}
      {next && <ArrowNext />}
    </button>
  )
}