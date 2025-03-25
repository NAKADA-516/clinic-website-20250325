"use client";
import Image from "next/image";
import Link from "next/link";
import styles from './clinic.module.css';

export default function ClinicPage() {
  const steps = [
    { title: "ご予約", icon: "📅" },
    { title: "カウンセリング", icon: "💭" },
    { title: "施術申し込み", icon: "📝" },
    { title: "お支払い", icon: "💳" },
    { title: "施術", icon: "✨" }
  ];

  const faqs = [
    {
      question: "当日予約は可能ですか？",
      answer: "初診・再診に関わらず、当日予約は可能です。ただし、予約の混雑状況によっては当日予約を承れない場合がございますので、予めご了承ください。"
    },
    {
      question: "初めて来院する際に必要なものは何ですか？",
      answer: "当院の美容医療は自費診療となるため、保険証は不要です。"
    }
  ];

  return (
    <main className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>クリニック紹介</h1>
          <p>美と健康の追求をお手伝いいたします</p>
        </div>
      </section>

      {/* クリニック紹介 */}
      <section className={styles.aboutSection}>
        <div className={styles.sectionInner}>
          <h2>代々木駅前美容クリニックとは</h2>
          <p>
            当院は、肌の健康と美を追求する美容皮膚科専門クリニックです。
          </p>
              <p>
                当院では、お客様に寄り添う治療をお届けしたいという想いから、経験豊富な専門医が症状やご要望に合わせて最適な治療プランをご提案・サポートいたします。また、最新のレーザー治療機器や施術技術を駆使し、痛みの少ない、安全で効果的な美容医療を実現しております。
              </p>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionInner}>
          <h2>選ばれる2つのポイント</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👩‍⚕️</div>
              <h3>熟練の先生による安心の施術</h3>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚶‍♀️</div>
              <h3>アクセスが良い<br/>（代々木駅東口から徒歩1分圏内）</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 治療の流れ */}
      <section className={styles.flowSection}>
        <div className={styles.sectionInner}>
          <h2>治療の流れ</h2>
          <div className={styles.flowSteps}>
            {steps.map((step, index) => (
              <div key={index} className={styles.flowStep}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <p>{step.title}</p>
                {index < steps.length - 1 && <div className={styles.stepArrow}>→</div>}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ドクター紹介 */}
      <section className={styles.doctorSection}>
        <div className={styles.sectionInner}>
          <h2>ドクター紹介</h2>
          <div className={styles.doctorProfile}>
            <div className={styles.doctorImage}>
                  <Image
                    src="/images/doctor-new.jpg"
                    alt="院長 吉川とも子"
                width={400}
                height={500}
                className={styles.doctorImg}
                    priority
                  />
                </div>
            <div className={styles.doctorInfo}>
              <h3>院長 吉川 とも子</h3>
              <div className={styles.qualifications}>
                <h4>【資格/所属】</h4>
                <ul>
                      <li>代々木駅前美容クリニック院長</li>
                      <li>ボトックスビスタ認定医</li>
                      <li>ジュビダームビスタ認定医</li>
                      <li>山口大学医学部卒</li>
                    </ul>
                  </div>
              <p>
                代々木駅前美容クリニックは2023年6月に開業しました。以前は熊本県の美容皮膚科クリニックで院長を務めていましたが、2024年3月より当院の院長に就任させていただきました。診療科目は美容皮膚科です。美容エステサロンとは異なり、医師による美容面のお悩み相談にも細かく対応しているのが当院の特徴の一つです。また、内服や注射、スキンケア商品なども扱っております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* クリニック情報 */}
      <section className={styles.infoSection}>
        <div className={styles.sectionInner}>
          <h2>クリニック情報</h2>
          
          <div className={styles.clinicInfoContainer}>
            {/* 左側：クリニック情報 */}
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🏥</div>
                <div className={styles.infoContent}>
                  <h3>クリニック名</h3>
                  <p className={styles.clinicName}>医療法人社団BYS</p>
                  <p className={styles.clinicNameSub}>代々木駅前美容クリニック</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🕐</div>
                <div className={styles.infoContent}>
                  <h3>診療時間</h3>
                  <div className={styles.timeTable}>
                    <div className={styles.timeRow}>
                      <span className={styles.timeLabel}>平日・土日</span>
                      <span className={styles.timeValue}>11:00 ~ 19:00</span>
                    </div>
                    <p className={styles.noteText}>休診日：不定休</p>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h3>所在地</h3>
                  <p>〒151-0051</p>
                  <p>渋谷区千駄ヶ谷5-20-16</p>
                  <p>Face代々木</p>
                  <p className={styles.access}>JR代々木駅 東口徒歩1分</p>
              </div>
            </div>
            
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <div className={styles.infoContent}>
                  <h3>お問い合わせ</h3>
                  <a href="tel:03-5315-0201" className={styles.phoneNumber}>
                    03-5315-0201
                  </a>
                </div>
              </div>
            </div>

            {/* 右側：地図 */}
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.736497465602!2d139.703074!3d35.683489699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188def68c2f5cb%3A0x5d6b61e536a418f!2z5Luj44CF5pyo6aeF5YmN576O5a6544Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1742531967651!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className={styles.faqSection}>
        <div className={styles.sectionInner}>
          <h2>よくある質問</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>Q. {faq.question}</h3>
                <p>A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <h2>ご予約・お問合せ</h2>
            <p className={styles.ctaText}>
              まずは無料カウンセリングで、お気軽にご相談ください
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                className={styles.ctaButtonPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.buttonIcon}>📅</span>
                WEB予約
              </a>
              <a
                href="tel:03-5315-0201"
                className={styles.ctaButtonSecondary}
              >
                <span className={styles.buttonIcon}>📞</span>
                03-5315-0201
              </a>
            </div>
            <p className={styles.ctaNote}>
              診療時間 11:00〜19:00
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 