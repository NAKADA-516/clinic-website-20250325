"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menuItem: string) => {
    setActiveSubmenu(activeSubmenu === menuItem ? null : menuItem);
  };

  const menuItems = [
    {
      label: 'ホーム',
      href: '/',
    },
    {
      label: 'クリニック紹介',
      href: '/clinic',
    },
    {
      label: 'メニュー・料金表',
      submenu: [
        { label: 'メニュー一覧', href: '/menu' },
        { label: '料金表', href: '/menu/price' },
        { label: '症例写真', href: '/menu/case-photos' },
      ],
    },
    {
      label: '診療日カレンダー',
      href: '/calendar',
    },
    {
      label: 'WEB予約',
      href: 'https://connect.kireipass.jp/clinics/yoyogi-biyou/menus',
      external: true,
    },
    {
      label: 'LINE',
      href: 'https://page.line.me/368ztrwg',
      external: true,
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          代々木駅前美容クリニック
        </Link>

        <button
          className={`${styles.hamburgerButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              {item.submenu ? (
                <>
                  <button
                    className={styles.menuLink}
                    onClick={() => toggleSubmenu(`menu-${index}`)}
                  >
                    {item.label}
                  </button>
                  <ul className={`${styles.submenu} ${activeSubmenu === `menu-${index}` ? styles.active : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.submenuItem}>
                        <Link href={subItem.href} className={styles.submenuLink}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 