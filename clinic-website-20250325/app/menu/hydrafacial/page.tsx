"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './hydrafacial.module.css';

export default function HydrafacialPage() {
  return (
    <main className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>HYDRAFACIAL</h1>
          <p className={styles.subtitle}>ハイドラフェイシャル</p>
          <p className={styles.description}>
                次世代の美肌ケア。洗浄・除去・潤いを一度に実現する革新的トリートメント
              </p>
            </div>
        <div className={styles.heroImage}>
                <Image
                  src="/images/hydrafacial-hero.jpg"
                  alt="ハイドラフェイシャル施術イメージ"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

      <div className={styles.section}>
        <h2 className={styles.title}>ハイドラフェイシャルとは？</h2>
        <div className={styles.content}>
          <p>
                  ハイドラフェイシャルは、米国Edge Systems社が開発した新世代のハイドロダーマアブレーションシステムを搭載した安全性の高い医療機関専用のピーリング治療マシンで、アメリカ食品医薬品局（FDA）で認可されています。
                </p>
          <p>
                  特許技術により、1台で余分な皮脂や角質、お肌の汚れを徹底的に洗浄・除去し、くすみや色素沈着、シミなどを独自のスキンソリューションとチップで取り除きながら、お肌に潤いと栄養分を与え、みずみずしい素肌へと導きます。
                </p>
              </div>
        <div className={styles.deviceImage}>
                  <Image
                    src="/images/hydrafacial-device.jpg"
                    alt="ハイドラフェイシャル施術機器"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

      <div className={styles.section}>
        <h2 className={styles.title}>ハイドラフェイシャルのメリット</h2>
        <div className={styles.content}>
          <div className={styles.benefitCards}>
              {[
                "通常1回で効果を実感できる", 
                "ダウンタイムがほとんどなく、施術後すぐにメイクもできる", 
                "気になる角質の除去や毛穴の引き締め", 
                "オイリー肌、ニキビ肌の改善",
                "くすみの改善や美容効果",
                "お肌のターンオーバーを整える"
              ].map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>✓</div>
                <p>{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>ハイドラフェイシャルの効果</h2>
        <div className={styles.content}>
          <div className={styles.effectTable}>
                {[
                  "毛穴の詰まり、開きの回復", 
                  "ニキビの改善、予防", 
                  "くすみ、色素沈着の改善", 
                  "バリア機能の正常化"
                ].map((effect, index) => (
              <div key={index} className={styles.effectRow}>
                <div className={styles.effectIcon}>{index + 1}</div>
                <p>{effect}</p>
                  </div>
                ))}
              </div>
          <div className={styles.beforeImage}>
            <h3 className={styles.beforeTitle}>施術実例</h3>
                <Image
                  src="/images/hydrafacial-before.jpg"
                  alt="ハイドラフェイシャル施術実例"
                  fill
              className={styles.img}
              priority
                />
            <p className={styles.beforeCaption}>施術による肌質改善例</p>
              </div>
            </div>
              </div>
              
      <div className={styles.section}>
        <h2 className={styles.title}>ハイドラフェイシャルのメカニズム</h2>
        <div className={styles.content}>
          <div className={styles.mechanismTable}>
            <div className={styles.mechanismHeader}>4ステップで肌を根本から改善</div>
            <div className={styles.mechanismSteps}>
                {[
                  {
                    step: "STEP 1",
                    desc: "水流（ハイドロ）でマイルドにピーリングを行い、ハンドピースの中央から美容成分を含んだ薬液が噴射され、チップ中で渦巻き状に回転しながら皮脂や汚れを浮かせます。"
                  },
                  {
                    step: "STEP 2",
                    desc: "剥離された汚れは出口専用の穴から吸引排出されます。"
                  },
                  {
                    step: "STEP 3",
                    desc: "同時に美容成分をたっぷり浸透させるため、お肌に余分な負担をかけず、お肌の表面はもちろん、毛穴の奥の皮脂もスッキリします。"
                  },
                  {
                    step: "STEP 4",
                    desc: "吸引直後から、くすみなど肌質改善を実感できます。"
                  }
                ].map((item, index) => (
                <div key={index} className={styles.stepRow}>
                  <div className={styles.stepIcon}>{item.step}</div>
                  <div className={styles.stepDescription}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          <div className={styles.mechanismImage}>
              <Image
                src="/images/hydrafacial-steps.jpg"
                alt="ハイドラフェイシャル施術ステップ"
                fill
                className="object-contain"
              />
            </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>こんな方にオススメ！</h2>
        <div className={styles.content}>
          <div className={styles.recommendationTable}>
                {[
                  "毛穴の黒ずみ、汚れ、開きが気になる方",
                  "色素沈着が気になる方",
                  "シワを改善したい方",
                  "お肌がくすんで、化粧ノリが悪い方",
                  "大人ニキビが気になる方",
                  "肌質を改善したい方"
                ].map((item, index) => (
              <div key={index} className={styles.recommendationRow}>
                <div className={styles.recommendationIcon}>✦</div>
                <p>{item}</p>
                  </div>
                ))}
              </div>
          <div className={styles.riskTable}>
            <h3 className={styles.riskTitle}>ハイドラフェイシャルを受けることができない方</h3>
            <ul className={styles.riskList}>
                <li>重度の皮膚炎や過度な日焼けをした方</li>
                <li>重度の感染症やヘルペスがある方</li>
                <li>妊娠中、授乳中の方</li>
              </ul>
            <p className={styles.riskNote}>
                ※施術前3日間はグリコール酸やレチノイン酸などの入った刺激の強い化粧品類・石鹸（アクネローション・スキンピールソープ）、ディフェリンゲルの使用を控えてください。
              </p>
            </div>
        </div>
              </div>
              
      <div className={styles.section}>
        <h2 className={styles.title}>ハイドラフェイシャルの治療内容</h2>
        <div className={styles.content}>
          <div className={styles.treatmentTable}>
            <div className={styles.treatmentHeader}>治療の流れ</div>
            <div className={styles.treatmentSteps}>
                {[
                  {
                    title: "カウンセリング・診察",
                    desc: "ご希望をお伺いし、治療の詳細や効果、ご質問、ご料金など詳しくご説明いたします。"
                  },
                  {
                    title: "洗顔",
                    desc: "メイクや肌の汚れを全て落とします。メイク落とし、洗顔料はご用意しております。",
                    note: "※スムーズに施術を行うために、なるべく薄化粧でのご来院をお願いしております。（特にラメ入りのメイクは落としにくいので、施術当日は避けてください。）"
                  },
                  {
                    title: "施術",
                    desc: "",
                    substeps: [
                      { 
                        title: "ディープクレンジング",
                        desc: "皮脂を軟化させ、汚れを浮かせてから毛穴の奥までチップでクレンジングします。"
                      },
                      {
                        title: "ピーリング",
                        desc: "水流を利用して、グリコール酸・サリチル酸のコンビネーションピーリングで角質を剥離します。"
                      },
                      {
                        title: "オイルコントロール・角栓除去",
                        desc: "毛穴（鼻・Tゾーンなど）をスパイラルデザインチップでディープクレンジングし、皮脂及び角栓を除去し、お肌のオイルコントロールをします。"
                      },
                      {
                        title: "保湿・鎮静",
                        desc: "保湿と鎮静を行いながら、お肌に潤いと栄養を与え、肌環境を整えます。"
                      }
                    ]
                  },
                  {
                    title: "アフターケア",
                    desc: "施術後は一時的に、お肌はデリケートとなっておりますので、お肌をこするなどの刺激は避け、十分な保湿・UVケアを行ってください。治療後に気になることがあれば、お気軽にご相談ください。"
                  }
                ].map((item, index) => (
                <div key={index} className={styles.stepRow}>
                  <div className={styles.stepIcon}>{index + 1}</div>
                  <div className={styles.stepDescription}>
                    <h4 className={styles.stepTitle}>{item.title}</h4>
                    {item.desc && <p>{item.desc}</p>}
                      {item.substeps && (
                      <div className={styles.substepList}>
                          {item.substeps.map((substep, idx) => (
                          <div key={idx} className={styles.substepItem}>
                            <h5 className={styles.substepTitle}>{substep.title}</h5>
                            <p>{substep.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.note && (
                      <p className={styles.note}>{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div className={styles.treatmentInfo}>
            <h3 className={styles.treatmentTitle}>治療内容</h3>
            <div className={styles.treatmentTable}>
                  {[
                    { label: "施術時間", value: "30～40分程度" },
                    { 
                      label: "治療回数", 
                      value: [
                        "（1クール）2～4週間に1回のペースで5回",
                        "（メンテナンス）1ヶ月に1回"
                      ]
                    },
                    { label: "ダウンタイム", value: "なし" },
                    { label: "洗顔", value: "当日より可能" },
                    { label: "シャワー", value: "当日より可能" },
                    { label: "メイク", value: "当日より可能" },
                    { label: "日焼け", value: "治療前後は特に日焼けには注意し、毎日、日焼け止めを使用してください。" },
                    { label: "その他", value: "治療後、数日は乾燥しやすく、日焼けもしやすいので、保湿や紫外線対策はしっかり行ってください。" }
                  ].map((row, index, array) => (
                <div key={index} className={index !== array.length - 1 ? styles.treatmentRow : styles.treatmentLastRow}>
                  <div className={styles.treatmentLabel}>{row.label}</div>
                  <div className={styles.treatmentValue}>
                        {Array.isArray(row.value) ? (
                      <div className={styles.valueList}>
                            {row.value.map((v, i) => (
                              <p key={i}>{v}</p>
                            ))}
                          </div>
                        ) : row.value}
                  </div>
                </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>治療後の注意点</h2>
        <div className={styles.content}>
          <div className={styles.cautionList}>
                {[
                  "他のケミカルピーリング治療は、2週間程度の間隔を空けてお受けください。",
                  "ご自宅のピーリング成分入りのお化粧品やお薬も、前後1週間程度の間隔を空けてご使用ください。",
                  "使用する薬剤にアレルギーをお持ちの方は、稀にアレルギー反応がでることがあります。",
                  "吸引や摩擦、ピーリング成分の刺激により、赤みや点状出血が出ることがありますが、通常1～3日程度で治まります。",
                  "紫外線対策(日焼け対策)は十分にしてください。"
                ].map((item, index) => (
              <div key={index} className={styles.cautionItem}>
                <div className={styles.cautionIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className={styles.riskTable}>
            <h3 className={styles.riskTitle}>リスク</h3>
            <div className={styles.riskTable}>
              <div className={styles.riskRow}>
                <div className={styles.riskLabel}>一過性の赤み</div>
                <div className={styles.riskValue}>通常は数時間で改善します。</div>
              </div>
            </div>
          </div>
        </div>
            </div>

      <div className={styles.section}>
        <h2 className={styles.title}>料金表</h2>
        <div className={styles.content}>
          <div className={styles.priceTable}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.tableHeader}>
                  <th className={styles.tableCell}>メニュー</th>
                  <th className={styles.tableCell}>料金（税込）</th>
                  </tr>
                </thead>
                <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>ハイドラフェイシャル　１回</td>
                  <td className={styles.tableCell}>￥15,000</td>
                  </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>ハイドラフェイシャル　６回コース</td>
                  <td className={styles.tableCell}>￥75,000</td>
                  </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>ハイドラフェイシャル　１２回コース</td>
                  <td className={styles.tableCell}>￥144,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div className={styles.priceNote}>
            <p>※すべて税込価格です。</p>
            <p>※初回カウンセリング料はいただいておりません。</p>
          </div>
            </div>
            </div>
            
      <div className={styles.section}>
        <h2 className={styles.title}>承認状況</h2>
        <div className={styles.content}>
          <div className={styles.approvalInfo}>
            <p>「ハイドラフェイシャル」は、国内において医薬品医療機器等法上の承認を得ていない未承認の機器です。</p>
          </div>
          <div className={styles.approvalTable}>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>承認状況</td>
                  <td className={styles.tableCell}>厚生労働省未承認・米国FDA認証</td>
                  </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>入手経路等</td>
                  <td className={styles.tableCell}>国内の医薬品卸業者より購入しています。</td>
                  </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>国内の承認薬品等の有無</td>
                  <td className={styles.tableCell}>国内にて承認されている同効の機器等はありません。</td>
                  </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>諸外国における安全性などに係る情報</td>
                  <td className={styles.tableCell}>米国FDAで承認されています。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div className={styles.approvalNote}>
            <p>美容皮膚科治療では、国内未承認医薬品または医療機器を用いて施術を行います。</p>
          </div>
        </div>
            </div>

      <div className={styles.section}>
        <h2 className={styles.title}>ご予約・ご相談について</h2>
        <div className={styles.content}>
          <p>
                施術に関するご不安な点やご質問は、カウンセリングの際に担当医師にご相談ください。お肌の状態を確認した上で、適切な治療計画をご提案させていただきます。
              </p>
          <div className={styles.ctaButton}>
                <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                >
                  カウンセリング予約
                </a>
          </div>
        </div>
      </div>
    </main>
  );
} 