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
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png?v=2"
              alt="代々木駅前美容クリニック"
              width={110}
              height={110}
              priority
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <Link href="/" className={styles.clinicName}>
            <p className={styles.organization}>医療法人社団BYS</p>
            <h2 className={styles.clinicTitle}>代々木駅前美容クリニック</h2>
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/clinic">クリニック紹介</Link></li>
            <li><Link href="/menu">メニュー・料金表</Link></li>
            <li><Link href="/calendar">診療日カレンダー</Link></li>
            <li>
              <a 
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.reservationButton}
              >
                WEB予約
              </a>
            </li>
            <li>
              <a 
                href="https://page.line.me/368ztrwg" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.lineButton}
              >
                LINE
              </a>
            </li>
            <li className={styles.phoneNumber}>
              <a href="tel:03-5315-0201">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '4px', verticalAlign: 'middle' }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                03-5315-0201
              </a>
            </li>
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