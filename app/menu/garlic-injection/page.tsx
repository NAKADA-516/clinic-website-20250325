"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './garlic-injection.module.css';

export default function GarlicInjectionPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* キャッチフレーズ部分を完全に書き換え */}
          <div className={styles.catchphrase}>
            <h2 className={styles.mainCatch}>
              あなたの美しさを引き出す、心に寄り添う治療
            </h2>
            <p className={styles.subCatch}>
              代々木駅前美容クリニック
            </p>
          </div>

          <h1 className={styles.heroTitle}>にんにく注射</h1>
          <p className={styles.heroDescription}>
            ビタミン・ミネラル・アミノ酸をたっぷり含んだにんにく注射で
            疲労回復・免疫力向上をサポートします。
          </p>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* にんにく注射とは */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">にんにく注射とは</h2>
              <p className="text-gray-600 mb-4">
                にんにく注射は、ニンニクから抽出したエキスを注射する治療法です。
                ビタミンB1、B2、B12を中心に、様々なミネラルやアミノ酸が豊富に含まれており、
                滋養強壮や疲労回復に効果的です。
              </p>
              <p className="text-gray-600">
                当院では高品質なにんにくエキスを使用し、
                お一人お一人の体調や目的に合わせた最適な治療を提供しています。
              </p>
            </div>

            {/* 効果 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">期待できる効果</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center mt-0.5">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">疲労回復</h3>
                    <p className="text-gray-600">
                      ビタミンB群が豊富に含まれており、疲労物質の分解を促進します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center mt-0.5">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">免疫力向上</h3>
                    <p className="text-gray-600">
                      アリシンやスコルジニンなどの成分が免疫機能を高め、風邪などの予防につながります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center mt-0.5">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">血行促進</h3>
                    <p className="text-gray-600">
                      血液循環を改善し、冷え性の緩和や代謝アップに役立ちます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center mt-0.5">
                    <span className="text-white font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">滋養強壮</h3>
                    <p className="text-gray-600">
                      体力の回復や増進に役立ち、日々の活力をサポートします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center mt-0.5">
                    <span className="text-white font-medium">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">アンチエイジング</h3>
                    <p className="text-gray-600">
                      抗酸化作用により、体の老化予防にも効果が期待できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* こんな方におすすめ */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">こんな方におすすめ</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">慢性的な疲労を感じている方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">免疫力を高めたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">ストレスが多い生活を送っている方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">冷え性でお悩みの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">風邪をひきやすい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">仕事や育児で忙しい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                  <span className="text-gray-600">健康維持に関心がある方</span>
                </li>
              </ul>
            </div>

            {/* 施術の流れ */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">施術の流れ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">カウンセリング</h3>
                    <p className="text-gray-600">
                      お悩みや体調、アレルギーの有無などについて詳しくお伺いします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">体調チェック</h3>
                    <p className="text-gray-600">
                      血圧測定など、その日の体調を確認させていただきます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">注射の施術</h3>
                    <p className="text-gray-600">
                      にんにく注射を腕または臀部に注射します。施術時間は約5分程度です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">アフターケア</h3>
                    <p className="text-gray-600">
                      注射後の注意事項についてご説明します。施術後は、水分を多めに摂取することをおすすめします。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">
                  ※施術時間は個人差がありますが、全体で15〜20分程度です。<br />
                  ※初回はカウンセリングの時間を多めに取らせていただきます。
                </p>
              </div>
            </div>

            {/* 料金 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">料金</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">にんにく注射 1回</span>
                  <span className="font-medium">¥2,200〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">にんにく注射 5回コース</span>
                  <span className="font-medium">¥10,000〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">にんにく注射 10回コース</span>
                  <span className="font-medium">¥19,000〜（税込）</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                ※料金は目安です。詳細は診察時にご確認ください。<br />
                ※コースをご利用の場合は有効期限があります。
              </p>
            </div>

            {/* よくある質問 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Q. にんにくの臭いは気になりますか？</h3>
                  <p className="text-gray-600">
                    A. 施術後、一時的に口や汗からにんにく臭がする場合がありますが、個人差があります。
                    気になる方は、就寝前や休日前の施術をおすすめします。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Q. 効果はどれくらいで実感できますか？</h3>
                  <p className="text-gray-600">
                    A. 個人差がありますが、多くの方が1回の施術でも疲労感の軽減を実感されています。
                    継続的な効果を得るには、定期的な施術をおすすめします。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Q. 副作用はありますか？</h3>
                  <p className="text-gray-600">
                    A. まれに注射部位の痛みや内出血、アレルギー反応が起こる場合があります。
                    アレルギーをお持ちの方は事前にご相談ください。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Q. どのくらいの頻度で受けるのが効果的ですか？</h3>
                  <p className="text-gray-600">
                    A. 目的や体調によって異なりますが、一般的には週1〜2回の施術を1ヶ月程度続けることで
                    効果を実感される方が多いです。その後は月1〜2回の維持療法がおすすめです。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                まずは無料カウンセリングにお越しください
              </h2>
              <p className="text-gray-600 mb-8">
                お客様の体調やお悩みをお伺いし、最適な施術プランをご提案いたします。
                お気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="inline-block bg-[#81D8D0] text-white px-8 py-4 rounded-full hover:bg-[#6BC4BC] transition-colors"
                >
                  無料カウンセリング予約
                </Link>
                <a
                  href="tel:03-5315-0201"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                >
                  03-5315-0201
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 