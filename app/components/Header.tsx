"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="ヨヨギビューティークリニック"
            width={200}
            height={50}
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/menu" className={styles.navLink}>
                メニュー
              </Link>
            </li>
            <li>
              <Link href="/calendar" className={styles.navLink}>
                診療時間
              </Link>
            </li>
            <li>
              <Link href="/access" className={styles.navLink}>
                アクセス
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 