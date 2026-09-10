import styles from './ProductHero.module.scss';
import { HERO_CONTENT } from '../../../data/content';

import img11 from '../../../assets/images/hero/11.png';
import img04 from '../../../assets/images/hero/04.png';
import img09 from '../../../assets/images/hero/09.svg';
import img10 from '../../../assets/images/hero/10.png';
import img03 from '../../../assets/images/hero/03.svg';
import logoSvg from '../../../assets/images/hero/logo.svg';
import img05 from '../../../assets/images/hero/05.svg';
import img06 from '../../../assets/images/hero/06.svg';



export default function ProductHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.badge}>{HERO_CONTENT.badge}</div>
            <h1 className={styles.title}>{HERO_CONTENT.title}</h1>
            <p className={styles.desc}>{HERO_CONTENT.description}</p>
            <button type="button" className={styles.btn}>
              {HERO_CONTENT.buttonText}
            </button>
          </div>

          <div className={styles.media}>
            <img
              src={img11}
              alt={HERO_CONTENT.alts.productBottle}
              className={styles.imgPrimary}
            />
            <img
              src={img04}
              alt={HERO_CONTENT.alts.productTexture}
              className={styles.imgSecondary}
            />
            <img src={img09} alt="" className={styles.imgDecor} />
          </div>
        </div>

        <img src={img10} alt="" className={styles.line} />
      </div>

      <div className={styles.decor}>
        <img src={img03} alt="" className={`${styles.item} ${styles.itemOne}`} />
        <img
          src={img03}
          alt=""
          className={`${styles.item} ${styles.itemTwo}`}
          data-parallax
          data-speed="0.3"
        />
        <div
          className={`${styles.item} ${styles.itemThree}`}
          data-parallax
          data-speed="0.15"
        >
          <img src={img03} alt="" />
          <img src={logoSvg} alt={HERO_CONTENT.alts.logo} className={styles.itemLogo} />
        </div>
        <img
          src={img03}
          alt=""
          className={`${styles.item} ${styles.itemFour}`}
          data-parallax
          data-speed="0.1"
        />
        <img
          src={img03}
          alt=""
          className={`${styles.item} ${styles.itemFive}`}
          data-parallax
          data-speed="0.2"
        />
        <img
          src={img05}
          alt=""
          className={`${styles.item} ${styles.itemSeven}`}
          data-parallax
          data-speed="0.1"
        />
        <img
          src={img06}
          alt=""
          className={`${styles.item} ${styles.itemEight}`}
          data-parallax
          data-speed="0.1"
        />
      </div>
    </section>
  );
}