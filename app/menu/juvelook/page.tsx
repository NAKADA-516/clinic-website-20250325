"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './juvelook.module.css';

export default function JuvedermPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            ジュベルック注入治療
          </h1>
          <p className={styles.subtitle}>
            ポリ乳酸(PDLLA)による最新肌再生スキンブースター
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ジュベルックとは</h2>
            <div className={styles.card}>
              <p className="text-gray-700 leading-relaxed">
                美容大国の韓国製のジュベルックは【ポリ乳酸(PDLLA)】と【非架橋ヒアルロン酸】を組み合わせた製剤です。
              </p>
              <p className="text-gray-700 leading-relaxed">
                ポリ乳酸は、ジャガイモやトウモロコシ、さとうきびなどのでんぷんから抽出したエキスで生成されており、
                人体にも存在する乳酸を原料としているため、生体適合性に優れています。また手術用の縫合糸としても使用されています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                注入後は線維芽細胞を刺激し、自身のコラーゲン生成を促進します。その後1〜2年かけて、
                ゆっくりと水と二酸化炭素に分解されるため長期間にわたって効果が持続します。
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>期待できる効果</h2>
            <div className={styles.effectGrid}>
              <div className={styles.effectCard}>
                <h3 className={styles.effectTitle}>肌質改善</h3>
                <p className={styles.effectDescription}>
                  肌のハリや弾力の改善、毛穴の引き締めなど、総合的な肌質の向上が期待できます。
                </p>
              </div>
              <div className={styles.effectCard}>
                <h3 className={styles.effectTitle}>長期持続</h3>
                <p className={styles.effectDescription}>
                  3回の施術で約1年間の持続効果が期待できます。
                </p>
              </div>
              <div className={styles.effectCard}>
                <h3 className={styles.effectTitle}>肌トラブル改善</h3>
                <p className={styles.effectDescription}>
                  ニキビ跡や小じわ、肌の凹凸など、さまざまな肌トラブルに効果があります。
                </p>
              </div>
              <div className={styles.effectCard}>
                <h3 className={styles.effectTitle}>安全性</h3>
                <p className={styles.effectDescription}>
                  米国FDAと韓国KFDAの承認を受けており、皮内注射における安全性が認められています。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>治療方法</h2>
            <div className={styles.card}>
              <p className="text-gray-700 mb-6">
                当院では効果を最大限に発揮できる、水光注射で3ccを少量ずつを全顔に注入していきます。
              </p>
              
              <div className={styles.treatmentInfo}>
                <h3 className={styles.subTitle}>治療間隔</h3>
                <p className="text-gray-700 mb-6">
                  1ヶ月おきに3回目連続の施術をお勧めしており、その後、約1年間の持続効果が期待できます。
                </p>

                <h3 className={styles.subTitle}>ダウンタイム</h3>
                <ul className={styles.timelineList}>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                    <span>注入箇所の膨らみ：数時間で落ち着きます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                    <span>内出血：7～10日程かけて徐々に落ち着きます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                    <span>赤み・腫れ・浮腫み：稀に出る場合がございます。その場合2～3日程かけて徐々に落ち着きます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                    <span>アレルギー反応：稀に出る場合がございます。その場合7～10日程かけて徐々に落ち着きます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                    <span>メイク：当日から可能です</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>適応</h2>
            <div className={styles.card}>
              <ul className={styles.benefitGrid}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">お肌のハリ、弾力</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">毛穴の引き締め</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">毛穴のたるみ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">ニキビ跡</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">小じわ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B]"></span>
                  <span className="text-gray-700">肌の凹凸改善</span>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金表</h2>
            <div className={styles.priceCard}>
              <table className="w-full">
                <tbody>
                  <tr className={styles.priceRow}>
                    <td>1回</td>
                    <td className="text-right w-32">¥77,000</td>
                  </tr>
                  <tr className={styles.priceRow}>
                    <td>3回</td>
                    <td className="text-right w-32">¥198,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className={styles.subTitle}>オプション</h3>
              <div className={styles.priceCard}>
                <table className="w-full">
                  <tbody>
                    <tr className={styles.priceRow}>
                      <td>表面麻酔（クリーム）</td>
                      <td className="text-right w-32">¥5,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">※ 表示価格は全て税込みです。</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ジュベルックについての重要事項</h2>
            <div className={`${styles.card} ${styles.importantInfo}`}>
              <ul className={styles.timelineList}>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                  <span>未承認医薬品等：ジュベルックは医薬品医療機器等法上、未承認医療機器です</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                  <span>入手経路等：当院医師の判断の元、ネイチャーフォース・ジャパン社より個人輸入しています</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                  <span>国内の承認医薬品等の有無：同一の成分や性能を有する他の国内承認医薬品等はありません</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#40A99B] mt-2"></span>
                  <span>諸外国における安全性等に関する情報：ジュベルックは、米国FDAと韓国KFDAの承認を受けており皮内注射における安全性が認められています</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-16">
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className={styles.ctaButton}
            >
              無料カウンセリングを予約する
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 