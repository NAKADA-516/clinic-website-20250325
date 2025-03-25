"use client";

import Link from "next/link";
import styles from './botox.module.css';

export default function BotoxPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        <div className="text-center mb-16">
          <h1 className={styles.pageTitle}>
            ボトックス注入治療
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ボトックス注射とは</h2>
            <div className={styles.card}>
              <p className="text-gray-700 leading-relaxed">
                ボトックス注射は筋肉と神経の結合部に作用し、局所的に筋肉の動きを弱めることで、筋肉の収縮を抑制します。ボトックスを注入し筋肉の収縮のバランスをコントロールすることで、表情じわを軽減します。また、えらの筋肉に注射することにより、えらを細くする小顔効果や、ふくらはぎに注射して細くする効果も得られます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当院は国内唯一の認証品「ボトックスビスタ®」を使用しています。治療後2週間以内なら修正が完全無料で、アフターフォローも万全でおすすめです。
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>効果</h2>
            <div className={styles.card}>
              <ul className={styles.effectList}>
                <li>額、眉間、目じりのしわ取り</li>
                <li>顎の梅干しジワ</li>
                <li>口周りのしわ</li>
                <li>首と口角のたるみ取り</li>
                <li>エラ痩せ</li>
                <li>ふくらはぎ痩せ</li>
                <li>脇の多汗症</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ボトックスの作用機序</h2>
            <div className={styles.card}>
              <p className="text-gray-700 leading-relaxed">
                表情じわを形成する表情筋にボトックス注射を施術することによって、末梢の神経筋接合部における神経終末内でのアセチルコリン放出が抑制されて神経筋伝達を阻害し、筋弛緩作用を示すことで、筋肉の収縮を抑制して、一定期間表情じわを改善します。
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>こんな方におすすめです</h2>
            <div className={styles.recommendGrid}>
              <div className={styles.recommendCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">表情じわが気になる方</h3>
                <p className="text-gray-700">
                  笑ったときや怒ったとき、表情に入るしわが気になり始めたら、ボトックスによって表情筋の動きを押さえる治療がおすすめです。また、将来の刻まれじわの予防にもおすすめです。
                </p>
              </div>
              <div className={styles.recommendCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">小顔になりたい</h3>
                <p className="text-gray-700">
                  エラの筋肉を小さくすることで小顔になる小顔ボトックスは、簡単で短時間で終わり、ダウンタイムもないことから大変人気でおすすめの施術です。
                </p>
              </div>
              <div className={styles.recommendCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">顎の梅干しジワに</h3>
                <p className="text-gray-700">
                  本人は気が付かなくても、無意識に力を入れていることが多いのがあごのしわ。あごは顔を支えるためにかなり重力がかかってくる部位です。年を重ねるにつれて筋肉が萎縮し、顎先は丸くなっていきます。ボトックス治療であご先の筋肉を緩めておくことで、将来も美しい顎のラインをキープできます。
                </p>
              </div>
              <div className={styles.recommendCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">将来の刻まれじわの予防に</h3>
                <p className="text-gray-700">
                  表情筋を長年かけて何度も動かすことで、だんだんと刻まれたしわへと変化していきます。ボトックスは表情筋の動きを止める働きがあるため、未来の刻まれじわの予防効果がありますので、どなたにもおすすめです。刻まれてしまったしわは治すことはとても大変になります。
                </p>
              </div>
              <div className={styles.recommendCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">笑顔を作った時にない方がよいしわを減らします</h3>
                <p className="text-gray-700">
                  笑顔を作ったときに、歯茎が見えてしまったり鼻の周りにしわが入ってしまう方、目じりや目の下に多くしわが入ってしまう方がみえると思います。写真などで気が付かれる方も見えると思います。ボトックスで原因の筋肉の動きを緩めることで、美しい笑顔に近づけることができます。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>当クリニックでの施術の特徴</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">少量ずつ注射</h3>
                <p className="text-gray-700">
                  ボトックス注射は、怖い顔になる、左右差のある小顔になるという治療だというイメージを持たれている方が多くいらっしゃいます。一度注射してしまうと、改善してくるのに4週間ほどかかることがあります。必ず元に戻りますが、戻るのに時間を要してしまいます。クリニックでは、少量ずつ注射し、足りなければ追加します。この追加は2週間後の経過観察の時に無料でおこなっております。
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3 className="text-xl font-bold mb-4 text-[#40A99B]">必ず行う経過観察</h3>
                <p className="text-gray-700">
                  施術後の結果を診察させていただき、一人ひとりの患者様に合った注入部位・量・薬剤をさらにきめ細かく正確に把握したいからです。ボトックス注射の効果が切れてから、ご本人の感想を聞くだけでは、本当によい仕上がりであったかの判断が難しいです。最もボトックス注射が効いている状態を診察し、正確に把握することは、今後完成度の高い治療をご提供するために必ず必要なことだと考えています。2度3度とご来院していただいている患者様には、ご希望の表情を作り出すことが可能になってきます。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施術できる部位</h2>
            <div className={`${styles.card} ${styles.treatmentAreas}`}>
              <p className="text-gray-700 mb-4">
                額 / 眉間 / 目尻 / あご / 口角 / 口唇周囲 / えらボトックス（くいしばり改善、小顔形成） / 鼻根部 / 首のしわ / わき（脇汗・多汗症治療） / ふくらはぎ（脚痩せ） / ボトックスリフト*
              </p>
              <p className="text-sm text-gray-600">
                *ボトックスリフト…筋肉に作用するように打つボトックス注射とは異なり、筋肉の上層にある皮膚の浅い層に広範囲に注入することで、リフトアップや引き締め効果があります。
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>よくあるご質問</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className="font-bold text-gray-900 mb-2">ボトックス注射の効果はどれくらい続きますか</h3>
                <p className="text-gray-700">
                  4か月ぐらい効果が持続し、その後少しずつ効果は薄れていきます。完全に効果がなくなってしまう前の6か月後ぐらいには再治療をおすすめしています。
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className="font-bold text-gray-900 mb-2">額にボトックス注射をうったら目が開きにくくなってしまったという話を聞きましたがどうしてでしょうか</h3>
                <p className="text-gray-700">
                  額の筋肉を使って、目をあけたりする方がみえます。普段は意識していないので気になりませんが、額の筋肉の動きが止められると、非常に目が開きにくいと感じるかたがみえます。もし、このような症状がおきたとしても、１か月から２か月たってボトックス注射の効果が少し弱くなってくると必ず気にならなくなります。また、額にボトックス注射を希望される方には、額をぐっと押さえていただいて、目が開きづらくないか確認するようにしております。その際、少しでも重たく感じるかたは、慎重に注入させていただいています。
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className="font-bold text-gray-900 mb-2">副作用は他にありますか</h3>
                <p className="text-gray-700">
                  注射時に内出血することはありますが、1週間ほどで改善します。また、アレルギーを引き起こすことはありますが、まれです。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金表</h2>
            <div className={styles.card}>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">ボツラックス 顔 １ヶ所</td>
                    <td className="py-3 text-right w-32">¥14,800</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">ボツラックス 顔 ４ヵ所</td>
                    <td className="py-3 text-right w-32">¥49,800</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">ボツラックス 脇・身体</td>
                    <td className="py-3 text-right w-32">¥49,800</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">ボツラックス追加分</td>
                    <td className="py-3 text-right w-32">¥25,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">顔 １ヶ所</td>
                    <td className="py-3 text-right w-32">¥19,800</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">エラ １ヶ所 ４回</td>
                    <td className="py-3 text-right w-32">¥160,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">オプション</h3>
              <div className={styles.card}>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">表面麻酔 パーツ</td>
                      <td className="py-3 text-right w-32">¥3,300</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">表面麻酔 全顔</td>
                      <td className="py-3 text-right w-32">¥5,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">笑気麻酔</td>
                      <td className="py-3 text-right w-32">¥6,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">※ 表示価格は全て税込みです。</p>
          </section>

          <div className="text-center mt-12">
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