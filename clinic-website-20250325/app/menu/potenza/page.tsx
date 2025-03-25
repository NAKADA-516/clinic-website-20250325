"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './potenza.module.css';

export default function PotenzaPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className={styles.container}>
        {/* ヘッダーセクション */}
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            POTENZA®（ポテンツァ）
          </h1>
        </div>

        {/* ヒーローイメージ */}
        <div className={styles.heroImage}>
          <Image
            src="/images/potenza-hero.jpg"
            alt="ポテンツァ施術機器"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="hover:scale-102 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 1100px"
          />
        </div>

        <div className={styles.content}>
          {/* 以下、各セクションにスタイルを適用 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>POTENZA®（ポテンツァ）とは？</h2>
            <div className={styles.textContent}>
            <p className="text-gray-700 leading-relaxed mb-4">
              ポテンツァは、RF（高周波）エネルギーをマイクロニードル（極細の針）先端から出力する医療機器です。ニードルを皮下へ刺し、針先からRFを照射することで、表皮に熱損傷を起こさず真皮層に直接熱エネルギーを与えます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ニキビ・ニキビ跡、小じわ、毛穴開大の改善など様々な肌の悩みに働きかけるマイクロニードルRF治療、ドラッグデリバリーシステム（薬剤を真皮に届ける）、非侵襲のRF治療、更には全く新しい治療の選択肢として、肝斑や赤ら顔の根本治療ができるなど、様々な治療効果が期待できる治療機械です。
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>POTENZA®(ポテンツア)の仕組み</h2>
            <div className={styles.textContent}>
            <p className="text-gray-700 leading-relaxed mb-6">
              POTENZA®では極細の針（約32G　ドラッグデリバリーチップは28G）を用います。また、針を刺す速度と間隔、照射するRFの熱量を患者様にあわせて調整することで、より痛みに配慮した治療が可能です。また、表皮を熱損傷しないような特殊コーティングの針を用います。
              </p>
              
              <div className={styles.imageContainer}>
                <h3 className={styles.imageTitle}>①ニードルRFの仕組み</h3>
                <div className={styles.imageWrapper}>
                <Image
                  src="/images/potenza-needle-rf.jpg"
                  alt="ポテンツァ ニードルRFの仕組み"
                  fill
                  style={{ objectFit: "contain" }}
                    className={styles.image}
                />
                </div>
              </div>
              
              <p className={styles.italic}>「ダーマペンの進化版」：　針を刺すだけでなく熱作用を入れるため、巷ではこのように呼ばれます。</p>
            </div>
            
            <div className={styles.imageContainer}>
              <h3 className={styles.imageTitle}>②ニードルRF+ドラッグデリバリーシステム</h3>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/potenza-drug-delivery.jpg"
                  alt="ポテンツァ ドラッグデリバリーシステム"
                  fill
                  style={{ objectFit: "contain" }}
                  className={styles.image}
                />
              </div>
            </div>
            
            <div className={styles.imageContainer}>
              <h3 className={styles.imageTitle}>③非侵襲のRF治療</h3>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/potenza-non-invasive.jpg"
                  alt="ポテンツァ 非侵襲RF治療"
                  fill
                  style={{ objectFit: "contain" }}
                  className={styles.image}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>POTENZA®（ポテンツア）で改善できる症状</h2>
            <div className={styles.textContent}>
            <p className="text-gray-700 leading-relaxed mb-6">
              先端（tip）を変えることで、様々な疾患の治療ができるようになりました。
            </p>
            
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>●ニードルRF　ポテンツア美肌、肝斑、赤ら顔</h3>
                <ul className={styles.list}>
                <li>炎症ニキビ　（Aチップ、Iチップ）※皮脂腺を壊す効果が認められています</li>
                <li>汗管腫　（Pチップ）</li>
                <li>肌質・小じわ・毛穴　（Iチップ、Sチップ）</li>
                <li>赤ら顔（酒さ・紅潮）（Sチップ）</li>
                <li>肝斑　（Sチップ）</li>
              </ul>
            </div>
            
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>●ポテンツア水光陶器肌：ニードルRF＋ドラッグデリバリー</h3>
                <ul className={styles.list}>
                <li>リジュビネーション、毛穴　（CPチップ）</li>
                <li>瘢痕、ニキビ痕のクレーター　（CPチップ）</li>
              </ul>
            </div>
            
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>●ダイアモンドチップ（非侵襲治療）</h3>
                <ul className={styles.list}>
                <li>肌の引き締め</li>
                <li>たるみの予防</li>
              </ul>
            </div>
            
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>●SFAチップ</h3>
                <ul className={styles.list}>
                <li>肌の入れ替え</li>
                <li>肌質改善</li>
                <li>小じわ</li>
              </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>併用薬剤</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>McCoom（マックーム）</h3>
              <div className={styles.textContainer}>
              <p className="text-gray-700 leading-relaxed mb-4">
                POTENZA®専用に開発された粒子の細かいPLLA（ポリL乳酸）製剤薬です。
                PLLAとはPoly-l-Lactic Acid（ポリL乳酸）のことで、従来より縫合糸としてだけでなく、多くの国でニキビ跡、顔面の脂肪萎縮の治療に使われていた製剤です。安全性に優れ、生体で数か月～約2年かけて水分と二酸化炭素に分解、吸収されていきます。真皮内では、線維芽組織を刺激し、コラーゲンの生成を促します。
              </p>
              </div>
            </div>
            
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <h4 className={styles.gridTitle}>細胞再生（フィロルガ・シャネル注射）</h4>
                <p className={styles.gridText}>高濃度ヒアルロン酸、ビタミンやアミノ酸等の美肌成分55種類</p>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridTitle}>プラセンタ</h4>
                <p className={styles.gridText}>肌細胞の活性化・美肌</p>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridTitle}>高濃度ビタミンC</h4>
                <p className={styles.gridText}>美白・シミ・ニキビ痕の色素沈着</p>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridTitle}>トラネキサム酸</h4>
                <p className={styles.gridText}>肝斑改善・肌荒れ改善</p>
              </div>
              <Link href="/menu/exosome" className={styles.link}>
                <div className={styles.linkContainer}>
                  <h4 className={styles.linkTitle}>
                    幹細胞エクソソーム
                    <span className={styles.tag}>詳細ページあり</span>
                  </h4>
                  <p className={styles.linkText}>再生医療・若返り・ダメージ修復・美白</p>
                </div>
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>POTENZA®（ポテンツア）で期待が持てる新たな治療について</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>肝斑の治療</h3>
              <div className={styles.textContainer}>
              <p className="text-gray-700 leading-relaxed">
                これまでは、1064nmのNd:YAGレーザー波長かつ低出力で、穏やかに色素排出を行う治療が主流でした。POTENZA®は、メラノサイト自体に特定のRFエネルギーを与えることで、肝斑の原因となるメラニン産生を抑制します。
              </p>
              </div>
            </div>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>赤ら顔（酒さ・紅潮）の治療</h3>
              <div className={styles.textContainer}>
              <p className="text-gray-700 leading-relaxed">
                血管治療は色素レーザーが効果は高いのですが、POTENZA®は毛細血管が存在する真皮層へ直接RFエネルギーを与えることで、血管内皮細胞増殖因子（vascular endothelial growth factor: VEGF）を抑え、新生血管を作らせないようにします。
              </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>治療の流れ</h2>
            <p className={styles.italic}>※ダイアモンドチップ以外の治療は、１～２日は赤みやほてりなどのダウンタイムがあります。</p>
            
            <div className={styles.listContainer}>
              <div className={styles.listItem}>
                <div className={styles.listNumber}>1</div>
                <div className={styles.listText}>
                  <p className="text-gray-700 leading-relaxed">
                    初診時には問診票を記入いただいてから、治療部位が顔である場合はメイクをとっていただきます。診察でしっかり肌診断を行い、どの治療が適しているかを判断します。
                  </p>
                </div>
              </div>
              
              <div className={styles.listItem}>
                <div className={styles.listNumber}>2</div>
                <div className={styles.listText}>
                  <p className="text-gray-700 leading-relaxed">
                    治療部位の範囲にもよりますが、治療時間は２０分程度です。ダイアモンドチップ治療以外は、表面麻酔をすることを強く推奨します。（麻酔時間は３０～４５分です）
                  </p>
                </div>
              </div>
              
              <div className={styles.listItem}>
                <div className={styles.listNumber}>3</div>
                <div className={styles.listText}>
                  <p className="text-gray-700 leading-relaxed">
                    ダイアモンドチップ治療後はすぐにメイク可能、他は翌日からのメイクをお願いします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>治療後の経過</h2>
            <div className={styles.listContainer}>
              <ul className={styles.list}>
              <li>ダイアモンドチップ治療後はほぼダウンタイムはありません。</li>
              <li>他の施術の場合、当日～翌日までは赤みが出たりすることがあります。当日のメイクはご遠慮いただいています。</li>
              <li>赤みも１～２日は続くこともあります。ブツブツを伴うこともあります。</li>
              <li>１週間くらいで肌の弾力やハリが実感できます。</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>治療の目安</h2>
            <div className={styles.listContainer}>
              <ul className={styles.list}>
              <li>ダイアモンドチップ治療は２週間に１回　６回程度で１クール、年１～２回。</li>
              <li>他の治療は月に１回、３～５回が１クール、肌の状態で間隔をあけていきます。</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>注意事項</h2>
            <div className={styles.listContainer}>
              <ul className={styles.list}>
              <li>治療後は日焼けや洗顔の際にも強く肌をこすったりしないで下さい。</li>
              <li>施術中・施術後に赤み（数時間以内で収まる軽度の状態）、まれに色素沈着や腫れが起こる可能性があります。</li>
              <li>アレルギー体質の方は皮膚炎・及び色素沈着等を起こす可能性があります。</li>
              <li>ニキビ治療目的の場合、治療中一時的にニキビの数が増えることがあります（好転反応）。自身の判断で他薬剤の塗布や処置をしないでください。</li>
              <li>治療期間中に内服、外用している薬があればその都度申し出て下さい。現在、服用されている飲み薬・塗り薬がある方は事前にお申し出下さい。</li>
              <li>治療後の経過にはいくらかの個人差があります。また、治療中・治療後に予期しない合併症や後遺症が生じる可能性があります。</li>
              <li>妊娠中の方は、治療を受ける事ができませんのでご了承ください。</li>
              <li>施術の効果には個人差があります</li>
              <li>治療に関する詳しい説明は、カウンセリング時に医師が行います</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>料金表</h2>
            
            <div className={styles.tableContainer}>
              <h3 className={styles.tableTitle}>タイトニング</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <tbody>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>トライアル</td>
                      <td className={styles.tableCell}>￥35,000</td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>１回</td>
                      <td className={styles.tableCell}>￥50,000</td>
                    </tr>
                    <tr>
                      <td className={styles.tableCell}>６回コース</td>
                      <td className={styles.tableCell}>￥250,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className={styles.tableContainer}>
              <h3 className={styles.tableTitle}>肌再生マックーム</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <tbody>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>トライアル</td>
                      <td className={styles.tableCell}>￥66,500</td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>１回</td>
                      <td className={styles.tableCell}>￥95,000</td>
                    </tr>
                    <tr>
                      <td className={styles.tableCell}>６回コース</td>
                      <td className={styles.tableCell}>￥475,000</td>
                    </tr>
                    <tr>
                      <td className={styles.tableCell}>１２回コース</td>
                      <td className={styles.tableCell}>￥912,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>幹細胞エクソソーム</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <tbody>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>トライアル</td>
                      <td className={styles.tableCell}>￥105,000</td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td className={styles.tableCell}>１回</td>
                      <td className={styles.tableCell}>￥150,000</td>
                    </tr>
                    <tr>
                      <td className={styles.tableCell}>６回コース</td>
                      <td className={styles.tableCell}>￥750,000</td>
                    </tr>
                    <tr>
                      <td className={styles.tableCell}>１２回コース</td>
                      <td className={styles.tableCell}>￥1,440,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <p className={styles.disclaimer}>※すべて税込価格です。</p>
            <p className={styles.disclaimer}>※初回カウンセリング料はいただいておりません。</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>未承認医薬品等について</h2>
            <div className={styles.textContainer}>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">ポテンツァは医薬品医療機器等法上の承認を得ていない未承認医薬品です。</span>
              </p>
              
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>■入手経路等</h3>
                <p className={styles.listText}>当院医師の判断の元、Jeisys Medical社より個人輸入しています。</p>
              </div>
              
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>■国内の承認機器の有無</h3>
                <p className={styles.listText}>同一の成分や性能を有する他の国内承認機器等はありません。</p>
              </div>
              
              <div>
                <h3 className={styles.listTitle}>■諸外国における安全性などに係る情報</h3>
                <p className={styles.listText}>米国FDA、欧州CE、韓国MFDSで承認されています。</p>
              </div>
            </div>
          </section>

          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>ご予約・ご相談について</h2>
            <p className="text-gray-700 mb-4">
              施術に関するご不安な点やご質問は、カウンセリングの際に担当医師にご相談ください。お肌の状態を確認した上で、適切な治療計画をご提案させていただきます。
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <a
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className={styles.button}
            >
              カウンセリング予約
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 