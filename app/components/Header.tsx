"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="ヨヨギビューティークリニック"
            width={200}
            height={50}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/menu">メニュー</Link></li>
            <li><Link href="/clinic">クリニック案内</Link></li>
            <li><Link href="/news">お知らせ</Link></li>
            <li><Link href="/calendar">カレンダー</Link></li>
            <li><Link href="/reservation" className={styles.reservationButton}>予約する</Link></li>
          </ul>
        </nav>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
} 