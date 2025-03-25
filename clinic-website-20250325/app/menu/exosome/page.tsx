"use client";

import styles from './exosome.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function ExosomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>幹細胞エクソソーム</h1>
        <p className={styles.subtitle}>最先端の再生医療による若返り治療</p>
      </section>

      <section className={styles.overview}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>幹細胞エクソソームとは</h2>
          <p className={styles.description}>
            幹細胞エクソソームは、幹細胞から分泌される細胞小胞で、細胞間のコミュニケーションを担う重要な役割を果たします。
            成長因子やサイトカインなどの有効成分を含み、肌の再生や若返りを促進する効果が期待できます。
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/treatments/exosome.jpg"
              alt="幹細胞エクソソーム治療"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>期待できる効果</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <h3>肌質改善</h3>
            <p>キメを整え、ハリと弾力のある肌へ</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>シワ・たるみの改善</h3>
            <p>コラーゲン生成を促進し、若々しい肌へ</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>傷跡の改善</h3>
            <p>肌の再生を促進し、傷跡を目立ちにくく</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>毛髪の成長促進</h3>
            <p>髪の毛の成長サイクルを活性化</p>
          </div>
        </div>
      </section>

      <section className={styles.treatment}>
        <h2 className={styles.sectionTitle}>施術について</h2>
        <div className={styles.treatmentInfo}>
          <div className={styles.infoBlock}>
            <h3>施術時間</h3>
            <p>約30〜40分</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>施術間隔</h3>
            <p>2〜4週間に1回</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>ダウンタイム</h3>
            <p>ほぼなし</p>
          </div>
        </div>
      </section>

      <section className={styles.price}>
        <h2 className={styles.sectionTitle}>料金</h2>
        <div className={styles.priceTable}>
          <div className={styles.priceItem}>
            <h3>1回</h3>
            <p className={styles.priceValue}>¥80,000</p>
          </div>
          <div className={styles.priceItem}>
            <h3>5回コース</h3>
            <p className={styles.priceValue}>¥400,000</p>
            <p className={styles.priceNote}>1回分お得な料金設定</p>
          </div>
        </div>
        <p className={styles.taxNote}>※ 表示価格は全て税込みです。</p>
      </section>

      <section className={styles.caution}>
        <h2 className={styles.sectionTitle}>注意事項</h2>
        <ul className={styles.cautionList}>
          <li>施術当日の激しい運動は避けてください</li>
          <li>施術後24時間は洗顔や化粧はお控えください</li>
          <li>施術後1週間は日光を避け、日焼け止めを必ず使用してください</li>
          <li>妊娠中・授乳中の方は施術をお控えください</li>
        </ul>
      </section>

      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>よくあるご質問</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3>エクソソーム治療を受けられない場合はありますか？</h3>
            <p>感染症がある方、重度の心臓病や腎臓病の方、妊娠中の方、その他担当医が不適切と判断した場合は治療をお受けいただけません。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>治療にかかる時間はどのくらいですか？</h3>
            <p>約30〜40分程度です。治療後は通常の生活に戻ることができます。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>副作用や痛みはありますか？</h3>
            <p>エクソソーム治療は非常に安全性の高い治療です。まれに、投与部位の軽度の腫れや痛み、発赤などが起こることがありますが、通常は数日で自然に改善します。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>効果はいつ頃から実感できますか？</h3>
            <p>個人差はありますが、通常1〜2週間程度で効果を実感し始める方が多いです。治療の種類や目的によって異なりますので、詳しくは担当医にご相談ください。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>治療の回数はどのくらい必要ですか？</h3>
            <p>症状や目的によって異なりますが、多くの場合、1回の治療から効果を実感していただけます。より確実な効果を得るために、3〜5回程度の治療をお勧めしています。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>通常の幹細胞治療との違いは何ですか？</h3>
            <p>エクソソームは幹細胞から抽出された有効成分のため、細胞そのものを投与する従来の幹細胞治療と比べて、より安全で体への負担が少なく、効果も早く実感しやすいという特徴があります。</p>
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <Link
          href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
          className={styles.ctaButton}
        >
          無料カウンセリングを予約する
        </Link>
      </div>
    </div>
  );
} 