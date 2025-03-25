"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-medium mb-4 text-[#40A99B]">
            マッサージピール
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            肌再生と美肌効果を引き出す先進的ピーリング治療
          </p>
          
          {/* ヒーローイメージ */}
          <div className="relative w-full max-w-4xl h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg mb-12">
            <Image
              src="/images/massage-peel-hero.jpg"
              alt="マッサージピール施術イメージ"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="hover:scale-102 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* マッサージピールとは */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">マッサージピール（PRX-T33ピール）</h2>
            <div className="bg-white shadow-sm rounded-lg p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                マッサージしながら薬剤を皮膚深部へと浸透させてコラーゲン増産を促す、全く新しいピーリングです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                主成分のひとつ、トリクロロ酢酸（TCA）が皮膚の真皮層に働きかけ、コラーゲン、エラスチン、ヒアルロン酸などの生成を促し、肌のハリ・弾力を回復させます。長期的なコラーゲン増産効果があることから、「コラーゲンピール」とも呼ばれています。さらに、強い美白効果を持つコウジ酸も配合されており、シミ、くすみを改善するなど、総合的なエイジングケアを叶えるピーリングです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                従来のピーリングのように皮膚表面へのダメージがほぼないのも魅力で、「ダーマペン」など他の治療と組み合わせることで、より高い美肌効果を発揮します。
              </p>
            </div>
          </section>

          {/* こんな方におすすめ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">こんな方におすすめ</h2>
            <div className="bg-white shadow-sm rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>肌のハリ、ツヤを高めたい</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>小ジワ、たるみを改善したい</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>毛穴の黒ずみ、開きが気になる</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>肌のざらつきが気になる</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>透明感のある美白肌を目指したい</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>繰り返すニキビを改善したい</span>
                </li>
              </ul>
            </div>
          </section>

          {/* マッサージピールとは？ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">マッサージピール（PRX-T33ピール）とは？</h2>
            <div className="bg-white shadow-sm rounded-lg p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                マッサージピールは、イタリアで開発された高濃度トリクロロ酢酸（TCA）と低濃度過酸化水素（H2O2）を配合した薬剤「PRX-T33」を使うケミカルピーリングです。マッサージをしながら皮膚の真皮層にまで働きかけるため、「マッサージピール」と呼ばれています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                加齢などで乱れたターンオーバーを整えるほか、真皮層に存在する線維芽細胞を活性化させる作用を持ちます。コラーゲン生成が促進され、皮膚深部からハリ・弾力を高め、ツヤのある若々しい肌へと導きます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                さらに、美白効果の高いコウジ酸も配合されており、肝斑・シミ、くすみ改善にも効果的です。ピーリングという手軽な施術だけで、さまざまなエイジングサインにアプローチしてくれます。
              </p>
            </div>
          </section>

          {/* 配合成分と効果 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">マッサージピール（PRX-T33ピール）の配合成分と効果</h2>
            
            <div className="space-y-8">
              {/* トリクロロ酢酸 */}
              <div className="bg-white shadow-sm rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">トリクロロ酢酸（TCA）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  マッサージピールには、トリクロロ酢酸（TCA）が33％と高濃度で含まれています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  「皮膚の土台」とも呼ばれる真皮層を刺激して、角化細胞や線維芽細胞を活性化させます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  線維芽細胞は、コラーゲンやエラスチン、ヒアルロン酸などを作り出す細胞です。トリクロロ酢酸（TCA）の作用により、マッサージピール施術後数ヶ月にわたって、真皮層ではコラーゲンなどの増産が促されます。そのため、肌にハリ・弾力がよみがえり、小ジワ、たるみ改善効果なども期待できます。
                </p>
              </div>
              
              {/* 過酸化水素 */}
              <div className="bg-white shadow-sm rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">過酸化水素（H2O2）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  過酸化水素（H2O2）には、皮膚表面を保護する働きがあります。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  トリクロロ酢酸（TCA）は強酸性のため、従来のピーリングでは、凹凸にあるニキビ跡治療など、顔全体ではなく、局所的に用いられていました。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  マッサージピールは、独自技術により過酸化水素（H2O2）を配合することで、トリクロロ酢酸（TCA）のピーリング作用（剥離作用）を中和。皮膚をダメージから守り、安全に真皮層まで浸透させることが可能となっています。
                </p>
              </div>
              
              {/* コウジ酸 */}
              <div className="bg-white shadow-sm rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">コウジ酸</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  コウジ酸は、シミ治療に効果的な美白有効成分です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  メラニンを作る酵素「チロシナーゼ」の働きを抑える効果があります。そのため、メラニン生成前にシミができるのを抑制するため、肝斑、色素沈着の改善も期待ができ、高い美白効果を発揮します。
                </p>
              </div>
            </div>
          </section>

          {/* コラーゲン生成効果 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">マッサージピール（PRX-T33ピール）のコラーゲン生成効果</h2>
            <div className="bg-white shadow-sm rounded-lg p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                マッサージピールは、従来のピーリングとは異なり、皮膚表面を剥離せずに薬剤を浸透することができるのが特徴です。また、即効性も高く、施術直後から肌の質感が変わったのを実感できます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                皮膚表面にダメージを与えることなく、深部まで浸透してコラーゲン生成を促すため、「コラーゲンピール」と呼ばれることもあります。
              </p>
              
              {/* 効果のメカニズム説明 */}
              <div className="mt-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  １）顔全体にマッサージピールを塗布した後、過酸化水素（H2O2）が皮膚の浅い層に素早く浸透します。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ２）トリクロロ酢酸（TCA）の水素イオンが、表皮層にて過酸化水素（H2O2）と反応して水（H2O）となり、皮膚を保護します。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ３）トリクロロ酢酸（TCA）の水素イオンが真皮層に浸透し、衰えた細胞の再生、新たなコラーゲン増産を促進するよう線維芽細胞へ働きかけます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ４）皮膚の深層から、強力にコラーゲン産生が促されます。
                </p>
              </div>
            </div>
          </section>

          {/* 併用治療 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">ピーリング効果を最大限に引き出す併用治療</h2>
            <div className="bg-white shadow-sm rounded-lg p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                より高い美肌効果を求めるなら、マッサージピールと「ダーマペン4（Dermapen4）」との併用治療がおすすめです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「ダーマペン」は、極細針で皮膚深部を刺激して、肌再生を促す美肌治療です。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「ダーマペン」の施術後にマッサージピールを行うことで、皮膚深部への浸透度がぐっとアップします。そのため、マッサージピールのコラーゲン増産効果を最大限に引き出すことが可能となり、よりなめらかで若々しい素肌を取り戻すことが可能となります。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「ダーマペン」の肌再生との相乗効果によって、注射針を使わずにまるでヴェルヴェットのような艶やかな素肌をつくることから、「ヴェルヴェットスキン」と呼ばれることもある人気治療です。レーザー治療では難しい、手の甲や首のケアにも最適です。
              </p>
              
              <div className="mt-6">
                <Link
                  href="/menu/dermapen"
                  className="inline-block bg-[#81D8D0] text-white px-6 py-3 rounded-md font-medium hover:bg-[#65B5AA] transition-colors"
                >
                  ダーマペンの詳細を見る
                </Link>
              </div>
            </div>
          </section>

          {/* マッサージピールについて */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">マッサージピール（PRX-T33ピール）について</h2>
            <div className="bg-white shadow-sm rounded-lg p-8">
              <p className="text-gray-700 font-medium mb-4">
                「マッサージピール（PRX-T33ピール）」は、国内において医薬品医療機器等法上の承認を得ていません。
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <p className="font-medium">■入手経路等</p>
                  <p>国内の医薬品卸業者より購入しています。</p>
                </li>
                <li>
                  <p className="font-medium">■国内の承認薬品等の有無</p>
                  <p>国内にて承認されている同効の医薬品等はありません。</p>
                </li>
                <li>
                  <p className="font-medium">■諸外国における安全性などに係る情報</p>
                  <p>EMA（欧州医薬品庁）で承認されています。</p>
                </li>
              </ul>
            </div>
          </section>

          {/* 料金表 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">料金表</h2>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-gray-900 font-bold">マッサージピール</th>
                    <th className="py-3 px-4 text-right text-gray-900 font-bold">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-700">トライアル</td>
                    <td className="py-3 px-4 text-right text-gray-700">¥10,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">1回</td>
                    <td className="py-3 px-4 text-right text-gray-700">¥15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">6回コース</td>
                    <td className="py-3 px-4 text-right text-gray-700">¥75,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">12回コース</td>
                    <td className="py-3 px-4 text-right text-gray-700">¥144,000</td>
                  </tr>
                </tbody>
              </table>
          </div>

            <div className="mt-4 text-sm text-gray-500">
              <p>※ 表示価格は全て税込みです。</p>
              <p>※ 上記の施術は、公的医療保険が適用されない自由診療（自費診療）です。</p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className="inline-block bg-[#81D8D0] text-white px-8 py-4 rounded-full font-medium hover:bg-[#65B5AA] transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300"
            >
              無料カウンセリングを予約する
            </Link>
            <p className="mt-4 text-gray-600">
              ご不明な点は、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 
 