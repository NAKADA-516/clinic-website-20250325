'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NurseRecruitmentPage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        {/* 背景のデザイン要素 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3] opacity-70" />
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-[0.03]" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* 記事ヘッダー */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <time className="text-gray-500">2024.03.11</time>
                <span className="px-3 py-1 bg-[#81D8D0]/10 text-[#81D8D0] rounded-full">
                  採用情報
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-6">看護師・准看護師 募集</h1>
            </div>

            {/* 記事本文 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="space-y-8">
                {/* 募集職種 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">募集職種</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>看護師</li>
                    <li>准看護師</li>
                  </ul>
                </section>

                {/* 仕事内容 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">仕事内容</h2>
                  <p className="text-gray-600 mb-4">美容クリニックでの看護師業務をお任せします。</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>医師の指示のもとでの施術補助</li>
                    <li>採血や点滴の対応</li>
                    <li>受付業務</li>
                    <li>物品管理・発注</li>
                    <li>SNS投稿や広告作成などの広報業務</li>
                    <li>その他雑務</li>
                  </ul>
                </section>

                {/* 雇用形態 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">雇用形態</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>雇用期間の定めなし</li>
                    <li>パート、アルバイト</li>
                  </ul>
                </section>

                {/* 給与 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">給与</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>時給：1,900円〜</li>
                    <li>交通費支給（上限30,000円/月）</li>
                    <li>試用期間3ヶ月（試用期間中は時給1,500円）</li>
                  </ul>
                </section>

                {/* 待遇・勤務時間・休日 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">待遇・勤務時間・休日</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">待遇</h3>
                      <p className="text-gray-600">社会保険完備、労働保険完備</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">勤務時間</h3>
                      <p className="text-gray-600">シフト制（1日あたり実働7.5時間）、週2〜3日からOK</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">休日</h3>
                      <p className="text-gray-600">クリニックの休診日に準ずる、パート・アルバイトは応相談</p>
                    </div>
                  </div>
                </section>

                {/* 応募要件・教育体制 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">応募要件・教育体制</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">応募要件</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>正看護師免許</li>
                        <li>専門学校卒以上</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">教育体制</h3>
                      <p className="text-gray-600">丁寧なOJTを通じてサポートしますので、未経験の方でも安心してスタートできます。</p>
                    </div>
                  </div>
                </section>

                {/* 採用までの流れ */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">採用までの流れ</h2>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>書類選考</li>
                    <li>面接日程のご連絡（採用担当より）</li>
                    <li>1次面接</li>
                    <li>2次面接</li>
                    <li>採用決定のご連絡</li>
                  </ol>
                </section>

                {/* 応募方法 */}
                <section>
                  <h2 className="text-xl font-bold mb-4 text-[#81D8D0]">応募方法</h2>
                  <p className="text-gray-600 mb-4">
                    応募ご希望の方は、下記のリンクよりエントリーフォームに進み、必要事項をご入力の上、ご応募ください。
                  </p>
                  <p className="text-gray-600 mb-8">
                    たくさんのご応募お待ちしております。
                  </p>
                  <div className="text-center">
                    <Link
                      href="/recruit/entry"
                      className="inline-block bg-gradient-to-r from-[#81D8D0] to-[#6BC4BC] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      エントリーフォームへ
                    </Link>
                  </div>
                </section>

                {/* 締めの文章 */}
                <p className="text-gray-600 mt-8">
                  興味を持っていただけましたら、ぜひお気軽にご応募ください。あなたのスキルを活かして、私たちと一緒に働きませんか？
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 