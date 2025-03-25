import Image from 'next/image'
import Link from 'next/link'

export default function PickupPage() {
  return (
    <main className="pt-32">
      {/* ヘッダー部分 */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-center">
          <span className="font-en text-4xl tracking-wider block">PICK UP</span>
          <span className="text-base tracking-[.2em] block mt-2">特集</span>
          <span className="block w-14 h-[1px] bg-black mx-auto mt-4"></span>
        </h1>
      </div>

      {/* 特集メニュー一覧 */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 初めての美肌セット */}
          <article className="group">
            <Link href="/menu/beginner-skincare" className="block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/pickup/beginner-skincare.jpg"
                  alt="初めての美肌セット"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="px-2">
                <h2 className="text-xl font-bold mb-2">初めての美肌セット</h2>
                <p className="text-sm text-gray-600 mb-3">
                  美肌治療を始める方におすすめの特別セットメニュー。ハイドラフェイシャルとビタミンC点滴で透明感のある素肌へ。
                </p>
                <p className="font-en text-lg">¥22,000 (税込)</p>
              </div>
            </Link>
          </article>

          {/* タイトニングセット */}
          <article className="group">
            <Link href="/menu/tightening" className="block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/pickup/tightening.jpg"
                  alt="タイトニングセット"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="px-2">
                <h2 className="text-xl font-bold mb-2">タイトニングセット</h2>
                <p className="text-sm text-gray-600 mb-3">
                  ハリ・弾力にアプローチする人気の組み合わせ。ポテンツァとリジュランで理想的な引き締め効果を実現。
                </p>
                <p className="font-en text-lg">¥33,000 (税込)</p>
              </div>
            </Link>
          </article>

          {/* ヒアルロン酸小顔セット */}
          <article className="group">
            <Link href="/menu/small-face" className="block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/pickup/small-face.jpg"
                  alt="ヒアルロン酸小顔セット"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="px-2">
                <h2 className="text-xl font-bold mb-2">ヒアルロン酸小顔セット</h2>
                <p className="text-sm text-gray-600 mb-3">
                  小顔効果と自然な立体感を叶える特別セット。ヒアルロン酸注入とボツリヌストキシン注射の組み合わせで理想的なフェイスラインへ。
                </p>
                <p className="font-en text-lg">¥55,000 (税込)</p>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
} 