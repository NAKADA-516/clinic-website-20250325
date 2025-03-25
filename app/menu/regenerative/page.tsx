"use client";

import Image from "next/image";
import Link from "next/link";

export default function RegenerativePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">幹細胞エクソソーム治療</h1>
            <p className="text-xl text-gray-600 mb-8">
              最先端の再生医療技術を用いて、<br />
              お肌本来の再生力を高め、若々しさを取り戻します。
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Menu Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 乳歯髄点滴 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">乳歯髄点滴</h2>
                  <p className="text-gray-600 mb-6">
                    乳歯から抽出した幹細胞を点滴投与することで、全身の若返りと美容効果を促進します。
                    成長因子やサイトカインが豊富に含まれており、肌の再生や免疫力の向上に効果的です。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">1回</span>
                      <span className="font-medium">¥100,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">3回コース</span>
                      <span className="font-medium">¥270,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">6回コース</span>
                      <span className="font-medium">¥510,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/treatment1.jpg"
                    alt="乳歯髄点滴"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* maxNFC筋注 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">maxNFC筋注</h2>
                  <p className="text-gray-600 mb-6">
                    ヒト臍帯由来の幹細胞培養上清液を筋肉内に注入することで、
                    より効果的に成長因子を体内に届けます。肌の若返りだけでなく、
                    疲労回復や美白効果も期待できます。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">1回</span>
                      <span className="font-medium">¥165,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">3回コース</span>
                      <span className="font-medium">¥445,500（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/treatment2.jpg"
                    alt="maxNFC筋注"
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
                    <h3 className="text-xl font-bold mb-4">ヒト幹細胞培養上清液</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥38,500（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">3回コース</span>
                        <span className="font-medium">¥104,500（税込）</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">プラセンタ</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥3,300（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">5回コース</span>
                        <span className="font-medium">¥13,200（税込）</span>
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