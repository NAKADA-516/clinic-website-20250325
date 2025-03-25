"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './rejuran.module.css';

export default function RejuranPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            リジュラン注射（高濃度サーモン注射）
          </h1>
          <p className={styles.subtitle}>
            肌の再生力を高め、根本からエイジングケアを行う革新的な治療法
          </p>
          
          {/* ヒーローイメージ */}
          <div className={styles.heroImage}>
            <Image
              src="/images/rejuran-hero.jpg"
              alt="リジュラン注射のイメージ"
              fill
              style={{ 
                objectFit: "cover",
                objectPosition: "center",
                transform: "scale(1.01)"
              }}
              className="hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 700px, 800px"
              quality={85}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* リジュラン注射とは */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>リジュラン注射（高濃度サーモン注射）とは</h2>
            <div className={styles.contentGrid}>
              <div className={styles.card}>
                <p className="text-gray-700 leading-relaxed">
                  リジュラン注射（高濃度サーモン注射）とは、サーモンのDNAから抽出されるポリヌクレオチド（PN）を有効成分とした注入剤「リジュラン」を皮下に注入し、加齢や紫外線でダメージを受けたお肌を若返らせる治療です。「サーモン注射」や「PDRN(ポリデオキシヌクレオチド)注射」、「DNA(デオキシリボ核酸)注射」とも言われています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ポリヌクレオチド（PN）には肌の自己再生力を活性化させる働きがあり、成長因子の増産、毛細血管の循環促進、衰えたDNAの再合成などに作用するので、お肌のハリ・弾力が増し、保湿力や皮脂バランス、しわの改善が期待できます。テクスチャーが柔らかいので、目の周辺など皮膚の薄い部分にも馴染みやすいです。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  また、代々木駅前美容クリニックでは医師による手打ちでリジュラン注射を行いますので、お悩みの箇所にピンポイントで注射することで高い効果が期待できます。
                </p>
              </div>
              
              <div className={styles.productImage}>
                <Image
                  src="/images/rejuran-product.jpg"
                  alt="リジュラン製品イメージ"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* 適応 - 向いている方 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>こんな方におすすめです</h2>
            <div className={styles.card}>
              <ul className={styles.checkList}>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>お肌のハリ、ツヤ、弾力で悩んでいる方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>ほうれい線、口元の小じわが気になる方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>額の小じわをなんとかしたい方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>皮膚が薄い方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>目元のしわが気になる方</span>
                  </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>首やデコルテのしわが気になる方</span>
                  </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>くぼんだニキビ跡が気になる方</span>
                  </li>
              </ul>
            </div>
          </section>

          {/* 効果と特徴 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>リジュラン注射の効果と特徴</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">肌の再生を促進する効果</h3>
                <p className="text-gray-700 leading-relaxed">
                  リジュラン注射（高濃度サーモン注射）を皮下に直接注入することで、肌再生として根源的なアプローチをするため、皮膚細胞の増殖やコラーゲンの生成が促進され美肌へと導きます。
                  また、皮膚自体を若返らせ、ハリや弾性、厚みを取り戻すため、ヒアルロン酸注射やボトックス注射では改善されなかった、加齢や紫外線ダメージにより固定され、無表情時にも存在するシワにも効果が期待できます。
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">他の治療法と併用でより効果的に</h3>
                <p className="text-gray-700 leading-relaxed">
                  リジュラン注射（高濃度サーモン注射）は、ヒアルロン酸注射やボトックス注射などの他の治療法と組み合わせることもできます。複数の治療法を組み合わせることで、より効果的に肌悩みにアプローチすることができます。
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">高い安全性</h3>
                <p className="text-gray-700 leading-relaxed">
                  サーモン由来のポリヌクレオチド（PN）はDNAの構造が人間と非常に似ており、人の体によくなじみます。そのため安全性が高く、アレルギーや副作用などのリスクがほとんど無いと言われています。
                </p>
              </div>
            </div>
          </section>

          {/* 施術の流れ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術の流れ</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">医師の診察</h3>
                  <p className="text-gray-700">
                    医師がお悩みや肌状態を確認し、一人ひとりに合わせた治療計画をご提案します。※診察の結果、施術をお受けいただけない場合もあります。
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">施術準備</h3>
                  <p className="text-gray-700">
                    ご自宅からノーメイクの状態で来ていただくか、施術前にメイクを落とします。
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">施術開始</h3>
                  <p className="text-gray-700">
                    医師による手打ちでリジュラン注射を行います。施術時間は約10分程度です（施術部位や注入量などによって異なります）。
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">施術終了</h3>
                  <p className="text-gray-700">
                    施術後は注射部位を強くこすったり、揉んだりしないよう注意してください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 施術概要 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術概要</h2>
            <div className={styles.card}>
              <div className={styles.infoGrid}>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900">施術時間</h3>
                  <p className="text-gray-700">
                    約30～60分程度<br />
                    <span className="text-sm text-gray-500">施術部位や注入量などによって異なります</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900">施術前の準備</h3>
                  <p className="text-gray-700">
                    ご自宅からノーメイクの状態で来ていただくか、施術前に落としていただきます
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900">施術後の通院</h3>
                  <p className="text-gray-700">
                    なし
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900">ダウンタイム</h3>
                  <p className="text-gray-700">
                    針を刺した箇所が点のように内出血になることがありますが、メイクでカバーできる程度です。1週間程度で治っていきます。
                  </p>
                </div>
              </div>
              <div className={styles.aftercareInfo}>
                <h3 className="font-bold text-gray-900 mb-3">メイク/洗顔/入浴</h3>
                <ul className="space-y-4">
                  <li className="space-y-1">
                    <span className="font-medium text-gray-900">メイク:</span>
                    <p className="text-gray-700">メイクについては、施術当日は控えていただき、翌日から行うようにしてください。</p>
                  </li>
                  <li className="space-y-1">
                    <span className="font-medium text-gray-900">洗顔:</span>
                    <p className="text-gray-700">施術後翌日から行っていただけますが、1週間程度は注射部位を強くこすったり、揉んだりはしないよう注意してください。</p>
                  </li>
                  <li className="space-y-1">
                    <span className="font-medium text-gray-900">入浴:</span>
                    <p className="text-gray-700">当日はシャワーのみで入浴は施術1週間後より可能です。サウナ・飲酒・激しい運動は1～2週間はお控えください。</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 料金 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金</h2>
            <div className={styles.priceCard}>
              <div className="text-center p-8 bg-gray-50">
                <p className="text-lg text-gray-700 mb-2">近日公開</p>
                <p className="text-gray-600">
                  料金プランにつきましては、カウンセリング時にご案内いたします。
                </p>
              </div>
            </div>
            <div className={styles.notes}>
              <p>※ 表示価格は全て税込みです。</p>
              <p>※ 上記の施術は、公的医療保険が適用されない自由診療（自費診療）です。</p>
              <p>※ 自由診療においては本国における未承認医薬品・医療機器が含まれます。</p>
              <p>※ 治療に使用する医薬品・機器は当院医師の判断の元、個人輸入にて手続きを行っております。</p>
              <p>※ 未承認医療機器については「個人輸入において注意すべき医薬品等について」もご参照ください。</p>
              <p>※ 本治療に使用できる同一の性能を有する他の国内承認医薬品はありません。</p>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className={styles.ctaButton}
            >
              無料カウンセリングを予約する
            </Link>
            <p className={styles.ctaText}>
              ご不明な点は、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 