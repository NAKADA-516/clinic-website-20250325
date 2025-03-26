"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './page.module.css'
import HeroVideo from './components/HeroVideo'
import PickupMenu from './components/PickupMenu'
import DoctorProfile from './components/DoctorProfile'
import Header from './components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroVideo />
      
      {/* REASON セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>REASON</h2>
          <p className={styles.subTitle}>代々木駅前美容クリニックが選ばれる3つの理由</p>
        </div>
        <div className={styles.reasonContainer}>
          <div className={styles.reasonItem}>
            <div className={styles.reasonNumber}>01</div>
            <h3 className={styles.reasonTitle}>女医による丁寧な診療</h3>
            <p className={styles.reasonText}>
              女性ならではの繊細な視点で、お客様一人一人に合わせた最適な治療プランをご提案いたします。
            </p>
          </div>

          <div className={styles.reasonItem}>
            <div className={styles.reasonNumber}>02</div>
            <h3 className={styles.reasonTitle}>確かな技術と実績</h3>
            <p className={styles.reasonText}>
              最新の技術と豊富な経験を活かし、安全で効果的な施術をご提供いたします。
            </p>
          </div>

          <div className={styles.reasonItem}>
            <div className={styles.reasonNumber}>03</div>
            <h3 className={styles.reasonTitle}>駅近で通いやすい</h3>
            <p className={styles.reasonText}>
              JR代々木駅から徒歩1分。お仕事帰りやお買い物のついでにも気軽に通えます。
            </p>
          </div>
        </div>
      </section>

      {/* PICKUP セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>PICK UP</h2>
          <p className={styles.subTitle}>おすすめメニュー</p>
        </div>
        <div className={styles.pickupContainer}>
          <div className={styles.pickupItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/pickup/beginner-skincare.jpg"
                alt="初めて美肌セット"
                width={400}
                height={400}
                className={styles.pickupImage}
                priority
              />
            </div>
            <div className={styles.pickupContent}>
              <h3>初めて美肌セット</h3>
              <p>ハイドラフェイシャル + エレクトロポレーション</p>
              <div className={styles.priceBox}>
                <p className={styles.originalPrice}>¥28,000</p>
                <p className={styles.price}>¥20,000<span className={styles.tax}>(税込)</span></p>
              </div>
            </div>
          </div>

          <div className={styles.pickupItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/pickup/small-face.jpg"
                alt="ヒアルロン酸小顔セット"
                width={400}
                height={400}
                className={styles.pickupImage}
                priority
              />
            </div>
            <div className={styles.pickupContent}>
              <h3>ヒアルロン酸小顔セット</h3>
              <p>ヒアルロン酸3本</p>
              <p className={styles.price}>¥210,000<span className={styles.tax}>(税込)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>DOCTOR</h2>
          <p className={styles.subTitle}>院長紹介</p>
        </div>
        <DoctorProfile />
      </section>
    </div>
  );
}
