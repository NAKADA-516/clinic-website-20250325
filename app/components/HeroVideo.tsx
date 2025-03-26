"use client";
import React from 'react';
import Link from 'next/link';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          美しさと健康を追求する<br />
          代々木駅前美容クリニック
        </h1>
        <p className={styles.heroSubtitle}>
          最新の医療技術と確かな技術で、<br />
          あなたの理想の美しさを実現します。
        </p>
        <div className={styles.heroButtons}>
          <Link 
            href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
            className={styles.primaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            ご予約はこちら
          </Link>
          <Link href="/menu" className={styles.secondaryButton}>
            料金・メニュー
          </Link>
        </div>
      </div>
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
    </section>
  );
} 