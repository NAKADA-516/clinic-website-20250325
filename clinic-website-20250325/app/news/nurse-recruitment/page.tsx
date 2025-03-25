'use client';

import Link from 'next/link';

export default function NurseRecruitmentPage() {
  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <time className="text-gray-500">2024.03.12</time>
                <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
                  採用情報
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-8">看護師・准看護師募集のお知らせ</h1>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">募集要項</h2>
                
                <h3 className="text-lg font-bold mt-6 mb-3">職種</h3>
                <p className="mb-4">看護師・准看護師</p>

                <h3 className="text-lg font-bold mt-6 mb-3">仕事内容</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>美容医療における看護業務全般</li>
                  <li>医師の診療補助</li>
                  <li>カウンセリング対応</li>
                  <li>患者様のケア</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3">雇用形態</h3>
                <p className="mb-4">正社員（試用期間3ヶ月）</p>

                <h3 className="text-lg font-bold mt-6 mb-3">給与</h3>
                <p className="mb-4">
                  月給32万円〜45万円（経験・能力による）<br />
                  ※試用期間中も待遇に変更はありません
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3">勤務時間</h3>
                <p className="mb-4">
                  10:00〜19:00（実働8時間）<br />
                  ※休憩時間60分
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3">休日・休暇</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>週休2日制（日曜・祝日定休）</li>
                  <li>年次有給休暇</li>
                  <li>夏季休暇</li>
                  <li>年末年始休暇</li>
                  <li>慶弔休暇</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3">福利厚生</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>社会保険完備</li>
                  <li>交通費支給（上限月額35,000円）</li>
                  <li>制服貸与</li>
                  <li>社員割引制度</li>
                  <li>研修制度あり</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3">応募資格</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>看護師免許または准看護師免許をお持ちの方</li>
                  <li>美容医療に興味のある方</li>
                  <li>経験不問</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3">勤務地</h3>
                <p className="mb-4">
                  代々木駅前美容クリニック<br />
                  東京都渋谷区代々木1-30-1 代々木駅前ビル2F<br />
                  JR山手線「代々木駅」より徒歩1分
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">応募方法</h2>
                <p className="mb-8">
                  お電話またはメールにてご連絡ください。<br />
                  面接日時等を調整させていただきます。
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold mb-4">お問い合わせ先</h3>
                  <p>
                    代々木駅前美容クリニック 採用担当<br />
                    TEL: 03-5315-0201<br />
                    受付時間: 10:00〜19:00（日曜・祝日を除く）
                  </p>
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/recruit"
                    className="inline-block bg-gradient-to-r from-[#81D8D0] to-[#6BC4BC] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    採用情報ページへ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 