"use client";

import Image from "next/image";
import Link from "next/link";

export default function VitaminCPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl tracking-[.5em] text-[#40A99B] mb-2">
            TREATMENT
          </h1>
          <p className="font-serif text-base text-[#65B5AA]">
            高濃度ビタミンC点滴
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              施術について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              高濃度ビタミンC点滴は、医師による診察のもと、お一人おひとりの状態に合わせて実施いたします。点滴による投与のため、必要な成分を直接体内に届けることができます。
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              治療の流れ
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>1. カウンセリング（医師による診察）</p>
              <p>2. 体調の確認</p>
              <p>3. 点滴施術（30〜40分程度）</p>
              <p>4. 経過観察</p>
              <p>5. 注意事項のご説明</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              施術後の過ごし方
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>施術当日は十分な休息を取ることをお勧めします</li>
              <li>水分を多めに摂取してください</li>
              <li>激しい運動は控えめにしてください</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              注意事項
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>施術の効果には個人差があります</li>
              <li>治療に関する詳しい説明は、カウンセリング時に医師が行います</li>
              <li>以下の方は施術をお受けいただけない場合があります：
                <ul className="ml-6 mt-2 space-y-1">
                  <li>- 妊娠中・授乳中の方</li>
                  <li>- 重度の腎臓病・肝臓病の方</li>
                  <li>- 重度の貧血の方</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              施術を受ける前に
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>食事は施術の2時間前までにお済ませください</li>
              <li>服用中のお薬がある場合は、必ずお申し出ください</li>
              <li>体調が優れない場合は、事前にご連絡ください</li>
            </ul>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              ご予約・ご相談について
            </h2>
            <p className="text-gray-700 mb-4">
              点滴治療に関するご不安な点やご質問は、カウンセリングの際に担当医師にご相談ください。体調や生活習慣を考慮した上で、適切な治療計画をご提案させていただきます。
            </p>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#40A99B] text-white px-8 py-3 rounded-md hover:bg-[#65B5AA] transition-colors"
            >
              カウンセリング予約
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 