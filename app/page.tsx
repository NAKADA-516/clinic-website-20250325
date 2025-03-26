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
import DoctorProfile from './components/DoctorProfile'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroVideo />
      
      {/* REASON セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>R E A S O N</h2>
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
          <h2 className={styles.mainTitle}>P I C K U P</h2>
          <p className={styles.subTitle}>おすすめメニュー</p>
        </div>
        <div className={styles.pickupContainer}>
          <Image
            src="/images/pickup/beginner-skincare.jpg"
            alt="初めてのスキンケア"
            width={400}
            height={300}
            className={styles.pickupImage}
          />
          <Image
            src="/images/pickup/small-face.jpg"
            alt="小顔治療"
            width={400}
            height={300}
            className={styles.pickupImage}
          />
          <Image
            src="/images/pickup/tightening.jpg"
            alt="引き締め治療"
            width={400}
            height={300}
            className={styles.pickupImage}
          />
        </div>
      </section>

      {/* MENU セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>M E N U</h2>
          <p className={styles.subTitle}>施術紹介</p>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>再生治療・美容注入</h3>
            <p className={styles.menuSubtitle}>
              自然な若返りと美しいフェイスライン
            </p>
            <div className={styles.menuList}>
              <Link href="/menu/exosome" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>幹細胞エクソソーム</div>
              </Link>
              <Link href="/menu/hyaluronic-acid" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ヒアルロン酸</div>
              </Link>
              <Link href="/menu/botox" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ボツリヌストキシン注射</div>
              </Link>
              <Link href="/menu/juvelook" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ジュベルック</div>
              </Link>
              <Link href="/menu/rejuran" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>リジュラン</div>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>美肌治療</h3>
            <p className={styles.menuSubtitle}>
              透明感とハリのある素肌へ
            </p>
            <div className={styles.menuList}>
              <Link href="/menu/dermapen" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ダーマペン</div>
              </Link>
              <Link href="/menu/potenza" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ポテンツァ</div>
              </Link>
              <Link href="/menu/laser-facial" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>レーザーフェイシャル</div>
              </Link>
              <Link href="/menu/electroporation" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>エレクトロポレーション</div>
              </Link>
              <Link href="/menu/massage-peel" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>マッサージピール トライアル</div>
              </Link>
              <Link href="/menu/hydrafacial" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ハイドラフェイシャル</div>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>美容注射・点滴・その他</h3>
            <p className={styles.menuSubtitle}>
              内側からの美容改善と健康増進
            </p>
            <div className={styles.menuList}>
              <Link href="/menu/white-drip" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>白玉点滴</div>
              </Link>
              <Link href="/menu/vitamin-c" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>高濃度ビタミンC点滴</div>
              </Link>
              <Link href="/menu/vitamin-c" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>ビタミンC注射</div>
              </Link>
              <Link href="/menu/garlic-injection" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>にんにく注射</div>
              </Link>
              <Link href="/menu/placenta-injection" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>プラセンタ注射</div>
              </Link>
              <Link href="/menu/nutrition" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>栄養療法（血液検査含む）</div>
              </Link>
              <div className={styles.menuListItem}>ケナコルト注射（炎症やアレルギー対策）</div>
            </div>
          </div>

          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>医療脱毛</h3>
            <p className={styles.menuSubtitle}>
              安全・確実な永久脱毛
            </p>
            <div className={styles.menuList}>
              <Link href="/menu/hair-removal" className={styles.menuListItemLink}>
                <div className={styles.menuListItem}>医療脱毛</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR セクション */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.mainTitle}>D O C T O R</h2>
          <p className={styles.subTitle}>院長紹介</p>
        </div>
        <DoctorProfile />
      </section>
    </div>
  );
}
