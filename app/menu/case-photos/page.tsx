"use client";

import Image from "next/image";
import Link from "next/link";

export default function CasePhotosPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-medium mb-4 text-[#40A99B]">
            症例写真
          </h1>
          <p className="text-gray-600">
            ※写真は患者様の同意を得て掲載しております。個人差があり、効果を保証するものではありません。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* ボトックス注入 */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">ボトックス注入</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">眉間のしわ</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/forehead-before.jpg"
                      alt="眉間のしわ - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/forehead-after.jpg"
                      alt="眉間のしわ - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術後2週間。眉間のしわが改善し、自然な表情を保ちながらすっきりとした印象に。
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">エラボトックス</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/jaw-before.jpg"
                      alt="エラボトックス - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/jaw-after.jpg"
                      alt="エラボトックス - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術後1ヶ月。エラの張りが改善し、小顔効果が得られています。
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">目尻のしわ</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/eye-before.jpg"
                      alt="目尻のしわ - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/eye-after.jpg"
                      alt="目尻のしわ - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術後2週間。笑顔の際の目尻のしわが改善し、自然な表情を維持しています。
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">額のしわ</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/forehead2-before.jpg"
                      alt="額のしわ - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/botox/forehead2-after.jpg"
                      alt="額のしわ - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術後2週間。額の横じわが改善し、表情を作っても目立たなくなっています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ヒアルロン酸注入 */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">ヒアルロン酸注入</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">ほうれい線</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/hyaluronic/nasolabial-before.jpg"
                      alt="ほうれい線 - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/hyaluronic/nasolabial-after.jpg"
                      alt="ほうれい線 - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術直後。ほうれい線が自然に改善され、若々しい印象に。
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-[#40A99B]">涙袋形成</h3>
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/hyaluronic/tear-before.jpg"
                      alt="涙袋形成 - 施術前"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/case-photos/hyaluronic/tear-after.jpg"
                      alt="涙袋形成 - 施術後"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    施術直後。自然な涙袋ができ、目元が優しい印象に。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className="inline-block bg-[#40A99B] text-white px-8 py-4 rounded-md hover:bg-[#65B5AA] transition-colors"
            >
              無料カウンセリングを予約する
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 