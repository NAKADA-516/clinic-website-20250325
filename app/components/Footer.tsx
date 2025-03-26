'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="ヨヨギビューティークリニック"
              width={200}
              height={50}
            />
          </Link>
          <p className={styles.address}>
            〒151-0053<br />
            東京都渋谷区代々木1-1-1<br />
            JR代々木駅から徒歩1分
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>メニュー</h3>
          <ul>
            <li><Link href="/menu">施術メニュー</Link></li>
            <li><Link href="/menu/price">料金案内</Link></li>
            <li><Link href="/menu/case-photos">症例写真</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>クリニック案内</h3>
          <ul>
            <li><Link href="/clinic">当院について</Link></li>
            <li><Link href="/calendar">診療時間</Link></li>
            <li><Link href="/access">アクセス</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>お知らせ</h3>
          <ul>
            <li><Link href="/news">お知らせ一覧</Link></li>
            <li><Link href="/news/website-renewal">サイトリニューアル</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 ヨヨギビューティークリニック All Rights Reserved.</p>
      </div>
    </footer>
  );
} 