"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './laser-facial.module.css';

export default function LaserFacialPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-[#f8fcfc]">
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            {/* Title Section */}
            <div className={styles.titleSection}>
              <h1 className={styles.mainTitle}>CLARITY II</h1>
              <p className={styles.subTitle}>レーザーフェイシャル</p>
              <p className={styles.description}>
                二つの波長を利用した最新医療レーザー機器で、様々な肌トラブルにアプローチ
              </p>
            </div>
            
            {/* Hero Image */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImage}>
                <div className={styles.imagePlaceholder}>
                  <p>クラリティII レーザーフェイシャルのイメージ画像</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          {/* Introduction Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              二つの波長を利用した最新医療レーザー機器
            </h2>
            
            <div className={styles.textContent}>
              <p className="text-gray-700 leading-relaxed mb-4">
                ルートロニック社で開発された最新式レーザーで、YAGレーザー1064nmとロングパルスアレキサンドライトレーザー755nmの二つの波長を利用した最新医療レーザー機器です。黄色人種のアジア人に合わせて開発された米国FDA認証機器であるため、日本人にも合う機器と言えます。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                2種類のレーザー（熱破壊式のアレキサンドライトレーザーとYAGレーザー）によって、＜医療脱毛＞＜若返り・美白、美肌効果＞＜血管治療＞など様々な症例に対応でき、素早く安全に施術が可能なとてもスペックの高いレーザー機器です。
              </p>
            </div>
            
            {/* Dual Wave Cards */}
            <div className={styles.dualWaveCards}>
              <div className={styles.waveCard}>
                <h3 className={styles.waveCardTitle}>アレキサンドライトレーザー<br/>755nm</h3>
                <p className={styles.waveCardDescription}>主にしみの原因であるメラニンに反応して、しみ・そばかすやくすみなどを改善。顔のうぶ毛の除毛効果も。</p>
              </div>
              <div className={styles.waveCard}>
                <h3 className={styles.waveCardTitle}>Nd:YAGレーザー<br/>1064nm</h3>
                <p className={styles.waveCardDescription}>お肌の深層部まで届き、コラーゲン等の生成を促進。小じわの改善やキメハリを整え、赤ら顔などの治療にも有効。</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>クラリティⅡの特徴</h2>
            <div className={styles.featuresGrid}>
              {[
                {
                  title: "二つの波長による相乗効果",
                  desc: "アレキサンドライトレーザー755nmによる美肌効果・Nd:YAGレーザー1064nmによる若返り美肌効果",
                  icon: "✨"
                },
                {
                  title: "高速施術",
                  desc: "最大スポットサイズで素早い施術が可能です",
                  icon: "⚡"
                },
                {
                  title: "痛みの少ない安全な施術",
                  desc: "エアー式冷却装置で痛みが少なく安全な施術を実現します",
                  icon: "❄️"
                },
                {
                  title: "インテリトラック技術",
                  desc: "施術の正確度と速度が早く、以前の2倍のスピードで施術が可能です。肌の温度をモニタリングしながら施術するためより安全です",
                  icon: "🔍"
                }
              ].map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Recommendations Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>こんな方におすすめ</h2>
            <div className={styles.recommendationsList}>
              {[
                "しみ・そばかすが気になる方",
                "血管拡張症や酒さ・赤ら顔でお悩みの方",
                "お肌のキメ・ハリを整えたい方",
                "毛穴の開き・黒ずみが気なる方",
                "ニキビ・ニキビ痕でお悩みの方"
              ].map((item, index) => (
                <div key={index} className={styles.recommendationItem}>
                  <div className={styles.recommendationIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={styles.recommendationText}>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Details */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術について</h2>
            <div className={styles.treatmentDetails}>
              <h3 className={styles.treatmentTitle}>クラリティ リジュビネーション</h3>
              
              <p className={styles.treatmentDescription}>
                アレキサンドライトレーザーとYAGレーザーの2波長を使い分け、総合的に肌質を改善させていきます。
              </p>
              
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentCard}>
                  <h4 className={styles.treatmentCardTitle}>アレキサンドライトレーザーの効果</h4>
                  <p className={styles.treatmentCardDescription}>
                    主に、しみの原因であるメラニンに反応して、しみ・そばかすやくすみなどを改善していきます。レーザーが毛根のメラニンを破壊することにより除毛効果も得られます。顔のうぶ毛がなくなることで、毛穴の黒ずみが改善し、肌のトーンが明るくなります。
                  </p>
                </div>
                <div className={styles.treatmentCard}>
                  <h4 className={styles.treatmentCardTitle}>YAGレーザーの効果</h4>
                  <p className={styles.treatmentCardDescription}>
                    お肌の深層部まで届くレーザーでメラニンやヘモグロビンや水分に反応します。深層部に熱刺激を与える事で、コラーゲン等の生成を促進、小じわの改善やキメハリを整えます。またヘモグロビンとも反応するため赤ら顔などの治療にも有効です。ニキビやニキビ跡にも効果的で、毛穴を引き締め（毛穴収縮作用）キメを整え肌質を改善します。
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment Summary Table */}
            <div className={styles.treatmentTable}>
              <table className={styles.table}>
                <tbody>
                  {[
                    { label: "施術時間", value: "治療時間は両頬で10～20分程度。" },
                    { label: "施術頻度・回数", value: "治療回数は経過を見ながら医師よりご提案させていただきます。" },
                    { label: "リスク・副作用", value: "3～4日くらいは熱さ、赤み、腫れがある場合があります。また一週間ぐらいは小さいかさぶたができる場合が、自然に落ちるようにしてください。異常を感じた場合は医師またはスタッフにお申し出ください。" },
                    { label: "注意事項", value: "外出時は日焼け止めをよく塗るようにしてください。日焼け止めや帽子などで紫外線対策を行ってください。また保湿もしっかりするようにしてください。その他、医師の指示があればそれに従ってください。妊娠中の方、炎症のある箇所、その他医師が不適当と認めた方は施術できません。シャワーは当日から可能ですが、強い刺激を与えないでください。" }
                  ].map((row, index, array) => (
                    <tr 
                      key={index} 
                      className={index !== array.length - 1 ? styles.tableRow : ""}
                    >
                      <td className={styles.tableCell}>
                        {row.label}
                      </td>
                      <td className={styles.tableCell}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金表</h2>
            <div className={styles.pricingTable}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>クラリティⅡ レーザーフェイシャル料金</h3>
              </div>
              
              <div className={styles.pricingContent}>
                <div className={styles.pricingTableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr className={styles.tableHeader}>
                        <th className={styles.tableHeaderCell}>メニュー</th>
                        <th className={styles.tableHeaderCell}>料金（税込）</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { menu: "トライアル", price: "¥15,400" },
                        { menu: "１回", price: "¥22,000" },
                        { menu: "６回コース", price: "¥110,000" },
                        { menu: "１２回コース", price: "¥211,200" },
                        { menu: "W照射 トライアル", price: "¥23,100" },
                        { menu: "W照射 １回", price: "¥33,000" },
                        { menu: "W照射 ６回コース", price: "¥165,000" },
                        { menu: "W照射 １２回コース", price: "¥316,800" }
                      ].map((item, index, array) => (
                        <tr 
                          key={index} 
                          className={index !== array.length - 1 ? styles.tableRow : ""}
                        >
                          <td className={styles.tableCell}>{item.menu}</td>
                          <td className={styles.tableCell}>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className={styles.pricingFooter}>
                  <p>※ すべて税込価格です</p>
                  <p>※ W照射は、アレキサンドライトレーザーとYAGレーザーの両方を照射する施術です</p>
                  <p>※ コース有効期限：6回コース12ヶ月、12回コース24ヶ月</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>ご予約・ご相談について</h2>
              <p className={styles.ctaDescription}>
                クラリティⅡレーザーフェイシャルに関するご質問やお悩みは、カウンセリングの際に担当医師にご相談ください。お肌の状態を確認した上で、適切な治療計画をご提案させていただきます。
              </p>
              
              <div className={styles.ctaButton}>
                <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className={styles.ctaLink}
                >
                  カウンセリング予約
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 