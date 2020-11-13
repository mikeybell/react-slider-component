import React, { useState } from 'react';
import { Movies } from './Movies';
import { Button } from './Button';
import './styles/slider.css';

const NUMBER_OF_PANELS = 5;
const TRANSLATE_WIDTH = 100;

export const Slider = () => {
  const [count, setCount] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setTranslateValue(translateValue + TRANSLATE_WIDTH)
    };
  };

  const goToNext = () => {
    if (count < NUMBER_OF_PANELS) {
      setCount(count + 1);
      setTranslateValue(translateValue - TRANSLATE_WIDTH)
    };
  };

  return (
    <section className="container">
      {count > 0 && (
        <Button prev onClick={goToPrev} />
      )}
      <Movies translateValue={translateValue} />
      {count < (NUMBER_OF_PANELS - 1) && (
        <Button next onClick={goToNext} />
      )}
    </section>
  );
}