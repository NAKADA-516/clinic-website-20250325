"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PlacentaPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-[#F8FCFC]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#81D8D0]/20 to-[#65B5AA]/10 rounded-2xl -z-10 bg-dots-pattern"></div>
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Title Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h1 className="font-serif text-4xl md:text-5xl tracking-wider text-[#81D8D0] mb-8">
                プラセンタ注射
          </h1>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#81D8D0]/5 to-transparent"></div>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-medium tracking-wide leading-relaxed">
                  身体の<span className="text-[#81D8D0] font-bold">自然治癒力</span>を高め<br className="hidden md:inline" />
                  様々な症状の改善をサポート
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#81D8D0]/30 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#65B5AA]/30 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ注射とは
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  赤ちゃんとお母さんとをつなぐ胎盤を「プラセンタ」といいます。
                  プラセンタ注射とは、ヒトの胎盤から抽出されるもので、医療機関でのみ受けられる注射です。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  プラセンタ注射は、一度の治療で身体の不調を治すのではなく、適切な頻度で投与することにより、
                  人間が本来持っている自然治癒力を徐々に高めていきます。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  血行促進・自律神経の調整・免疫力向上・美肌効果・アトピーやニキビの改善・更年期障害などに多くの効果が期待される注射です。
                  プラセンタ注射は女性が利用するイメージが強いですが、男性の育毛や男性更年期障害にも効果があります。
                </p>
                <div className="bg-[#F8FCFC] p-6 rounded-lg border-l-4 border-[#81D8D0] mt-6">
                  <p className="text-gray-700 mb-2 text-lg">
                    数多くの効果が期待されるプラセンタ注射ですが、注射をすると献血ができないというデメリットがあります。
                  </p>
                  <p className="text-gray-700 text-lg">
                    プラセンタ注射を受けて頂くには、リスクもあることを理解した上で、同意書にサインが必要です。
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full">
                    <h3 className="text-xl font-bold mb-6 text-[#81D8D0] border-b border-[#81D8D0]/30 pb-2">主な効果</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "血行促進",
                        "自律神経の調整",
                        "免疫力向上",
                        "美肌効果",
                        "アトピーやニキビの改善",
                        "更年期障害の緩和"
                      ].map((effect, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 bg-[#F8FCFC] p-3 rounded-lg"
                        >
                          <span className="text-[#81D8D0] mt-1">✓</span>
                          <span className="text-gray-700">{effect}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Effects Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ療法の効果
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "内科系",
                  items: ["肝機能の改善：肝炎・肝硬変、慢性胃炎", "胃潰瘍、胃弱、十二指腸潰瘍、潰瘍性大腸炎", "糖尿病、高血圧、低血圧、気管支喘息、慢性気管支炎", "貧血、慢性疲労、習慣性便秘"],
                  icon: "🏥"
                },
                {
                  title: "婦人科",
                  items: ["更年期障害：動悸・息切れ・不眠", "月経困難症の改善、便秘、冷え性、生理痛", "不妊治療、乳汁分泌不全、高プロラクチン血症"],
                  icon: "👩"
                },
                {
                  title: "皮膚科",
                  items: ["アトピー性皮膚炎、発毛促進、じんましん", "湿疹、ケロイド、シミ、そばかす、しわ", "たるみ、ニキビ、美容・美白・若返り"],
                  icon: "✨"
                },
                {
                  title: "耳鼻科",
                  items: ["アレルギー性鼻炎、メニエール病、花粉症"],
                  icon: "👂"
                },
                {
                  title: "整形外科",
                  items: ["慢性関節リウマチ、変形性関節症、関節炎", "神経痛、腰痛、五十肩、肩こり等"],
                  icon: "🦴"
                },
                {
                  title: "泌尿器科",
                  items: ["前立腺肥大、膀胱炎"],
                  icon: "🔬"
                },
                {
                  title: "眼科",
                  items: ["角膜炎、アレルギー性結膜炎、視力低下、白内障"],
                  icon: "👁️"
                },
                {
                  title: "歯科",
                  items: ["歯槽膿濾、歯周病、顎関節症"],
                  icon: "🦷"
                },
                {
                  title: "精神神経科",
                  items: ["うつ病、神経症、自律神経失調症、不眠症"],
                  icon: "🧠"
                },
                {
                  title: "その他",
                  items: ["精力増進・滋養強壮、疲労検体改善", "男性・女性ホルモンバランスの調節、虚弱体質", "病中・病後の体力回復、強壮、風邪予防"],
                  icon: "✨"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-[#81D8D0]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="border-t border-[#81D8D0]/30 pt-4">
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-[#81D8D0] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Treatment Flow Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ注射を受けるまでの流れ
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 space-y-12">
                {[
                  {
                    step: "STEP 1",
                    title: "来院",
                    desc: "プラセンタ注射をご希望の方は、診療時間内にご来院下さい。予約も可能ですので、受付までご連絡下さい。",
                    icon: "🏥"
                  },
                  {
                    step: "STEP 2",
                    title: "待機",
                    desc: "診察順にお呼びしますので、お待ちください。",
                    icon: "⏳"
                  },
                  {
                    step: "STEP 3",
                    title: "説明と同意",
                    desc: "初診時、プラセンタの効果、リスクを説明し、同意書を記入していただきます。",
                    icon: "📝"
                  },
                  {
                    step: "STEP 4",
                    title: "施術",
                    desc: "皮下注射で短時間（１～２分程度）で終了です。",
                    icon: "💉"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#81D8D0]/10 flex items-center justify-center">
                        <span className="text-[#81D8D0] font-bold">{item.step}</span>
                      </div>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-700 italic text-center text-lg">
                    プラセンタ療法をご希望の方に、適切な用法・用量をご検討いたしますので、お気軽にご相談下さい。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Treatment Intervals Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ注射を受ける間隔
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                間隔はあくまでも平均的な目安です。
                注射を受ける間隔や投薬量は、ご自身の体調に合わせて調整していく必要があるため、
                医師としっかり相談し、治療を進めていきましょう。
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    title: "更年期障害の症状改善目的の場合",
                    items: [
                      "１週間に３回（１回１アンプル）",
                      "症状の改善が見られる２～３か月以降は、１～２週間に１回程度"
                    ],
                    icon: "🌸"
                  },
                  {
                    title: "疲労回復目的の場合",
                    items: [
                      "１週間に１～２回（１回１アンプル）",
                      "症状に改善が見られる２～３か月以降は、１週間に１回程度"
                    ],
                    icon: "⚡"
                  },
                  {
                    title: "肌のトラブル改善目的の場合",
                    items: [
                      "１週間に１回（１回１アンプル）",
                      "肌の再生サイクルは、２８日周期のため、効果が実感できるには、注射を受け始めて、数週間ほどかかります。"
                    ],
                    icon: "✨"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#F8FCFC] p-6 rounded-lg border-l-4 border-[#81D8D0]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-lg font-bold text-[#81D8D0]">{category.title}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-lg">
                          <span className="text-[#81D8D0] font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
            </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          
          {/* Side Effects Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ注射の副作用
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                プラセンタは比較的副作用が少ないと言われておりますが、今までに下記のような点が確認されておりますので、気になる方や症状が現れる方は医師へご相談ください。
              </p>
              
              <div className="bg-[#FFF5F5] p-6 rounded-lg border-l-4 border-red-300 my-6">
                <p className="text-gray-700 mb-4 font-medium text-lg">起こりうる副作用</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">①</span>
                    <span className="text-lg">注射部位の疼痛、過敏症（発疹・発熱・掻痒感など）、注射部位の硬結</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">②</span>
                    <span className="text-lg">ショック：ヒト組織由来のタンパク・アミノ酸製剤のため、まれに生じることがあると報告あり</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
          
          {/* Caution Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              プラセンタ注射ご希望の方への注意事項
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <ul className="space-y-6">
                {[
                  "当院で使用するプラセンタは人の胎盤（臓器）を原材料としています。",
                  "生物由来（ヒト）の製剤のため、一度でもプラセンタ注射をお受けになりますと、献血ができなくなります。",
                  "当院で使用するプラセンタ製剤は製造メーカーで厳密に検査を受けています。",
                  "ヒト胎盤由来の原材料とした医薬品により、感染症が伝播したとの報告は現在まで国内・海外ともにありませんが、変異型クロイツフェルト・ヤコブ病などの感染リスクを完全否定できません。",
                  "厚生労働省の指導により、当院にてプラセンタ注射を受ける方にはしっかりと説明しご納得いただき、承諾書にご署名をいただいた上での投与を実施しております。"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#81D8D0] flex items-center justify-center text-white">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </motion.li>
                ))}
            </ul>
            </div>
          </motion.section>
          
          {/* Price Table */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b-2 border-[#81D8D0]/30 pb-3 inline-block">
              料金表
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#81D8D0] text-white p-6">
                <h3 className="font-bold text-xl">プラセンタ注射 料金</h3>
          </div>
              
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="py-4 px-6 text-left text-gray-700 text-lg">メニュー</th>
                        <th className="py-4 px-6 text-right text-gray-700 text-lg">料金（税込）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-6 px-6 font-medium text-gray-700 text-lg">プラセンタ注射　２A</td>
                        <td className="py-6 px-6 text-right text-gray-700 text-lg">¥2,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#81D8D0]/10 to-white p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#81D8D0]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#81D8D0]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                ご予約・ご相談について
              </h2>
              <p className="text-gray-700 mb-8 text-lg max-w-2xl">
                プラセンタ注射に関するご質問やお悩みは、お気軽にご相談ください。あなたの体調や目的に合わせて、最適な治療プランをご提案いたします。
              </p>

          <div className="text-center">
                <motion.a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#81D8D0] text-white px-12 py-5 rounded-lg hover:bg-[#65B5AA] transition-colors shadow-md hover:shadow-lg text-xl font-medium"
            >
              カウンセリング予約
                </motion.a>
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 