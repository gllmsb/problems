import React from 'react';
import heroImage from '../../assets/images/hero.png';
import styles from './Hero.module.scss';

export const HeroSection = () => {
    return (
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <img src={heroImage} alt="Star Wars Hero" className={styles.heroImage} />
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to the Star Wars Universe</h1>
          <p className={styles.subtitle}>Explore the galaxy far, far away.</p>
          <button className={styles.ctaButton}>Explore Now</button>
        </div>
      </section>
    );
  };
