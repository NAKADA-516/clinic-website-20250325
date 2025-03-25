"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GarlicPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-[#F8FCFC]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#81D8D0]/20 to-[#65B5AA]/10 rounded-2xl -z-10"></div>
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Title Section */}
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl tracking-wider text-[#81D8D0] mb-8">
                にんにく注射
              </h1>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#81D8D0]/5 to-transparent"></div>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-medium tracking-wide">
                  天然の<span className="text-[#81D8D0]">エネルギー補給</span>で<br className="hidden md:inline" />疲労回復・免疫力アップ
                </p>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-white mx-auto">
                <Image
                  src="/images/garlic-injection-hero.jpg"
                  alt="にんにく注射イメージ"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#81D8D0]/30 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#65B5AA]/30 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              にんにく注射とは
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  にんにく注射の主成分は「ビタミンB１」です。このビタミンB１を構成する成分に含まれる「硫化アリル」がにんにく臭のもととなり、「にんにく注射」と呼ばれています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                  にんにく注射１本に、にんにく約５０個分の「ビタミンB１」が含まれています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  疲労回復、倦怠感回復にとても有効で、即効性があります。
                </p>
                <div className="bg-[#F8FCFC] p-5 rounded-lg border-l-4 border-[#81D8D0] mt-6">
                  <p className="text-gray-700 mb-2">
                    にんにく注射のビタミン類は、水溶性ですので、余分に摂取しても体内に留まることなく排出されるため、副作用はほぼありません。
                  </p>
                  <p className="text-gray-700">
                    反面、体外に排泄されやすいので、定期的に十分に補充していく必要があります。
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="relative w-full h-[240px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/garlic-benefits.jpg"
                        alt="にんにくの効能イメージ"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 text-center">天然由来のエネルギーチャージ</p>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-[#81D8D0]">主な効果</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>疲労回復・体力増強</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>免疫力アップ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>集中力・記憶力向上</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>肩こり・頭痛の緩和</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>新陳代謝の促進</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#81D8D0] mt-1">✓</span>
                        <span>肌質改善</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vitamin B1 Deficiency Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              ビタミンB１が不足すると
            </h2>
            
            <div className="bg-[#F8FCFC] p-8 rounded-xl shadow-md mb-12">
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: "⚠️",
                    text: "炭水化物を摂っても分解されず、エネルギーに変わらないため、元気がなくなります"
                  },
                  {
                    icon: "⚠️",
                    text: "疲労物質である「乳酸」の除去が進まず、疲労が蓄積されるようになり、だるさが続きます"
                  },
                  {
                    icon: "⚠️",
                    text: "脳のエネルギーが不足し、集中力の低下、記憶力の低下、運動能力の低下など脳や末梢神経の働きが悪くなります"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#81D8D0] rounded-full flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recommended For Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              こんな方におすすめします
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "夏バテにより体力減退気味の方",
                "冷え症や虚弱体質で、よく風邪をひく方やなかなか体調が元に戻らない方",
                "倦怠感がなかなか抜けない方",
                "疲れがたまっていても、大事な仕事があり休めない方",
                "よく寝ているのに全然疲れがとれない方",
                "緊張型頭痛や肩こり、腰痛、神経痛のある方",
                "二日酔いの方、肝臓が弱っている方",
                "肌荒れが気になる方"
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center text-white mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Flow Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              にんにく注射を受けるまでの流れ
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-8">
                {[
                  {
                    step: "STEP 1",
                    title: "来院",
                    desc: "診療時間内にお越しください。予約も可能ですので、受付までご連絡ください。"
                  },
                  {
                    step: "STEP 2",
                    title: "待機",
                    desc: "診察順にお呼びしますので、お待ちください。"
                  },
                  {
                    step: "STEP 3",
                    title: "施術",
                    desc: "静脈注射で２～３分で終了です。"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#81D8D0]/10 flex items-center justify-center">
                        <span className="text-[#81D8D0] font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Treatment Intervals Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              にんにく注射の間隔
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <p className="text-gray-700 leading-relaxed mb-6">
                にんにく注射を受ける間隔は、特に決まりはありません。必要に応じて、不定期の接種で大丈夫です。
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#81D8D0] mb-4">目安としては</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F8FCFC] p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#81D8D0]/20 flex items-center justify-center">
                        <span className="text-[#81D8D0] font-bold">A</span>
                      </div>
                      <p className="font-medium text-gray-800">週に２～３回の接種</p>
                    </div>
                    <p className="text-gray-700 text-sm pl-12">スポーツをしている方、仕事がハードな方、ストレスの多い方</p>
                  </div>
                  
                  <div className="bg-[#F8FCFC] p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#81D8D0]/20 flex items-center justify-center">
                        <span className="text-[#81D8D0] font-bold">B</span>
                      </div>
                      <p className="font-medium text-gray-800">１～２週間に１回</p>
                    </div>
                    <p className="text-gray-700 text-sm pl-12">定期的に接種される方の平均的な頻度</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Side Effects Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              にんにく注射の副作用
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <p className="text-gray-700 leading-relaxed mb-4">
                にんにく注射のビタミンB類は水溶性ですので摂取し過ぎたり、体内に蓄積することがありません。逆にいうとすぐに体外に排泄されやすいので定期的に十分補充しておく必要があります。
              </p>
              
              <div className="bg-[#FFF5F5] p-5 rounded-lg border-l-4 border-red-300 my-6">
                <p className="text-gray-700 mb-3 font-medium">起こりうる副作用</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                  <li>アレルギー反応</li>
                  <li>下痢</li>
                  <li>頭痛</li>
                  <li>湿疹、蕁麻疹</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  ※ この場合、にんにく注射を今後受けないようにすれば大丈夫です。
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                また、にんにく注射は注射針を皮膚に刺しますので、注射部位が一時的に赤くなったり、硬くなったりすることがあります。
              </p>
            </div>
          </section>

          {/* Price Table */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              料金表
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#81D8D0] text-white p-4">
                <h3 className="font-bold text-lg">にんにく注射 料金</h3>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="py-3 px-4 text-left text-gray-700">メニュー</th>
                        <th className="py-3 px-4 text-right text-gray-700">料金（税込）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 font-medium text-gray-700">にんにく注射　静注</td>
                        <td className="py-4 px-4 text-right text-gray-700">¥2,200</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium text-gray-700">にんにく注射プラスC</td>
                        <td className="py-4 px-4 text-right text-gray-700">¥3,300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#81D8D0]/10 to-white p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#81D8D0]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#81D8D0]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                ご予約・ご相談について
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl">
                にんにく注射に関するご質問やお悩みは、お気軽にご相談ください。あなたの体調や目的に合わせて、最適な治療プランをご提案いたします。
              </p>

              <div className="text-center">
                <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="inline-block bg-[#81D8D0] text-white px-10 py-4 rounded-lg hover:bg-[#65B5AA] transition-colors shadow-md hover:shadow-lg text-lg font-medium"
                >
                  カウンセリング予約
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 