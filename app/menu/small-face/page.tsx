'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SmallFaceSetPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* 背景のデザイン要素 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3] opacity-70" />
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-[0.03]" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* 画像セクション */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden mb-12">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/pickup/small-face.jpg"
                  alt="ヒアルロン酸小顔セット"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* タイトルと価格 */}
              <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">ヒアルロン酸小顔セット</h1>
                <p className="text-lg text-[#81D8D0] font-bold">
                  ¥210,000 <span className="text-base font-normal text-gray-600">(税込) / 3本セット</span>
                </p>
              </div>
            </div>

            {/* コンテンツセクション */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">セット内容</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold mb-2">ヒアルロン酸注入 3本</h3>
                  <p className="text-gray-600">
                    高品質なヒアルロン酸を使用し、自然な立体感のある小顔を実現します。3本セットでより理想的な仕上がりに。
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">施術効果</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold mb-2">即効性の小顔効果</h3>
                    <p className="text-gray-600">気になるフェイスラインをその場で改善し、すっきりとした輪郭へ。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold mb-2">顔のたるみ治療</h3>
                    <p className="text-gray-600">たるみが気になる部分にヒアルロン酸を注入し、自然なリフトアップを実現。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold mb-2">強力リフトアップ</h3>
                    <p className="text-gray-600">3本セットで、より確実な効果を実感いただけます。</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">施術の流れ</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#81D8D0] text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold mb-1">カウンセリング</h3>
                      <p className="text-gray-600">ご要望をお伺いし、最適な注入部位と量を決定します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#81D8D0] text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold mb-1">施術準備</h3>
                      <p className="text-gray-600">麻酔クリームを塗布し、痛みを軽減します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#81D8D0] text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold mb-1">ヒアルロン酸注入</h3>
                      <p className="text-gray-600">医師が丁寧に注入を行います。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">注意事項</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>施術時間：1回あたり約30分</li>
                  <li>腫れや内出血が出る可能性があります</li>
                  <li>効果の持続期間は個人差があります（約6ヶ月〜1年程度）</li>
                  <li>3本セットは6ヶ月以内にご使用ください</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="inline-block bg-gradient-to-r from-[#81D8D0] to-[#6BC4BC] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  無料カウンセリングを予約する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 