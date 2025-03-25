"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './dermapen.module.css';

export default function DermapenPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            ダーマペン
          </h1>
          <p className={styles.subtitle}>
            肌再生と美肌効果を引き出す先進的マイクロニードリング治療
          </p>
          
          {/* ヒーローイメージ */}
          <div className={styles.heroImage}>
            <Image
              src="/images/dermapen-treatment.jpg"
              alt="ダーマペン施術イメージ"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 700px, 800px"
              quality={85}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* ダーマペンとは */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ダーマペンとは</h2>
            <div className={styles.contentGrid}>
              <div className={styles.card}>
                <p className="text-gray-700 leading-relaxed">
                  ダーマペン4は先端に16本の微細な針をもつペン型の美容医療機器です。高速振動するペン先をスライドさせることで、複数の針先が肌に直接当たり無数の穴を作ります。この微細な傷を修復する創傷治癒力がコラーゲンやエラスチンの生成を活性化し、新しく肌を生まれ変わらせる再生治療です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ダーマペン4は肌の再生する力をより効率的にするために針の深さや振動回数などを調整できる仕組みになっており、肌の状態に適した綿密な肌づくりができます。穴が開いている肌は美肌のための有効成分が浸透しやすくなっていて、肌の治癒力と美容成分がお互いに効果を高めあいます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  当院ではお悩みに適したオプションの追加が人気です。肌トラブル改善と同時に年齢でお悩みの肌にも対応。肌のハリ・弾力・ツヤ感が欲しい人にはおすすめです。施術を受けていくごとに肌のデコボコやざらざらが減り、滑らかで弾力のあるお肌を実感していただけます。
                </p>
              </div>
              
              <div className={styles.productImage}>
                <Image
                  src="/images/dermapen-device.png"
                  alt="ダーマペン4デバイス"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* ダーマペンの特徴 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ダーマペンの特徴</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">生まれたてのベビースキンを実現</h3>
                <p className="text-gray-700 leading-relaxed">
                  肌には自らを治す回復力が備わっています。ダーマペン4で肌表面に目で確認できないほどの穴を形成させることで、コラーゲンやエラスチンの生成を促進。ニキビの赤みやデコボコとした肌、開いた毛穴も少しずつ肌触りが改善されていきます。肌のトラブル以外にも、小じわやしみ・肌のハリやきめといった肌の老化を改善し、弾力のある柔らかなハリ肌へと導いてくれます。
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">肌トラブルにも対応、短いダウンタイム</h3>
                <p className="text-gray-700 leading-relaxed">
                  ダーマペン4は先端がペン型になっているので、しみやニキビといったピンポイントの施術から目元や口元など面積の狭いパーツにも無理なく施術できます。また、肌に対して針を垂直に刺すことで皮膚への負担や出血を抑えた施術が可能で、ダウンタイムが短い施術です。鼻やフェイスラインなど骨ばってカーブした部分にも少ない刺激で効率的に結果を出せます。
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">丁寧で細やかな施術</h3>
                <p className="text-gray-700 leading-relaxed">
                  肌の状態や肌質に合わせて針の深さや振動を調整しながら治療します。毛穴のケアや肌にハリを出したい部分には、針の深さを浅く（0.2～0.5ｍｍ程度）設定します。肌のデコボコやしわ、しみにお悩みの部分には、針の深さを1.0ｍｍ以上に設定して真皮層まで刺激。ひとつひとつのお悩みをしっかりとケアします。細かく調整する機能を使って、イベントなどのご予定に合わせて痛みやダウンタイムをコントロールすることもできます。
                </p>
              </div>
            </div>
          </section>

          {/* マッサージピールとヴェルベットスキン */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>マッサージピール「PRX-T33」とヴェルベットスキン</h2>
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">マッサージピール「PRX-T33」とは</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  マッサージピールは、皮膚を剥脱させるのではなく、薬剤をマッサージしながら浸透させるタイプの医療ピーリングです。施術にはイタリア製の「PRX-T33」という薬剤を使用します。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  マッサージピールを単体で受ける場合、施術中に熱感やピリピリとする刺激を感じることもありますが、基本的には麻酔なしで受けられます。一方ヴェルベットスキンの一環としてマッサージピールを受ける場合は、ダーマペンによって肌に開けた穴へ薬剤を直接導入するため、しみるような痛みを感じるでしょう。
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-900">効果のメカニズム</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  マッサージピールの施術ではまずPRX-T33を肌に塗布し、マッサージをしながら皮膚の深い部分に当たる真皮層まで導入します。薬剤が組織に届くことで各成分が作用し、お悩みを改善する仕組みです。
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-900">効果の種類</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  PRX-T33は、以下の3つの美容成分で構成されています。
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>TCA（トリクロロ酢酸）</li>
                  <li>H2O2（過酸化水素）</li>
                  <li>コウジ酸</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  TCAは新しい細胞の生成を促したり、コラーゲンやエラスチンといった美肌成分の生成を促進したりする効果があります。H2O2はTCAの刺激から表皮を保護し、自然治癒力を促進させます。また赤みなど肌の炎症を改善する効果もあります。コウジ酸には、シミや肝斑を改善できる美白効果があります。
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">ヴェルベットスキンについて</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ヴェルベットスキンとダーマペンは、完全に異なる美容施術ではありません。まずダーマペンという施術があり、それに加えてマッサージピールという施術を行うのがヴェルベットスキンです。ヴェルベットスキンとして2つの施術を連続して行うと、相乗効果が生まれます。これによりヴェルベットスキンでは、ダーマペン単体よりもさらに効率的に美肌効果を得ることができるのです。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ただし、マッサージピールで使用する「PRX-T33」という薬剤は、肌に強い刺激を与えます。塗布する際にしみるような痛みが生じることから、ダーマペンの機能を一部制限しているクリニックも。そのため原則はヴェルベットスキンの方がより大きな効果が得られるものの、お悩みの種類や施術を受ける方の肌の状態などによっては、ダーマペン単体での施術の方が効果的な場合もあります。
                </p>
              </div>
            </div>
          </section>

          {/* 比較表 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術の比較</h2>
            <div className={styles.compareTable}>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left"></th>
                      <th className="border border-gray-300 p-3 text-left font-bold">ヴェルベットスキン</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">ダーマペン</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">施術</td>
                      <td className="border border-gray-300 p-3">ダーマペン＋マッサージピール</td>
                      <td className="border border-gray-300 p-3">ダーマペン</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">特長</td>
                      <td className="border border-gray-300 p-3">ダーマペンとマッサージピールの相乗効果による高い美肌効果が期待できる</td>
                      <td className="border border-gray-300 p-3">自然治癒力を利用し、クレーター状のニキビ跡などの肌のお悩みを改善する。美肌効果がある</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">効果</td>
                      <td className="border border-gray-300 p-3">肌質改善（ハリ・ツヤ）、毛穴の開き・黒ずみの改善、小じわ・たるみの改善、肝斑を含むシミ・くすみ・色素沈着の改善、ニキビ跡・妊娠線の改善</td>
                      <td className="border border-gray-300 p-3">小じわ・肌のハリ改善、毛穴の開き・肌質改善、クレーター状のニキビ跡の改善、色素沈着・シミ・くすみの改善、たるみの改善、妊娠線の改善</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">施術時間</td>
                      <td className="border border-gray-300 p-3">60～90分</td>
                      <td className="border border-gray-300 p-3">30～45分</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">ダウンタイム</td>
                      <td className="border border-gray-300 p-3">1、2日～1週間前後</td>
                      <td className="border border-gray-300 p-3">1～3日</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">痛み</td>
                      <td className="border border-gray-300 p-3">麻酔によりダーマペンの痛みはあまり感じないPRX-T33塗布の際にしみるような痛みを感じる</td>
                      <td className="border border-gray-300 p-3">麻酔によりあまり痛みは感じない。皮膚の薄い部位はチクチクとした痛みを感じることもある</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">費用</td>
                      <td className="border border-gray-300 p-3">顔全体、首、体など施術箇所の面積により異なる。ダーマペン単体よりも価格が高いクリニックが多い</td>
                      <td className="border border-gray-300 p-3">顔全体、首、体など施術箇所の面積により異なる</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                ヴェルベットスキンとダーマペンの根本的な違いは、マッサージピールを塗布するかどうかです。2つの施術を行う分、多くのクリニックではヴェルベットスキンの方が料金は高くなりますが、基本的にはその分大きな効果が期待できます。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                「基本的には」としたのは、ヴェルベットスキンの施術時はダーマペンの針の長さに、制限があるためです。多くのクリニックでは、マッサージピールの刺激が強くなりすぎないよう、ダーマペンの針の長さを0.3mm程度に制限します。そのためアイスピック型のクレーター状になったニキビ跡など、長い針を刺した方が効果があるタイプのお悩みをお持ちの場合は、ダーマペンの方が適しているケースもあります。
              </p>
              <p className="text-gray-700 leading-relaxed">
                美肌効果を目的とする方や、お悩みの症状が比較的軽い方はヴェルベットスキンの方がより大きな効果を得られるでしょう。また痛みに弱い方や心配な方も、ヴェルベットスキンの方がおすすめです。
              </p>
            </div>
          </section>

          {/* おすすめの方 */}
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
                  <span>小じわやたるみが目立ってきた方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>肌がくすんで見える方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>つやとハリのある肌に若返りたい方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>ニキビが良くできて痕になっている方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>肌にデコボコやざらつきがある方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>火傷の痕や傷痕がコンプレックスの方</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>肌のきめが荒く、毛穴の開きでメイクがのらない方</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 施術の流れ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術の流れ</h2>
            <div className={styles.timeline}>
              <div className="flex gap-4 items-start bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">カウンセリング</h3>
                  <p className="text-gray-700">
                    医師による診察とカウンセリングを行います。以下の方は治療できない場合があります。
                  </p>
                  <ul className="mt-3 space-y-1 text-gray-700 text-sm">
                    <li>・妊娠中、授乳中の方</li>
                    <li>・日焼け直後、日焼け予定のある方</li>
                    <li>・炎症性ニキビや重症なニキビの方</li>
                    <li>・ケロイド体質の方</li>
                    <li>・皮膚疾患のある方</li>
                    <li>・出血傾向のある方（抗血小板凝固薬内服など）</li>
                    <li>・重度の糖尿病・膠原病・透析中・悪性腫瘍などの疾患がある方</li>
                    <li>・金属アレルギーの方</li>
                  </ul>
                  <p className="mt-3 text-gray-700 text-sm italic">
                    ※医師の診察時の判断により治療できない場合があります。
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">治療</h3>
                  <p className="text-gray-700">
                    表面麻酔をした後、痛みの確認をしながら肌の状態や部位によってダーマペン4の針の深度を調整します。麻酔が効いているので痛みはほとんど感じられないはずですが、目元など部位によってはチクチクとした刺激を感じることがあります。
                  </p>
                  <p className="mt-3 text-gray-700">
                    施術直後はパックや冷却を行って肌を鎮静化させます。
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">ほかの美容施術との併用</h3>
                  <p className="text-gray-700">
                    ダーマペンは単体の基本コースのほかにも、肌のお悩みに合わせてオプションも追加できます。ダーマペンの効果とそれぞれの美容成分の相乗効果による肌の若返りをぜひご体感ください。ほかに受けてみたい・気になる美容施術がありましたら遠慮なくご相談くださいませ。
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">アフターケア</h3>
                  <p className="text-gray-700">
                    施術から24時間経過してからメイクできます。薬剤を浸透させるためにも、6時間は洗顔や化粧水、乳液のご使用はお控えください。
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">治療後の過ごし方</h3>
                  <p className="text-gray-700">
                    いつも通りの生活ができますが、1週間ほどは赤みが続くことがあります。またレーザーや薬剤でかゆみやヒリヒリとした痛みが起こっても1～2週間で回復していきます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>よくある質問</h2>
            <div className={styles.faqGrid}>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">ニキビの後にクレーターができてしまいました。治りますか？</h3>
                <p className="text-gray-700">
                  ダーマペンはデコボコとしたニキビのあとも滑らかに整えてくれます。クレーターの深さによっては施術を複数回受けていただくことがあります。また、ニキビの症状がひどい場合には先にニキビの治療を行います。
                </p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">ダウンタイムはどのくらいですか？</h3>
                <p className="text-gray-700">
                  個人差もありますが、軽い赤みは1～3日、腫れは2～4日程度で落ち着きます。施術から24時間経過してからメイクできます。
                </p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">ダーマペンの針で傷跡が残ることはないのでしょうか？</h3>
                <p className="text-gray-700">
                  ダーマペンに装着されている針はマイクロニードルというとても細い針です。また、針は一定の振動で均一に当てることができるので、痛みや腫れが生じにくく傷痕が残りにくいように設計されています。ただし、ケロイド体質の方はお控えください。
                </p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">オプション治療は毎回必要ですか？</h3>
                <p className="text-gray-700">
                  ダーマペンは3～4週間に1度行うことで、肌の美しさが続きます。もちろん単体の施術でも構いませんが、もっと肌に元気が欲しいというときにオプションの追加をおすすめします。どのオプションが適しているかは、肌の状態やお悩みの内容を伺ってご提案いたします。
                </p>
              </div>
            </div>
          </section>

          {/* 料金表 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金</h2>
            <div className={styles.priceCards}>
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-gray-900 font-bold">ダーマペン</th>
                      <th className="py-3 px-4 text-right text-gray-900 font-bold">料金（税込）</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">トライアル</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥19,250</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">1回</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥27,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">6回コース</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥137,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">12回コース</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥264,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-white shadow-sm rounded-lg overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-gray-900 font-bold">ヴェルベットスキン</th>
                      <th className="py-3 px-4 text-right text-gray-900 font-bold">料金（税込）</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">トライアル</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥24,360</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">1回</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥34,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">6回コース</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥174,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">12回コース</td>
                      <td className="py-3 px-4 text-right text-gray-700">¥334,080</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.notes}>
              <p>※ 表示価格は全て税込みです。</p>
              <p>※ 上記の施術は、公的医療保険が適用されない自由診療（自費診療）です。</p>
              <p>※ 自由診療においては本国における未承認医薬品・医療機器が含まれます。</p>
              <p>※ 治療に使用する医薬品・機器は当院医師の判断の元、個人輸入にて手続きを行っております。</p>
              <p>※ 未承認医療機器については「個人輸入において注意すべき医薬品等について」もご参照ください。</p>
              <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="font-medium text-gray-700 mb-2">ダーマペン4（Dermapen4）について</p>
                <p>「ダーマペン4（Dermapen4）」は、国内において医薬品医療機器等法上の承認を得ていません。</p>
                <ul className="mt-2 space-y-1">
                  <li><span className="font-medium">■入手経路等</span>：国内の医薬品卸業者より購入しています。</li>
                  <li><span className="font-medium">■国内の承認薬品等の有無</span>：国内にて承認されている同効の機器等はありません。</li>
                  <li><span className="font-medium">■諸外国における安全性などに係る情報</span>：米国FDAで承認されています。</li>
                </ul>
              </div>
              <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="font-medium text-gray-700 mb-2">マッサージピール（PRX-T33ピール）について</p>
                <p>「マッサージピール（PRX-T33ピール）」は、国内において医薬品医療機器等法上の承認を得ていません。</p>
                <ul className="mt-2 space-y-1">
                  <li><span className="font-medium">■入手経路等</span>：国内の医薬品卸業者より購入しています。</li>
                  <li><span className="font-medium">■国内の承認薬品等の有無</span>：国内にて承認されている同効の医薬品等はありません。</li>
                  <li><span className="font-medium">■諸外国における安全性などに係る情報</span>：EMA（欧州医薬品庁）で承認されています。</li>
                </ul>
              </div>
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