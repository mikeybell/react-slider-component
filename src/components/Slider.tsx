import React, { useState, FunctionComponent } from 'react';
import { Movies } from './Movies';
import { Button } from './Button';
import './styles/slider.css';

const NUMBER_OF_PANELS = 4;
const TRANSLATE_WIDTH = 100;

export const Slider: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrev = (): void => {
    if (count > 0) {
      setCount(count - 1);
      setTranslateValue(translateValue + TRANSLATE_WIDTH)
    };
  };

  const goToNext = (): void => {
    if (count < NUMBER_OF_PANELS) {
      setCount(count + 1);
      setTranslateValue(translateValue - TRANSLATE_WIDTH)
    };
  };

  return (
    <>
      <h1 className="header">Trending</h1>
      <section className="container">
        <Button
          prev
          disabled={count === 0 }
          onClick={goToPrev}
        />
        <Movies translateValue={translateValue} />
        <Button
          next
          disabled={count === (NUMBER_OF_PANELS - 1)}
          onClick={goToNext}
        />
      </section>
    </>
  );
}