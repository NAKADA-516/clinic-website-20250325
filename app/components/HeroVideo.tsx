"use client";
import React from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>ヨヨギビューティークリニック</h1>
            <p className={styles.subtitle}>あなたの美しさを引き出す</p>
            <a href="/reservation" className={styles.ctaButton}>
              予約する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 