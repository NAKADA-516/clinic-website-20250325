"use client";

import Image from "next/image";
import Link from "next/link";
import PriceTable from '../../components/PriceTable';

export default function ElectroporationPage() {
  const basicPriceItems = [
    { menu: "エレクトロポレーション　１回", price: "￥15,000" },
    { menu: "エレクトロポレーション　６回コース", price: "￥75,000" },
    { menu: "エレクトロポレーション　１２回コース", price: "￥144,000" }
  ];

  const premiumPriceItems = [
    { menu: "エレクトロポレーション + 細胞エクソソーム　１回", price: "￥90,000" },
    { menu: "エレクトロポレーション + 細胞エクソソーム　６回コース", price: "￥450,000" },
    { menu: "エレクトロポレーション + 細胞エクソソーム　１２回コース", price: "￥864,000" }
  ];

  const notes = [
    "※ 表示価格は全て税込みです。",
    "※ 初回カウンセリング料はいただいておりません。",
    "※ 上記の施術は、公的医療保険が適用されない自由診療（自費診療）です。"
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-[#f8fcfc]">
      <div className="container mx-auto px-4">
        {/* Hero Section with Improved Styling - Title above Image */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-[#40A99B]/10 rounded-2xl -z-10"></div>
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Title Section */}
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl md:text-5xl tracking-[.5em] text-[#40A99B] mb-4">
                ELECTROPORATION
          </h1>
              <p className="font-serif text-xl text-[#65B5AA] mb-6">
            エレクトロポレーション
          </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                特殊な電気パルスで美容成分を肌深部へ。従来の約20倍の浸透力で効果的な肌質改善を実現
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="w-full">
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl border-4 border-white mx-auto">
                <Image
                  src="/images/electroporation-hero.jpg"
                  alt="エレクトロポレーション施術イメージ"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Introduction Section with Decorative Elements */}
          <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#40A99B]/10 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#40A99B]/10 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              エレクトロポレーションとは？
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                特殊な電気パルスを皮膚表面に与えることにより、一時的に皮膚に空洞を作って有効成分を通します。これにより皮膚の深部にまで有効成分をダイレクトに浸透させることが可能となり、その浸透率は従来のイオン導入の約20倍の効果があると言われています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                また、イオン導入では浸透させることが難しかった高分子成分についても効率よく浸透させていくことができます。
              </p>
            </div>
            
            {/* エレクトロポレーションとイオン導入の違い */}
            <div className="mb-10 bg-[#f8fcfc] p-6 rounded-lg border border-[#40A99B]/20 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#40A99B]">エレクトロポレーションとイオン導入の違い</h3>
              <p className="text-gray-700 mb-4">
                エレクトロポレーションとイオン導入、どちらも電気の力を用いて皮膚に有効成分を届ける治療ですが、浸透できる「成分の種類」と「量」に大きな違いがあります。
              </p>
              <p className="text-gray-700 mb-4">
                イオン導入は美容成分をイオン化させて皮膚に浸透させるため、ヒアルロン酸やコラーゲンのようにイオン化できなかったり、高分子の成分は皮膚深部まで浸透させることができません。
              </p>
              <p className="text-gray-700 mb-6">
                エレクトロポレーションは皮膚の細胞間に"隙間"をつくるので、大きな成分でも深部まで浸透させることができます。そのため、イオン導入と比較すると「約20倍」も効果が高いとされています。また浸透できる成分の種類も多いので、イオン導入よりも治療の幅が広がります。
              </p>
              
              {/* 比較画像 */}
              <div className="w-full max-w-2xl mx-auto my-8">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md border border-[#40A99B]/20 bg-white">
                  <Image
                    src="/images/electroporation-vs-ion.jpg"
                    alt="エレクトロポレーションとイオン導入の浸透の違い"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-center text-gray-500 mt-2 text-sm">浸透メカニズムの違い</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#40A99B] text-white">
                      <th className="py-3 px-4 text-left border-r border-[#40A99B]/80"></th>
                      <th className="py-3 px-4 text-left border-r border-[#40A99B]/80">イオン導入</th>
                      <th className="py-3 px-4 text-left">エレクトロポレーション</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium bg-gray-50 border-r border-gray-200">ターゲット</td>
                      <td className="py-3 px-4 border-r border-gray-200">表皮</td>
                      <td className="py-3 px-4">表皮～真皮層</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium bg-gray-50 border-r border-gray-200">導入できる<br/>成分</td>
                      <td className="py-3 px-4 border-r border-gray-200">
                        <ul className="list-disc list-inside text-sm">
                          <li>イオン化できる成分</li>
                          <li>分子の小さな成分</li>
                          <li>水溶性物質</li>
                        </ul>
                      </td>
                      <td className="py-3 px-4">
                        <ul className="list-disc list-inside text-sm">
                          <li>イオン化できない成分でも浸透可能</li>
                          <li>分子の大きな成分</li>
                          <li>水溶性、脂溶性物質</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium bg-gray-50 border-r border-gray-200">浸透率</td>
                      <td className="py-3 px-4 border-r border-gray-200">10～15％</td>
                      <td className="py-3 px-4 font-bold text-[#40A99B]">80～90％</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              
            {/* 装置画像 - 文章の下に移動 */}
            <div className="w-full max-w-xl mx-auto mt-6 mb-6">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-[#40A99B]/20 bg-white">
                <Image
                  src="/images/electroporation-device.jpg"
                  alt="エレクトロポレーション施術機器"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-center text-gray-500 mt-2 text-sm">エレクトロポレーション施術機器</p>
            </div>
          </section>

          {/* Treatment Effects with Card Style */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              治療効果
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "シミ・くすみ・肝斑の改善", 
                "ニキビ・ニキビ跡の改善", 
                "毛穴の引き締め", 
                "肌にハリ・つやを取り戻します",
                "肌質改善"
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#40A99B]/20 flex items-center justify-center">
                        <span className="text-[#40A99B] font-bold">✓</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Flow with Enhanced Visual Appeal */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              治療の流れ
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="bg-[#40A99B] text-white py-3 px-6">
                <h3 className="font-bold text-lg">施術の流れ</h3>
              </div>
              
              <div className="p-6 space-y-10">
                {[
                  {
                    title: "カウンセリング",
                    desc: "まずはじめにお肌の状態や症状を診察させていただき、治療内容についてのご説明をさせていただきます。患者様が納得するまで充分なカウンセリングを行います。"
                  },
                  {
                    title: "洗顔",
                    desc: "洗顔をしてメイクを丁寧に落としていただきます。クレンジングはご用意しております。"
                  },
                  {
                    title: "導入剤の塗布",
                    desc: "お顔にしっかりと導入剤を塗っていきます。導入剤は3種類からお選びいただけます。"
                  },
                  {
                    title: "施術",
                    desc: "皮膚表面に電圧をかけることにより、細胞膜に一時的に微細な隙間を作り薬剤を導入していきます。"
                  },
                  {
                    title: "施術後",
                    desc: "施術後はお化粧をして、ご帰宅いただけます。"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-[#40A99B] text-white flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-3">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Treatment Details Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              施術概要
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <tbody>
                  {[
                    { 
                      label: "治療方法", 
                      value: "薬液を肌にのせ、専用の機械で特殊な電気パルスを皮膚表面に与えることにより、一時的に皮膚に空洞を作って有効成分を通す" 
                    },
                    { label: "所要時間", value: "約30分" },
                    { label: "施術回数", value: "5回程度（１週間おきに数回）" },
                    { label: "術後経過", value: "ダウンタイムはほとんどない。直後に赤みが出る方もいますが数時間で消退。" },
                    { label: "通院", value: "なし" },
                    { label: "痛み", value: "基本的になし" },
                    { label: "副作用・リスク", value: "赤み" },
                    { label: "洗顔・メイク", value: "当日から可能" },
                    { label: "入浴・シャワー", value: "当日から可能" },
                    { label: "アフターケア", value: "保湿、紫外線対策" }
                  ].map((row, index, array) => (
                    <tr 
                      key={index} 
                      className={index !== array.length - 1 ? "border-b border-gray-200" : ""}
                    >
                      <td className="py-4 px-6 border-r border-gray-200 font-medium bg-gray-50 w-1/3">
                        {row.label}
                      </td>
                      <td className="py-4 px-6">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Precautions Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              注意事項
            </h2>
            
            <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-400 mb-8">
              <h3 className="font-bold text-lg text-red-700 mb-3">施術ができない方</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>施術部位にヘルペスや皮膚炎のある方</li>
                <li>妊娠中の方、授乳中の方</li>
                <li>ケロイド体質の方</li>
                <li>強い日焼けをされている方</li>
                <li>免疫不全、感染症、出血性疾患、心臓疾患、悪性腫瘍のある方</li>
              </ul>
            </div>
            
            <div className="bg-[#f8fcfc] rounded-xl p-8 shadow-lg mb-10">
              <h3 className="font-bold text-lg text-gray-900 mb-4">副作用、リスク</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 mr-3 text-[#40A99B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">赤みが出る方もいます。通常は数時間で消退します。</p>
                </li>
            </ul>
            </div>
          </section>

          {/* Approval Status Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              使用する機器・薬剤について
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4">
                この治療で使用されるエレクトロポレーションは医薬品医療機器等法上の承認を得ていない未承認機器・医薬品です。
            </p>
          </div>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 border-r border-gray-200 font-medium bg-gray-50 w-1/3">
                      機器について
                    </td>
                    <td className="py-4 px-6">
                      日本製
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 border-r border-gray-200 font-medium bg-gray-50">
                      入手経路
                    </td>
                    <td className="py-4 px-6">
                      サンソリット
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 border-r border-gray-200 font-medium bg-gray-50">
                      国内の承認医薬品等の有無
                    </td>
                    <td className="py-4 px-6">
                      同一の成分や性能を有する他の国内承認医療機器・医薬品等はありません。
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-r border-gray-200 font-medium bg-gray-50">
                      諸外国における安全性等に係る情報
                    </td>
                    <td className="py-4 px-6">
                      特定のリスクとしては、赤みなどが報告されています。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-md border-l-4 border-blue-400 mb-8">
              <p className="text-gray-700">
                美容皮膚科治療では、国内未承認医薬品または医療機器を用いて施術を行います。
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#40A99B]/30 pb-3 inline-block">
              よくある質問
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "痛みはありますか？",
                  answer: "原則的に痛みを感じることはありません。"
                },
                {
                  question: "ダウンタイムはありますか？",
                  answer: "特にありません。すぐにお化粧をしていただけます。"
                },
                {
                  question: "施術はどのくらい時間がかかりますか？",
                  answer: "20～30分くらいかかります。"
                },
                {
                  question: "どのくらいのペースで受けると効果的ですか？",
                  answer: "すぐに効果を実感していただけることが多いですが、持続させるには、最初の５回位は週１回程度のペースで受けていただくことをおすすめします。"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#40A99B] text-lg mb-3 flex items-center">
                    <span className="bg-[#40A99B] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">Q</span>
                    {item.question}
                  </h3>
                  <div className="pl-10">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 料金表セクション */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              料金表
            </h2>
            
            <div className="space-y-8">
              <PriceTable
                title="エレクトロポレーション"
                items={basicPriceItems}
              />
              
              <PriceTable
                title="エレクトロポレーション + 細胞エクソソーム"
                items={premiumPriceItems}
                notes={notes}
              />
            </div>
          </section>

          {/* 幹細胞エクソソームへのリンク */}
          <div className="bg-[#f0f8f7] p-6 rounded-lg border border-[#40A99B]/30 mb-8 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h4 className="font-bold text-[#40A99B] text-lg mb-2">幹細胞エクソソームについて</h4>
                <p className="text-gray-700">最先端の再生医療技術を活用した幹細胞エクソソームの詳細な説明はこちらからご覧いただけます。</p>
              </div>
              <Link 
                href="/menu/exosome" 
                className="mt-4 md:mt-0 inline-block bg-white text-[#40A99B] border border-[#40A99B] px-6 py-2 rounded-lg hover:bg-[#40A99B] hover:text-white transition-colors shadow-sm"
              >
                詳細はこちら →
              </Link>
            </div>
          </div>

          {/* Reservation CTA with Enhanced Design */}
          <div className="bg-gradient-to-r from-[#40A99B]/10 to-white p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#40A99B]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#40A99B]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                ご予約・ご相談について
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl">
                施術に関するご不安な点やご質問は、カウンセリングの際に担当医師にご相談ください。お肌の状態を確認した上で、適切な治療計画をご提案させていただきます。
              </p>

          <div className="text-center">
            <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="inline-block bg-[#40A99B] text-white px-10 py-4 rounded-lg hover:bg-[#65B5AA] transition-colors shadow-md hover:shadow-lg text-lg font-medium"
            >
              カウンセリング予約
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 