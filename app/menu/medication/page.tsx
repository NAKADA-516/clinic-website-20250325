"use client";

import Image from "next/image";
import Link from "next/link";

export default function MedicationPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">内服薬処方</h1>
            <p className="text-xl text-gray-600 mb-8">
              医師による診察のもと、お一人おひとりの症状や
              目的に合わせた内服薬を処方いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 治療説明セクション */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">処方について</h2>
              <p className="text-gray-600 mb-6">
                内服薬の処方は、医師による適切な診察と
                症状の確認を行った上で行います。
                お薬の種類や用量は、患者様の状態に応じて
                個別に決定いたします。
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold mb-4">処方の特徴</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">医師による診察・カウンセリングを行います</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">症状や目的に合わせて薬剤を選択します</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                    <span className="text-gray-600">定期的な経過観察を行います</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 診察の流れ */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">診察の流れ</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">診察・カウンセリング</h3>
                    <p className="text-gray-600">症状や治療目的について詳しくお伺いします。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">処方内容の説明</h3>
                    <p className="text-gray-600">お薬の効果や服用方法について説明します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">処方箋発行</h3>
                    <p className="text-gray-600">処方箋を発行し、服用上の注意点をお伝えします。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">注意事項</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  内服薬の処方に関する注意事項は以下の通りです。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>必ず医師の指示通りに服用してください</li>
                  <li>他院での処方薬がある場合は必ずお申し出ください</li>
                  <li>副作用が気になる場合は速やかにご相談ください</li>
                  <li>処方内容の変更は必ず医師に相談してください</li>
                </ul>
                <p className="text-gray-600">
                  気になる症状や不安な点がございましたら、
                  遠慮なく担当医にご相談ください。
                </p>
              </div>
            </div>

            {/* 料金表 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">料金について</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  処方される薬剤の種類や量により料金が異なります。
                  詳細は診察時に医師よりご説明いたします。
                </p>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">診察料</span>
                  <span className="font-medium">¥3,300（税込）〜</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">処方箋料</span>
                  <span className="font-medium">¥770（税込）</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※薬剤料は処方内容により異なります。<br />
                  ※保険適用外の自費診療となります。<br />
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