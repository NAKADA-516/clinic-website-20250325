"use client";

import Link from "next/link";

export default function PricePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#81D8D0] to-[#6BC4BC] inline-block text-transparent bg-clip-text">
              Price List
            </h1>
          </div>

          {/* 美容注入 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">美容注入</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/hyaluronic-acid" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ヒアルロン酸注入</span>
                </Link>
                <span className="font-medium text-gray-900">¥44,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/botox" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ボツリヌストキシン注射</span>
                </Link>
                <span className="font-medium text-gray-900">¥22,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/juveluck" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ジュベルック</span>
                </Link>
                <span className="font-medium text-gray-900">¥55,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/rejuran" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>リジュラン</span>
                </Link>
                <span className="font-medium text-gray-900">¥44,000〜</span>
              </div>
            </div>
          </section>

          {/* 美肌治療 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">美肌治療</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/laser-facial" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>レーザーフェイシャル</span>
                </Link>
                <span className="font-medium text-gray-900">¥22,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/hydrafacial" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ハイドラフェイシャル</span>
                </Link>
                <span className="font-medium text-gray-900">¥16,500〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/dermapen" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ダーマペン4</span>
                </Link>
                <span className="font-medium text-gray-900">¥27,500〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/potenza" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>ポテンツァ</span>
                </Link>
                <span className="font-medium text-gray-900">¥38,500〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/electroporation" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>エレクトロポレーション</span>
                </Link>
                <span className="font-medium text-gray-900">¥11,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/massage-peel" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>マッサージピール</span>
                </Link>
                <span className="font-medium text-gray-900">¥11,000〜</span>
              </div>
            </div>
          </section>

          {/* 医療脱毛 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">医療脱毛</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/hair-removal" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>医療脱毛</span>
                </Link>
                <span className="font-medium text-gray-900">¥5,500〜</span>
              </div>
            </div>
          </section>

          {/* 点滴・注射 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">点滴・注射</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/vitamin-c" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>高濃度ビタミンC点滴</span>
                </Link>
                <span className="font-medium text-gray-900">¥11,000〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/white-drip" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>白玉点滴</span>
                </Link>
                <span className="font-medium text-gray-900">¥5,500〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/placenta-injection" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>プラセンタ注射</span>
                </Link>
                <span className="font-medium text-gray-900">¥3,300〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/garlic-injection" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>にんにく注射</span>
                </Link>
                <span className="font-medium text-gray-900">¥2,200〜</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/nutrition" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>栄養カウンセリング</span>
                </Link>
                <span className="font-medium text-gray-900">¥5,500〜</span>
              </div>
            </div>
          </section>

          {/* 栄養療法 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">栄養療法</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/nutrition" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>栄養療法</span>
                </Link>
                <span className="font-medium text-gray-900">¥5,500〜</span>
              </div>
            </div>
          </section>

          {/* 商品・サービス */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-12 transition-all hover:shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-gradient-to-b from-[#81D8D0] to-[#6BC4BC] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">商品・サービス</h2>
            </div>
            <div className="space-y-4">
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/medication" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>内服薬</span>
                </Link>
                <span className="font-medium text-gray-900">要相談</span>
              </div>
              <div className="group flex justify-between items-center py-4 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <Link href="/menu/skincare" className="text-gray-600 group-hover:text-[#81D8D0] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81D8D0] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>スキンケア取扱商品</span>
                </Link>
                <span className="font-medium text-gray-900">¥3,300〜</span>
              </div>
            </div>
          </section>

          {/* 注意事項 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
            <div className="max-w-2xl mx-auto text-center space-y-3 text-sm text-gray-500">
              <p>※ 表示価格はすべて税込です。</p>
              <p>※ 詳細な料金は、カウンセリング時に医師がご説明いたします。</p>
              <p>※ 症状や治療内容により料金が変動する場合があります。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 