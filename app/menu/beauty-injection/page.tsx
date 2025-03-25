"use client";

import Image from "next/image";
import Link from "next/link";

export default function HyaluronicAcidPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <div className="relative h-[400px]">
        <Image
          src="https://placehold.co/1920x800/E5F4F3/333333?text=Hyaluronic+Acid+Injection"
          alt="ヒアルロン酸注入"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            ヒアルロン酸注入
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center">
            自然な若々しさを取り戻す
          </p>
        </div>
      </div>

      {/* コンテンツセクション */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E5F4F3] to-white opacity-40"></div>
        <div className="container mx-auto px-4 relative">
          {/* 概要 */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              ヒアルロン酸注入について
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              年齢とともに減少するヒアルロン酸を補うことで、自然な若々しさを取り戻すことができます。
              当クリニックでは、すでに刻まれたシワを薄くする治療だけでなく、シワができにくくする予防治療もご用意しています。
              患者様のお悩みに合わせて最適な治療方法をご提案いたします。
            </p>

            <div className="grid gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  シワ・ほうれい線の種類
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-[#81D8D0] mb-2">小じわ</h4>
                    <p className="text-gray-600">
                      紫外線、加齢、不適切なスキンケアなどによって肌の水分量が減少し、
                      肌のキメが荒くなることで現れる浅くて細かいシワです。
                      ファンデーションが溜まってメイクが決まりにくい原因となります。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#81D8D0] mb-2">ほうれい線</h4>
                    <p className="text-gray-600">
                      小鼻から口の両脇にかけてできるシワで、主な原因は加齢によるたるみです。
                      40代以上の方に多く見られ、表情筋の衰えやコラーゲンの減少によって
                      肌の弾力が失われることで発生します。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#81D8D0] mb-2">表情ジワ</h4>
                    <p className="text-gray-600">
                      目尻、額、眉間、口元など、表情を作る際によく動かす部分にできやすいシワです。
                      加齢や紫外線によってダメージを受けた肌は柔軟性が低下し、
                      表情を戻しても元に戻りにくくなります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                治療のメリット
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">1</span>
                  </span>
                  <p className="text-gray-600">施術後すぐに効果を実感でき、ダウンタイムもほとんどありません</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">2</span>
                  </span>
                  <p className="text-gray-600">最長2年程度効果が持続し、自然な仕上がりを実現</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">3</span>
                  </span>
                  <p className="text-gray-600">予防治療としても効果的で、シワの進行を防ぎます</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 料金プラン */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              料金プラン
            </h2>
            <div className="grid gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  通常治療メニュー
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "ほうれい線",
                      volume: "1本",
                      price: "55,000",
                      description: "表情豊かな自然な仕上がりを実現",
                    },
                    {
                      name: "リップ",
                      volume: "0.5本",
                      price: "38,500",
                      description: "魅力的な唇のボリュームアップに",
                    },
                    {
                      name: "涙袋",
                      volume: "0.5本",
                      price: "38,500",
                      description: "愛らしい印象的な目元へ",
                    },
                  ].map((plan, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-200 pb-4"
                    >
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {plan.name}
                        </h4>
                        <p className="text-sm text-gray-500">{plan.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">施術量：{plan.volume}</p>
                        <p className="text-xl font-bold text-[#81D8D0]">
                          ¥{plan.price}
                        </p>
                        <p className="text-xs text-gray-500">（税込）</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  おすすめセットメニュー
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "マイナス５歳セット",
                      items: ["ポテンツァ", "ヒアルロン酸 3本"],
                      price: "250,000",
                      period: "当日のみ",
                    },
                    {
                      name: "エイジレスセット",
                      items: ["ポテンツァ", "ヒアルロン酸 2本", "ボトックス（お顔2部位）"],
                      price: "220,000",
                      period: "当日のみ",
                    },
                  ].map((set, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-800">
                          {set.name}
                        </h4>
                        <div className="text-right">
                          <p className="text-xl font-bold text-[#81D8D0]">
                            ¥{set.price}
                          </p>
                          <p className="text-xs text-gray-500">（税込）</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {set.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-500 mt-2">
                        施術期間：{set.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              よくある質問
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "痛みはありますか？",
                  a: "麻酔クリームを使用するため、痛みは最小限に抑えられます。個人差はありますが、多くの方が我慢できる程度の痛みと評価されています。",
                },
                {
                  q: "効果はどのくらい続きますか？",
                  a: "個人差はありますが、通常1年から2年程度効果が持続します。生活習慣や年齢によって持続期間は変わってきます。",
                },
                {
                  q: "施術後の注意点はありますか？",
                  a: "施術直後は軽い腫れや内出血が出る可能性があります。内出血が起こった場合、1週間から2週間ほどで自然に改善します。激しい運動や飲酒、サウナなどは1週間程度お控えいただくことをお勧めします。",
                },
                {
                  q: "どのような方におすすめですか？",
                  a: "小ジワにファンデーションが溜まる、濃いシワで実年齢より老けて見える、予防的にケアしたいなど、シワやたるみでお悩みの方におすすめです。",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Q. {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    A. {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              まずは無料カウンセリングから
            </h2>
            <p className="text-gray-600 mb-8">
              経験豊富な医師が丁寧にご説明いたします。<br />
              お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#81D8D0] hover:bg-[#6BC4BC] text-white rounded-full transition duration-300 shadow-lg group"
              >
                <span>無料カウンセリングを予約する</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
              <a
                href="tel:03-5315-0201"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#81D8D0] text-[#81D8D0] rounded-full hover:bg-[#81D8D0] hover:text-white transition duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>03-5315-0201</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 