"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlacentaInjectionPage() {
  return (
    <main className="pt-32 pb-20">
      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">プラセンタ注射</h1>
            <p className="text-xl text-gray-600 mb-8">
              胎盤由来成分を用いた注射療法です。
              美容効果や体調改善が期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* 治療説明セクション */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">治療について</h2>
              <p className="text-gray-600 mb-6">
                プラセンタ注射は、胎盤から抽出した有効成分を注射する治療法です。
                美容効果や体調改善が期待できます。
                治療の適応については、医師による診察が必要です。
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
                    <span className="text-gray-600">体調や目的に合わせて投与量を調整します</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">定期的な治療をおすすめしています</span>
                  </li>
                </ul>
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
                    <h3 className="font-bold mb-2">診察・カウンセリング</h3>
                    <p className="text-gray-600">医師が体調を確認し、治療計画を立てます。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">注射部位の消毒</h3>
                    <p className="text-gray-600">衛生的に処置を行います。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">注射施術</h3>
                    <p className="text-gray-600">痛みを最小限に抑えながら注射を行います。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項・副作用 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">注意事項・副作用</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  治療による主な副作用として、以下のようなものがあります。
                  これらの症状には個人差があり、すべての方に発生するものではありません。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>注射部位の痛み</li>
                  <li>一時的な内出血</li>
                  <li>まれにアレルギー反応</li>
                </ul>
                <p className="text-gray-600">
                  症状の程度・経過には個人差があります。
                  気になる症状が出た場合は、すぐに担当医にご相談ください。
                </p>
              </div>
            </div>

            {/* 料金表 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">料金表</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">1回</span>
                  <span className="font-medium">¥3,300（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">5回セット</span>
                  <span className="font-medium">¥13,200（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">10回セット</span>
                  <span className="font-medium">¥24,750（税込）</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※料金は税込表示です。<br />
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
                医師による診察の上、治療計画をご提案させていただきます。
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