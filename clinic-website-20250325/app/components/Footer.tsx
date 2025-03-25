'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* クリニック情報セクション */}
        <div className={styles.clinicInfo}>
          <div className={styles.infoContainer}>
            <div className={styles.logoArea}>
              <div className={styles.clinicName}>
                <h3 className={styles.clinicNameMain}>医療法人社団 BYS</h3>
                <h2 className={styles.clinicNameSub}>代々木駅前美容クリニック</h2>
              </div>
              <p className={styles.address}>
                〒151-0051<br />
                東京都渋谷区千駄ヶ谷5-20-16<br />
                Face代々木
              </p>
              <p className={styles.access}>JR代々木駅 東口徒歩1分</p>
              <a href="tel:03-5315-0201" className={styles.phone}>
                <span className={styles.phoneIcon}>📞</span>
                03-5315-0201
              </a>
              <p className={styles.hours}>
                診療時間 11:00〜19:00<br />
                休診日：不定休
              </p>
            </div>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.7364852799415!2d139.703074!3d35.68349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188def68c2f5cb%3A0x5d6b61e536a418f!2z5Luj44CF5pyo6aeF5YmN576O5a6544Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1742542610708!5m2!1sja!2sjp"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              />
            </div>
          </div>
        </div>

        {/* ナビゲーションセクション */}
        <div className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h3>CLINIC</h3>
            <ul>
              <li><Link href="/clinic">クリニック紹介</Link></li>
              <li><Link href="/doctor">ドクター紹介</Link></li>
              <li><Link href="/access">アクセス</Link></li>
              <li><Link href="/cases">症例写真</Link></li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h3>MENU</h3>
            <ul>
              <li><Link href="/menu#beauty">美容皮膚科施術</Link></li>
              <li><Link href="/menu#injection">注入・再生治療</Link></li>
              <li><Link href="/menu#iv">点滴・注射</Link></li>
              <li><Link href="/menu#hair-removal">医療脱毛</Link></li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h3>RESERVATION</h3>
            <ul>
              <li>
                <a 
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.reserveButton}
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
                  LINE予約
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SNSとプライバシーポリシー */}
        <div className={styles.footerBottom}>
          <div className={styles.sns}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.snsLink}>Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.snsLink}>X（Twitter）</a>
          </div>
          <div className={styles.policy}>
            <Link href="/privacy">プライバシーポリシー</Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className={styles.copyright}>
          <p>© 2024 代々木駅前美容クリニック All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 