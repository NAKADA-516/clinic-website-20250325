import Image from 'next/image'
import Link from 'next/link'

export default function BeginnerSkincareSetPage() {
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
                  src="/images/pickup/beginner-skincare.jpg"
                  alt="初めての美肌セット"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* タイトルと価格 */}
              <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">初めての美肌セット</h1>
                <p className="text-lg text-[#81D8D0] font-bold">
                  ¥20,000 <span className="text-base font-normal text-gray-600">(税込) / 1回</span>
                </p>
              </div>
            </div>

            {/* コンテンツセクション */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">セット内容</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold mb-2">ハイドラフェイシャル</h3>
                    <p className="text-gray-600">毛穴の汚れを吸引しながら美容成分を浸透させ、クリアな素肌へ導きます。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold mb-2">エレクトロポレーション</h3>
                    <p className="text-gray-600">微弱な電流で美容成分の浸透を促進し、肌本来の美しさを引き出します。</p>
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
                      <p className="text-gray-600">お肌の状態や気になる点をお伺いし、最適な施術プランをご提案いたします。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#81D8D0] text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold mb-1">ハイドラフェイシャル</h3>
                      <p className="text-gray-600">特殊な機器で毛穴クレンジングと美容成分の浸透を同時に行います。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#81D8D0] text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold mb-1">エレクトロポレーション</h3>
                      <p className="text-gray-600">美容成分をさらに肌深部まで届けます。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">注意事項</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>施術時間：約60分</li>
                  <li>当日メイクをしたままお越しいただけます</li>
                  <li>施術後、メイクも可能です</li>
                  <li>お肌の状態により、施術をお断りする場合がございます</li>
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