"use client";

import Link from "next/link";
import styles from './hyaluronic.module.css';

export default function HyaluronicAcidPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        <div className="text-center mb-16">
          <h1 className={styles.pageTitle}>
            ヒアルロン酸注入治療
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ヒアルロン酸とは</h2>
            <div className={styles.card}>
              <p className="text-gray-700 leading-relaxed">
                ヒアルロン酸は、皮膚や関節、眼球など、もともとからだの至る所に存在する物質です。純粋なヒアルロン酸は、からだの中にある酵素によって、速やかに分解・吸収されます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                美容医療で使用するヒアルロン酸製剤は、分解されにくく加工され、目的に応じて硬さを調整したものです。アレルギーや異物反応を起こすことが極めて少ない安全性の高い注入剤です。
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術部位</h2>
            <div className={`${styles.card} grid grid-cols-1 md:grid-cols-2 gap-8`}>
              <div>
                <h3 className={styles.subTitle}>溝や凹みを埋める</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>おでこや目尻のシワ</li>
                  <li>深いほうれい線</li>
                  <li>目の上・目の下のくぼみ</li>
                  <li>こめかみのくぼみ</li>
                  <li>頬のコケ感</li>
                </ul>
              </div>
              <div>
                <h3 className={styles.subTitle}>かたちを作る</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>顎や鼻筋を整える</li>
                  <li>おでこや頬に丸みを出す</li>
                  <li>涙袋を作る</li>
                  <li>唇にボリュームを出す</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ヒアルロン酸注入の主な効果</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={styles.card}>
                <h3 className={styles.subTitle}>溝や凹みを埋める</h3>
                <p className="text-gray-700">
                  くぼみの直下にヒアルロン酸を注射することで、以下の部分を改善します：
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>おでこや目尻のシワ</li>
                  <li>深いほうれい線</li>
                  <li>目の上・目の下のくぼみ</li>
                  <li>こめかみのくぼみ</li>
                  <li>頬のコケ感</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3 className={styles.subTitle}>かたちを作る</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>顎や鼻筋を整える</li>
                  <li>おでこや頬に丸みを出す</li>
                  <li>涙袋を作る</li>
                  <li>唇にボリュームを出す</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ヒアルロン酸注入のメリット</h2>
            <div className="space-y-6">
              <div className={styles.card}>
                <h3 className={styles.subTitle}>01 直後から効果を実感</h3>
                <p className="text-gray-700">施術時間は5分から30分ほどで、効果をすぐに実感できます。</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.subTitle}>02 少ないダウンタイム</h3>
                <p className="text-gray-700">
                  マイクロカニューレ（先のとがっていない針）を使用することで、痛みと内出血のリスクを最小限に抑えます。
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.subTitle}>03 オーダーメイドのデザイン</h3>
                <p className="text-gray-700">
                  鏡でご確認いただきながら、ご自分の理想の状態まで微調整することが可能です。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>必要量の目安</h2>
            <div className={`${styles.card} overflow-hidden`}>
              <table className={styles.table}>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">額（しわ）</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">額（まるみ）</td>
                    <td className="px-6 py-4 text-right">2～6 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">こめかみ</td>
                    <td className="px-6 py-4 text-right">1～4 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">上まぶたのくぼみ</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">涙袋</td>
                    <td className="px-6 py-4 text-right">1 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">目の下</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">鼻</td>
                    <td className="px-6 py-4 text-right">1 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">頬</td>
                    <td className="px-6 py-4 text-right">2～6 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ほうれい線</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">唇</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">あご</td>
                    <td className="px-6 py-4 text-right">1～2 ml</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 p-4">※ 数字は両側の施術で使用する量の目安です</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術メニューと料金</h2>
            <div className={`${styles.card} overflow-hidden`}>
              <table className={styles.table}>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ヒアルロン酸 1本</td>
                    <td className="px-6 py-4 text-right">¥77,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ヒアルロン酸 3本</td>
                    <td className="px-6 py-4 text-right">¥210,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">追加分</td>
                    <td className="px-6 py-4 text-right">¥70,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ボライト 1本</td>
                    <td className="px-6 py-4 text-right">¥55,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ボライト 2本</td>
                    <td className="px-6 py-4 text-right">¥100,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">ボライト 追加分</td>
                    <td className="px-6 py-4 text-right">¥50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">※ 表示価格は全て税込みです。</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術の流れ</h2>
            <div className="space-y-8">
              <div className={styles.card}>
                <h3 className={styles.subTitle}>施術の特徴</h3>
                <p className="text-gray-700 mb-4">
                  当院のヒアルロン酸注入では、すべての部位でマイクロカニューレを使用します。マイクロカニューレは先端の丸い針で、毛細血管や神経を傷つけるリスクが少なく、1か所の針穴から広い範囲にヒアルロン酸を注入することができます。
                </p>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={styles.stepItem}>
                    <div className={styles.stepNumber}>{step}</div>
                    <div>
                      <p className="font-bold text-gray-900">{step === 1 ? 'カウンセリング' : step === 2 ? '麻酔' : step === 3 ? 'ヒアルロン酸注入' : '仕上がりの確認と調整'}</p>
                      <p className="text-gray-700">{step === 1 ? 'お悩みをお聞きし、最適な治療プランをご提案します。' : step === 2 ? 'マイクロカニューレを挿入する部分に麻酔を行います。' : step === 3 ? 'ご希望に沿ってヒアルロン酸を注入していきます。' : '鏡でご確認いただき、必要に応じて微調整を行います。'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術後の注意点</h2>
            <div className="space-y-6">
              <div className={styles.card}>
                <h3 className="font-bold text-gray-900 mb-4">基本的な注意事項</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>施術当日の激しい運動は避けてください</li>
                  <li>施術部位は清潔に保ってください</li>
                  <li>施術後24時間は飲酒を控えめにしてください</li>
                  <li>施術部位を強く押さないようにしてください</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3 className="font-bold text-gray-900 mb-4">具体的な制限事項</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">洗顔・スキンケア</p>
                    <p className="text-gray-700">直後から可能です。</p>
                  </div>
                  <div>
                    <p className="font-bold">メイク</p>
                    <p className="text-gray-700">当日はお休み下さい。翌日から通常通り可能です。</p>
                  </div>
                  <div>
                    <p className="font-bold">入浴</p>
                    <p className="text-gray-700">当日は軽くシャワー程度でお済ませください。</p>
                  </div>
                  <div>
                    <p className="font-bold">マッサージ</p>
                    <p className="text-gray-700">施術から1か月は注入部位の強いマッサージを避けてください。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>よくあるご質問</h2>
            <div className="space-y-6">
              <div className={styles.card}>
                <h3 className="font-bold text-gray-900 mb-2">施術はだれでも受けられますか？</h3>
                <p className="text-gray-700">
                  以下の方は施術を受けることができません：
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>妊娠中または妊娠の可能性のある方</li>
                  <li>局所麻酔アレルギーのある方</li>
                  <li>以前にヒアルロン酸注射でアレルギーが生じた方</li>
                  <li>局所の感染症に罹患している方</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  授乳中の方は、施術後48時間の断乳が必要となります。
                </p>
              </div>
              <div className={styles.card}>
                <h3 className="font-bold text-gray-900 mb-2">効果はどのくらい続きますか？</h3>
                <p className="text-gray-700">個人差はありますが、通常6ヶ月～1年程度効果が持続します。</p>
              </div>
              <div className={styles.card}>
                <h3 className="font-bold text-gray-900 mb-2">余ったヒアルロン酸を他の部位に注入できますか？</h3>
                <p className="text-gray-700">部位ごと、1ml単位での料金設定となっております。</p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className={styles.button}
            >
              無料カウンセリングを予約する
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 