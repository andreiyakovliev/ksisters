import React, { useState, useCallback } from 'react';
import styles from './ProblemSolutionSlider.module.scss';

export default function ProblemSolutionSlider({ beforeImg, afterImg }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleInput = useCallback((e) => {
    setSliderPos(e.target.value);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageBefore}>
        <img src={beforeImg} alt="До" />
      </div>

      <div
        className={styles.imageAfterOverlay}
        style={{ width: `${sliderPos}%` }}
      >
        <img src={afterImg} alt="Після" />
      </div>

      <div
        className={styles.line}
        style={{ left: `${sliderPos}%` }}
      />

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleInput}
        className={styles.rangeInput}
      />
    </div>
  );
}