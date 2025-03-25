"use client";

import Image from "next/image";
import Link from "next/link";

export default function NutritionPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">栄養療法</h1>
            <p className="text-xl text-gray-600 mb-8">
              お一人おひとりの状態に合わせた栄養療法で、
              美容と健康をサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* 治療説明セクション */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">栄養療法について</h2>
              <p className="text-gray-600 mb-6">
                栄養療法は、必要な栄養素を適切に補給することで、
                美容効果の向上や健康維持をサポートする治療法です。
                医師による診察のもと、最適な栄養補給プランをご提案いたします。
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold mb-4">治療の特徴</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">医師による診察・カウンセリングを行います</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">状態や目的に合わせて栄養素を選択します</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">定期的な経過観察を行います</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 提供メニュー */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">提供メニュー</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">点滴療法</h3>
                  <p className="text-gray-600">
                    ビタミン類やミネラルを直接体内に届ける点滴治療です。
                    即効性が高く、効率的な栄養補給が可能です。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">サプリメント処方</h3>
                  <p className="text-gray-600">
                    医師が厳選した高品質なサプリメントを、
                    状態に合わせて組み合わせてご提案します。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">食事指導</h3>
                  <p className="text-gray-600">
                    日々の食事内容を見直し、必要な栄養素を
                    効率的に摂取できるようアドバイスいたします。
                  </p>
                </div>
              </div>
            </div>

            {/* 治療の流れ */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">治療の流れ</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">初回カウンセリング</h3>
                    <p className="text-gray-600">現在の状態や目標についてお伺いします。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">診察・検査</h3>
                    <p className="text-gray-600">必要に応じて各種検査を行います。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">治療プランの提案</h3>
                    <p className="text-gray-600">最適な栄養療法プランをご提案します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">治療開始</h3>
                    <p className="text-gray-600">定期的な経過観察を行いながら治療を進めます。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 料金表 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">料金表</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">初回カウンセリング</span>
                  <span className="font-medium">無料</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">点滴療法（1回）</span>
                  <span className="font-medium">¥11,000〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">サプリメント処方</span>
                  <span className="font-medium">¥5,500〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">食事指導（1回）</span>
                  <span className="font-medium">¥5,500（税込）</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※料金は治療内容により異なります。<br />
                  ※状態により適応できない場合があります。<br />
                  ※詳細は医師にご相談ください。
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                まずは無料カウンセリングにお越しください
              </h2>
              <p className="text-gray-600 mb-8">
                医師による診察の上、最適な治療プランをご提案させていただきます。
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