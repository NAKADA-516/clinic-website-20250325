"use client";

import Image from "next/image";
import Link from "next/link";

export default function InjectionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">美容注入</h1>
            <p className="text-xl text-gray-600 mb-8">
              自然な若返りと美しさを追求する<br />
              最新の注入治療をご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Menu Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* ヒアルロン酸注入 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ヒアルロン酸注入</h2>
                  <p className="text-gray-600 mb-6">
                    お顔の気になる部分にヒアルロン酸を注入し、自然な若返りを実現します。
                    しわやたるみを改善し、ふっくらとした若々しい印象に。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">1本</span>
                      <span className="font-medium">¥55,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">2本</span>
                      <span className="font-medium">¥99,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">3本</span>
                      <span className="font-medium">¥143,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/injection1.jpg"
                    alt="ヒアルロン酸注入"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ボトックス注射 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ボトックス注射</h2>
                  <p className="text-gray-600 mb-6">
                    表情じわやエイジングサインを改善し、自然な表情を保ちながら
                    若々しい印象へ。効果は3〜4ヶ月持続します。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">目尻（1回）</span>
                      <span className="font-medium">¥38,500（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">眉間（1回）</span>
                      <span className="font-medium">¥38,500（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">額（1回）</span>
                      <span className="font-medium">¥44,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/injection2.jpg"
                    alt="ボトックス注射"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* その他のメニュー */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">その他のメニュー</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">SUNEKOS（スネコス）</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥44,000（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">4回コース</span>
                        <span className="font-medium">¥154,000（税込）</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">水光注射</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥22,000（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">3回コース</span>
                        <span className="font-medium">¥55,000（税込）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7FA] via-white to-[#F0F7FA]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">無料カウンセリングで詳しくご説明いたします</h2>
            <p className="text-gray-600 mb-8">
              お客様お一人おひとりの肌状態や目的に合わせて、<br />
              最適な治療プランをご提案いたします。
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                className="inline-block bg-[#81D8D0] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6BC4BC] transition-colors"
              >
                無料カウンセリングを予約する
              </Link>
              <a
                href="tel:03-5315-0201"
                className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                03-5315-0201
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 