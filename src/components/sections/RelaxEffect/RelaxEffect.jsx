import styles from './RelaxEffect.module.scss';
import { RELAX_EFFECT_CONTENT } from '../../../data/content';

import skinImg from '../../../assets/images/hero/12.png';
import liftingImg from '../../../assets/images/hero/11.png';
import logoImg from '../../../assets/images/hero/logo.svg';
import decor10Img from '../../../assets/images/hero/08.svg';
import decor11Img from '../../../assets/images/hero/05.svg';



export default function RelaxEffect() {
  return (
    <section className={styles.relax}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title} data-scroll>
            {RELAX_EFFECT_CONTENT.title}
          </h2>

          <div className={styles.main} data-scroll>
            <div className={styles.media}>
              <img src={skinImg} alt={RELAX_EFFECT_CONTENT.alts.skin} />
              <img
                src={liftingImg}
                alt={RELAX_EFFECT_CONTENT.alts.lifting}
                className={styles.mediaSecondary}
              />
              <img
                src={logoImg}
                alt={RELAX_EFFECT_CONTENT.alts.logo}
                className={styles.logo}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.text}>{RELAX_EFFECT_CONTENT.text}</p>
            </div>
          </div>
        </div>

        <div className={styles.decor}>
          <img
            src={decor10Img}
            alt=""
            className={`${styles.item} ${styles.itemTen}`}
            data-parallax
            data-speed="0.1"
          />
          <img
            src={decor11Img}
            alt=""
            className={`${styles.item} ${styles.itemEleven}`}
          />
        </div>
      </div>
    </section>
  );
}