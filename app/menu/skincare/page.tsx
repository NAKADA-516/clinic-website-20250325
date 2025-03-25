"use client";

import Image from "next/image";
import Link from "next/link";

export default function SkincarePage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">スキンケア取扱商品</h1>
            <p className="text-xl text-gray-600 mb-8">
              医師が厳選した高品質なスキンケア製品を
              お客様のお肌の状態に合わせてご提案いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 商品カテゴリーセクション */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">取扱商品カテゴリー</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">クレンジング・洗顔料</h3>
                  <p className="text-gray-600 mb-4">
                    肌に優しく、毛穴の汚れまでしっかり落とす製品を取り揃えています。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">化粧水・美容液</h3>
                  <p className="text-gray-600 mb-4">
                    高濃度の美容成分を配合した、効果的なスキンケアアイテムをご用意しています。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">クリーム・乳液</h3>
                  <p className="text-gray-600 mb-4">
                    お肌をしっかり保湿し、バリア機能を高める製品を取り扱っています。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">日焼け止め</h3>
                  <p className="text-gray-600 mb-4">
                    紫外線からお肌を守る、高機能な日焼け止め製品を取り揃えています。
                  </p>
                </div>
              </div>
            </div>

            {/* 商品選びのポイント */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">商品選びのポイント</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  お客様に最適な商品をお選びいただくために、
                  以下のポイントを考慮してご提案いたします。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>現在のお肌の状態</li>
                  <li>お悩みやご要望</li>
                  <li>お手入れにかけられる時間</li>
                  <li>アレルギーの有無</li>
                  <li>価格帯のご希望</li>
                </ul>
              </div>
            </div>

            {/* カウンセリングについて */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">スキンケアカウンセリング</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  経験豊富なスタッフが、お客様のお肌の状態を
                  丁寧に確認し、最適な商品をご提案いたします。
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">カウンセリングの流れ</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                      <span className="text-gray-600">お肌の状態チェック</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                      <span className="text-gray-600">現在のスキンケア方法の確認</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                      <span className="text-gray-600">お悩みやご要望のヒアリング</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#81D8D0] mt-2" />
                      <span className="text-gray-600">最適な商品のご提案</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 価格帯 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">価格帯の目安</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">クレンジング・洗顔料</span>
                  <span className="font-medium">¥3,300〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">化粧水・美容液</span>
                  <span className="font-medium">¥5,500〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">クリーム・乳液</span>
                  <span className="font-medium">¥6,600〜（税込）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">日焼け止め</span>
                  <span className="font-medium">¥3,850〜（税込）</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※価格は商品により異なります。<br />
                  ※詳細は店頭でご確認ください。
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                まずは無料カウンセリングにお越しください
              </h2>
              <p className="text-gray-600 mb-8">
                経験豊富なスタッフが、あなたに最適なスキンケア製品をご提案いたします。
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