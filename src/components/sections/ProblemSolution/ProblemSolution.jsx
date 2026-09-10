import React, { useState } from 'react';
import styles from './ProblemSolution.module.scss';
import { PROBLEM_SOLUTION_CONTENT } from '../../../data/content';

import emojiImg from '../../../assets/images/hero/emoji.svg';
import starsImg from '../../../assets/images/hero/stars.svg';
import item09Img from '../../../assets/images/hero/09.svg';
import afterImg from '../../../assets/images/hero/after.jpg';
import beforeImg from '../../../assets/images/hero/before.jpg';
import logoImg from '../../../assets/images/hero/logo.svg';
import decor07Img from '../../../assets/images/hero/07.svg';

export default function ProblemSolution() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <section className={styles.problemSolution}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title} data-scroll>
            {PROBLEM_SOLUTION_CONTENT.title}
          </h2>

          <div className={styles.cards}>
              {/* Блок з проблемою */}
              <div className={styles.cardProblem} data-scroll>
                <p className={styles.cardText}>
                  {PROBLEM_SOLUTION_CONTENT.problemText}
                </p>
                <div className={styles.cardEmoji}>
                  <img src={emojiImg} alt={PROBLEM_SOLUTION_CONTENT.alts.emoji} />
                </div>
              </div>

              {/* Блок з рішенням */}
              <div className={styles.cardSolution} data-scroll>
                <p className={styles.cardText}>
                  {PROBLEM_SOLUTION_CONTENT.solutionText}
                </p>
                <div className={styles.cardStars}>
                  <img src={starsImg} alt={PROBLEM_SOLUTION_CONTENT.alts.stars} />
                </div>
                <img src={item09Img} alt="" className={styles.cardItemTen} />
              </div>
            </div>

          {/* Слайдер порівняння До/Після */}
          <div className={styles.comparison} data-scroll>
            <img
              src={afterImg}
              alt={PROBLEM_SOLUTION_CONTENT.alts.after}
              className={styles.imgAfter}
            />

            <div
              className={styles.overlay}
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt={PROBLEM_SOLUTION_CONTENT.alts.before}
                className={styles.imgBefore}
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className={styles.slider}
              id="slider"
              aria-label="Порівняння фото до і після"
            />

            <div
              className={styles.line}
              style={{ left: `${sliderPos}%` }}
            >
              <div className={styles.sliderBtn}>
                <span>||</span>
              </div>
            </div>

            <img
              src={logoImg}
              alt={PROBLEM_SOLUTION_CONTENT.alts.logo}
              className={styles.logo}
            />
          </div>
        </div>
        </div>

      <div className={styles.decor}>
        <img
          src={decor07Img}
          alt=""
          className={`${styles.decorItem} ${styles.itemNine}`}
          data-parallax
          data-speed="0.1"
        />
      </div>
    </section>
  );
}