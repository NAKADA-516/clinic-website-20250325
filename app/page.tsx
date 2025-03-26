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
import { Metadata } from 'next';

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

          <div className={styles.pickupItem}>
            <div className={styles.imageWrapper}>
                  <Image
                    src="/images/pickup/tightening.jpg"
                    alt="タイトニングセット"
                    width={400}
                height={400}
                className={styles.pickupImage}
                    priority
                  />
            </div>
            <div className={styles.pickupContent}>
              <h3>タイトニングセット</h3>
              <p>ハイドラ + ポテンツァタイトニング + エレクトロポレーション</p>
              <p className={styles.price}>¥59,800<span className={styles.tax}>(税込)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>NEWS</h2>
          <p className={styles.subTitle}>お知らせ</p>
        </div>
        <div className={styles.newsContainer}>
          <div className={styles.newsItem}>
            <Link href="/news/nurse-recruitment-202403" className={styles.newsLink}>
              <div className={styles.newsDate}>2024.03</div>
              <div className={styles.newsTitle}>看護師募集のお知らせ</div>
            </Link>
          </div>

          <div className={styles.newsItem}>
            <Link href="/news/rejuran-derma" className={styles.newsLink}>
              <div className={styles.newsDate}>2024.03</div>
              <div className={styles.newsTitle}>リジュランデルマ導入のお知らせ</div>
                    </Link>
              </div>

          <div className={styles.newsItem}>
            <Link href="/news/website-renewal" className={styles.newsLink}>
              <div className={styles.newsDate}>2024.03</div>
              <div className={styles.newsTitle}>ウェブサイトリニューアルのお知らせ</div>
            </Link>
          </div>
                </div>
        <div className={styles.newsMore}>
          <Link href="/news" className={styles.moreButton}>
            もっと見る
                    </Link>
        </div>
      </section>

      {/* MENU セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>MENU</h2>
          <p className={styles.subTitle}>診療メニュー</p>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>
            <div className={styles.menuContent}>
              <h3 className={styles.menuTitle}>
                再生治療・美容注入
                <span className={styles.menuSubTitle}>（エイジングケア・ボリュームアップ）</span>
              </h3>
              <div className={styles.subMenuList}>
                <Link href="/menu/exosome" className={styles.subMenuItem}>幹細胞エクソソーム</Link>
                <Link href="/menu/hyaluronan" className={styles.subMenuItem}>ヒアルロン酸</Link>
                <Link href="/menu/botox" className={styles.subMenuItem}>ボツリヌストキシン注射</Link>
                <Link href="/menu/juvederm" className={styles.subMenuItem}>ジュベルック</Link>
                <Link href="/menu/rejuran" className={styles.subMenuItem}>リジュラン</Link>
              </div>
            </div>
                </div>

          <div className={styles.menuItem}>
            <div className={styles.menuContent}>
              <h3 className={styles.menuTitle}>
                美肌治療
                <span className={styles.menuSubTitle}>（肌質改善・毛穴・ハリ）</span>
              </h3>
              <div className={styles.subMenuList}>
                <Link href="/menu/dermapen" className={styles.subMenuItem}>ダーマペン</Link>
                <Link href="/menu/potenza" className={styles.subMenuItem}>ポテンツァ</Link>
                <Link href="/menu/laser-facial" className={styles.subMenuItem}>レーザーフェイシャル</Link>
                <Link href="/menu/electroporation" className={styles.subMenuItem}>エレクトロポレーション</Link>
                <Link href="/menu/massage-peel" className={styles.subMenuItem}>マッサージピール</Link>
                <Link href="/menu/hydrafacial" className={styles.subMenuItem}>ハイドラフェイシャル</Link>
              </div>
            </div>
                </div>

          <div className={styles.menuItem}>
            <div className={styles.menuContent}>
              <h3 className={styles.menuTitle}>
                点滴・内服・スキンケア
                <span className={styles.menuSubTitle}>（体内からの美容と健康）</span>
              </h3>
              <div className={styles.subMenuList}>
                <Link href="/menu/vitamin-c-drip" className={styles.subMenuItem}>高濃度ビタミンC点滴</Link>
                <Link href="/menu/vitamin-c-injection" className={styles.subMenuItem}>ビタミンC注射</Link>
                <Link href="/menu/garlic-injection" className={styles.subMenuItem}>にんにく注射</Link>
                <Link href="/menu/placenta-injection" className={styles.subMenuItem}>プラセンタ注射</Link>
                <Link href="/menu/white-drip" className={styles.subMenuItem}>白玉点滴</Link>
                <Link href="/menu/kenacort" className={styles.subMenuItem}>ケナコルト注射</Link>
                <Link href="/menu/nutrition" className={styles.subMenuItem}>栄養療法（血液検査含む）</Link>
              </div>
            </div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.menuContent}>
              <h3 className={styles.menuTitle}>
                脱毛
                <span className={styles.menuSubTitle}>（医療レーザー脱毛）</span>
              </h3>
              <div className={styles.subMenuList}>
                <Link href="/menu/partial-hair-removal" className={styles.subMenuItem}>部分脱毛</Link>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>DOCTOR</h2>
          <p className={styles.subTitle}>医師紹介</p>
          </div>
        <div className={styles.doctorContainer}>
          <div className={styles.doctorProfile}>
            <div className={styles.doctorImageWrapper}>
                  <Image
                    src="/images/doctor-new.jpg"
                alt="院長 吉川 とも子 医師"
                width={300}
                height={400}
                className={styles.doctorImage}
                    priority
                  />
                </div>
            <div className={styles.doctorInfo}>
              <h3 className={styles.doctorName}>院長 吉川 とも子</h3>
              <div className={styles.doctorCredentials}>
                <h4>【資格/所属】</h4>
                <ul>
                  <li>代々木駅前美容クリニック院長</li>
                  <li>ボトックスビスタ認定医</li>
                  <li>ジュビダームビスタ認定医</li>
                  <li>山口大学医学部卒</li>
                    </ul>
                  </div>
              <div className={styles.doctorDescription}>
                <p>代々木駅前美容クリニックは2023年6月に開業しました。以前は熊本県の美容皮膚科クリニックで院長を務めていましたが、2024年3月より当院の院長に就任させていただきました。</p>
                <p>診療科目は美容皮膚科です。美容エステサロンとは異なり、医師による美容面のお悩み相談にも細かく対応しているのが当院の特徴の一つです。また、内服や注射、スキンケア商品なども扱っております。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>ACCESS</h2>
          <p className={styles.subTitle}>アクセス</p>
        </div>
        {/* 既存のコンテンツ */}
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'ヨヨギビューティークリニック | 美容医療',
  description: '高品質な美容医療サービスを提供する当院では、最新の治療法と確かな技術で、あなたの美しさを引き出します。',
};
