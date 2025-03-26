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
            alt="代々木駅前美容クリニック"
            width={200}
            height={60}
            priority
          />
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link href="/about">当院について</Link></li>
            <li><Link href="/menu">診療メニュー</Link></li>
            <li><Link href="/doctor">医師紹介</Link></li>
            <li><Link href="/access">アクセス</Link></li>
            <li><Link href="/reservation" className={styles.reservationButton}>予約する</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 