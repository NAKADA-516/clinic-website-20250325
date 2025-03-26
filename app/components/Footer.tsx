'use client';
import React from 'react';
import styles from '../page.module.css';
import { FaPhone, FaClock, FaMapMarkerAlt, FaTrain } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <h2 className={styles.clinicName}>医療法人社団BYS<br />代々木駅前美容クリニック</h2>
          
          <div className={styles.address}>
            <div className={styles.addressHeader}>
              <FaMapMarkerAlt />
              所在地・アクセス
            </div>
            〒151-0051<br />
            渋谷区千駄ヶ谷5-20-16 Face代々木<br />
            JR代々木駅東口徒歩1分
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactHeader}>
              <FaPhone />
              お問い合わせ
            </div>
            <div className={styles.phone}>
              03-5315-0201
            </div>
          </div>

          <div className={styles.businessHours}>
            <h3 className={styles.businessHoursTitle}>
              <FaClock />
              診療時間
            </h3>
            <div className={styles.hours}>
              11:00 ~ 19:00（不定休）<br />
              ※休診日はお電話でご確認ください
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.3682865766182!2d139.70165704951975!3d35.683487836638434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188def68c2f5cb%3A0x5d6b61e536a418f!2z5Luj44CF5pyo6aeF5YmN576O5a6544Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1742964044788!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 