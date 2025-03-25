"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HairRemovalPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-white to-[#f8fcfc]">
      <div className="container mx-auto px-4">
        {/* Hero Section with Dual Wave Concept */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#81D8D0]/10 to-[#F4B183]/10 rounded-2xl -z-10"></div>
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Title Section */}
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl tracking-wider text-[#3A9188] mb-8">
                医療レーザー脱毛
              </h1>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3A9188]/5 to-transparent"></div>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-medium tracking-wide">
                  クラリティⅡで、<span className="text-[#3A9188]">痛みが少なく</span>効果的な<br className="hidden md:inline" />医療脱毛を実現
                </p>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full">
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl border-4 border-white mx-auto">
                <Image
                  src="/images/clarity2-hair-removal-hero.jpg"
                  alt="クラリティII 医療レーザー脱毛"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction to Clarity II */}
          <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#81D8D0]/10 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F4B183]/10 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              医療レーザー脱毛クラリティⅡとは？
            </h2>
            
            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed mb-4">
                クラリティⅡは、美容大国である韓国の美容機器メーカー「ルートロニック社」が開発した医療用レーザーによる脱毛マシンです。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                医療用レーザーには毛母細胞（毛を作り出す細胞）の中のメラニンに反応するという性質があり、照射により発生した熱エネルギーが毛穴の中の「毛包」という器官にダメージを与え、破壊することで、毛が生えてこないようにする効果があります。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                クラリティⅡは、「アレキサンドライト」と「ロングパルスYAG」という2種類のレーザーを搭載しているのが最大の特徴で、性質が違う二つのレーザーを使い分けることで、お肌を痛めることなく、より効率的に脱毛を行うことが可能です。
              </p>
            </div>
            
            {/* Visual Representation of Dual Lasers */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
                  <h3 className="text-lg font-bold text-amber-800 mb-3">①アレキサンドライトレーザー</h3>
                  <p className="text-gray-700">一般的に広く脱毛に使用されるレーザーです。即効性があり、高い脱毛効果が期待できますが、表皮のメラニンにも反応してしまうという特性があるため、色黒肌や色素沈着のあるお肌への照射はできません。</p>
                </div>
                <div className="md:w-1/2 p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h3 className="text-lg font-bold text-teal-800 mb-3">②ロングパルスYAGレーザー</h3>
                  <p className="text-gray-700">波長が長く、表皮へのダメージを与えずにお肌の深い部分にまでしっかり熱を届けることができるレーザーです。アレキサンドライトに比べると、脱毛効果は弱いですが、色黒肌や色素沈着があるお肌にも照射が可能です。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              医療レーザー脱毛クラリティⅡの特徴
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "施術がスピーディーで、お肌に優しい",
                  desc: "均一にレーザー照射ができる「フラットトップビーム」技術で効率的に施術。冷風を当てながら照射するので痛みも軽減",
                  icon: "⚡"
                },
                {
                  title: "敏感肌や色黒肌でも治療できる",
                  desc: "二つのレーザーを使い分けることで、様々な肌質・肌色の方でも安全に施術可能",
                  icon: "👌"
                },
                {
                  title: "さまざまな箇所の脱毛に対応",
                  desc: "9種類のスポットサイズを用意し、部分的なスポット照射から全身脱毛まで幅広く対応",
                  icon: "✨"
                },
                {
                  title: "メンズ脱毛にも最適",
                  desc: "痛みが少なく太い毛にも対応。ひげなどの濃い毛もデザイン脱毛が可能",
                  icon: "👨"
                },
                {
                  title: "リフトアップ・美肌などの効果も",
                  desc: "脱毛だけでなく、肌質改善、リフトアップなど美肌効果も期待できる",
                  icon: "💆‍♀️"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-[#3A9188]/10 flex items-center justify-center text-xl">
                        {feature.icon}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Painless Technology Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              痛みを抑える先進技術
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-[#3A9188]">施術がスピーディーで、お肌に優しい</h3>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  均一にレーザー照射ができる「フラットトップビーム」という技術を導入し、強い出力でなくても効率的に行うことができるため、お肌を傷めることなく、スピーディーな脱毛が可能です。
                </p>
                <p className="text-gray-700 mb-4">
                  また、常に0℃の冷風を当てながら照射を行うことで、従来のマシンに比べ、脱毛時の痛みを大幅に抑えることが可能になりました。
                </p>
                <p className="text-gray-700 italic text-sm">
                  ※事前に冷却用のジェルなどを塗る必要もありません。
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full max-w-2xl mx-auto my-8">
                <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md border border-[#3A9188]/20 bg-white">
                  <Image
                    src="/images/clarity2-flat-top-beam.jpg"
                    alt="クラリティII フラットトップビーム技術による従来の医療レーザー脱毛との違い"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Versatility Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              様々な肌質・部位に対応
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#3A9188] mb-4">敏感肌や色黒肌でも治療できる</h3>
                <p className="text-gray-700 mb-4">
                  クラリティⅡは、お肌の弱い方から、色黒の方まで、さまざまなスキンタイプに応じて、アレキサンドライト脱毛とロングパルスYAG脱毛を使い分けることが可能です。
                </p>
                <p className="text-gray-700">
                  さらに、二つのレーザーを組み合わせることもできるので、それぞれの患者様に合わせ、いろいろなバリエーションで、最適な脱毛を行うことが可能です。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#3A9188] mb-4">さまざまな箇所の脱毛に対応</h3>
                <p className="text-gray-700 mb-4">
                  クラリティⅡは、9種類のスポットサイズ（照射できる範囲、直径）が用意されているため、さまざまな部位の脱毛が可能です。
                </p>
                <p className="text-gray-700">
                  当クリニックでは、患者様のご希望に沿って部分的なスポット照射から、全身脱毛まで幅広い施術を行っております。
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-bold text-[#3A9188] mb-4">メンズ脱毛にも最適</h3>
              <p className="text-gray-700 mb-4">
                痛みが少ないクラリティⅡは、ひげのような太い毛の脱毛にも適しています。
              </p>
              <p className="text-gray-700 mb-4">
                最近では、「毎日のひげ剃りが面倒」「カミソリ負けしてしまう」などの理由でひげ脱毛を希望される男性の方も増加しており、メンテナンスの煩わしさから解放されるため、ビジネスマンを中心にそのニーズが高まりつつあります。
              </p>
              <p className="text-gray-700 mb-6">
                「アゴひげは残し、アゴ下のみを脱毛する」など、お好みに合わせひげの形をデザインすることも可能です。
              </p>
              
              {/* Add mens hair removal image */}
              <div className="w-full max-w-2xl mx-auto my-8">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md border border-[#3A9188]/20 bg-white">
                  <Image
                    src="/images/clarity2-mens-hair-removal.jpg"
                    alt="クラリティII メンズ脱毛 - ひげ脱毛やデザイン脱毛が可能"
                    fill
                    className="object-cover"
                  />
                </div>
                  </div>
                  </div>
          </section>
          
          {/* Multiple Benefits Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              脱毛以外の効果も期待できる
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                {
                  title: "オールスキン全身脱毛",
                  desc: "755nmアレキサンドライト＆1064nmヤグレーザーが日焼けした肌や男性、産毛にも対応"
                },
                {
                  title: "クラリティタイトニングリフトアップ",
                  desc: "皺たるみ、脱毛、肌質、色調改善に"
                },
                {
                  title: "血管治療",
                  desc: "赤ら顔、毛細血管拡張症、単純症・唐人性血管腫、後天性赤あざに"
                },
                {
                  title: "クラリティフェイシャルⅡ肌質改善",
                  desc: "目元の小皺や毛穴、ニキビ治療、爪白癖に"
                },
                {
                  title: "クラリティピール色調改善",
                  desc: "色むら、シミくすみ、美白に"
                },
                {
                  title: "C-toning（シートーニング）",
                  desc: "最新の美肌治療"
                },
                {
                  title: "シミ治療",
                  desc: "表在性色素班やホクロに"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#3A9188] mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              医療レーザー脱毛症例写真
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-10">
              <div className="text-gray-700 space-y-2">
                <p>3回照射しました。発毛の減少が認められます。脱毛レーザーの治療では、やけどを起こすリスクがあります。</p>
                <p>皮膚色により適切な強度レーザーを照射する必要があります。</p>
                <p>多少の痛みは伴います。当日から3日間ほどは発赤が見られます。</p>
                <p>下肢全体で1年間の有効期間、5回の治療で11万円です。</p>
              </div>
            </div>
          </section>

          {/* Treatment Flow */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              医療レーザー脱毛治療の流れ
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-6 space-y-10">
                {[
                  {
                    step: "STEP1",
                    title: "診察・カウンセリング",
                    desc: "まず、初めに女性看護師とのカウンセリングを行った後、ドクターのカウンセリングを行います。カウンセリングでは、レーザ―脱毛についての詳しい説明をした後、患者様の希望の箇所の毛質、お肌の状態などを確認させていただきます。カウンセリング当日に照射を行うことも可能です。ご希望の方はお申し出ください。"
                  },
                  {
                    step: "STEP2",
                    title: "医療レーザー脱毛照射",
                    desc: "レーザー照射前には、やけど防止のため、脱毛を希望される箇所のムダ毛をカミソリまたはシェーバーで処理します。目を保護するためのアイマスクを付けていただき、レーザーを照射していきます。"
                  },
                  {
                    step: "STEP3",
                    title: "医療レーザー脱毛施術後",
                    desc: "施術終了後、炎症を抑えるための塗り薬を塗布して、施術は終了となります。※塗り薬は、ご自宅でもお使いいただけるように、施術後にお渡しします。"
                  },
                  {
                    step: "STEP4",
                    title: "アフターケア",
                    desc: "照射後、3日程度で皮膚内に残っていた焼けた毛が出てきますが、自然に抜け落ちます。時間が経つにつれ、休眠状態だった毛根の毛が少しずつ出てきますので、毛周期に合わせ、２か月に1度のペースで施術を行うことで、効果的にムダ毛を減らすことが可能です。"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#3A9188] text-white px-3 py-1 rounded-md mr-3">
                          {item.step}
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hair Growth Cycle Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
                毛周期について
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#3A9188] mb-4">毛周期に合わせた施術で効果的な脱毛を</h3>
                    <p className="text-gray-700 mb-4">
                      毛には「成長期」「退行期」「休止期」という3つの周期があり、レーザー脱毛は成長期の毛に最も効果的です。
                    </p>
                    <p className="text-gray-700 mb-6">
                      全ての毛を効果的に脱毛するためには、毛周期に合わせて複数回の施術を行う必要があります。当院では、お客様の毛の状態を見ながら、最適な間隔で施術を行っています。
                    </p>
                  </div>
                  
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md border border-[#3A9188]/20 bg-white">
                      <Image
                        src="/images/clarity2-hair-growth-cycle.jpg"
                        alt="毛周期（成長期・退行期・休止期）の説明図"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Precautions Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              ご注意・アフターケア
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-400">
                <h3 className="font-bold text-lg text-red-700 mb-3">ご注意</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                  <li>妊娠中の方や光アレルギーの方はレーザー治療を受けることができません。</li>
                  <li>日焼けした肌は火傷の危険があり、脱毛効果も落ちるため、施術前はお肌を焼かないように気を付けましょう。</li>
                  <li>治療開始後は、毛抜きなどで無理に毛を抜くのは控えましょう。</li>
                </ul>
            </div>

              <div className="bg-[#f8fcfc] p-6 rounded-xl shadow-md border-l-4 border-[#3A9188]">
                <h3 className="font-bold text-lg text-[#3A9188] mb-3">アフターケア</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                  <li>シャワーは当日から可能ですが、脱毛した部位は擦らず、軽く流す程度にしましょう。</li>
                  <li>施術後にお渡しする塗り薬は、忘れずに塗るようにしましょう。</li>
                  <li>施術後しばらくはお肌が敏感になっています。忘れずに保湿を行い、紫外線対策もしっかりと行いましょう。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              医療レーザー脱毛Q&A
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "完全にムダ毛をなくすためには何回ぐらいの施術が必要ですか？",
                  answer: "ムダ毛の量や濃さには個人差があり、脱毛部位によっても違いますが、間隔をあけて5回程度の照射が必要とお考え下さい。カウンセリング時に毛量や太さなどを実際に確認させていただき、必要な治療回数や期間をご提示いたします。"
                },
                {
                  question: "施術時の痛みはどれくらいですか？",
                  answer: "痛みの少ないクラリティⅡの場合、「少し熱めのマッサージを受けている感覚」とおっしゃる患者様もいらっしゃいます。ただし、痛みの感じ方には個人差があり、部位や毛の濃さによっても痛みの感じ方は異なります。特に痛みに弱いという方は、事前にご相談ください。"
                },
                {
                  question: "脱毛を希望する場所は受診前に剃毛したほうが良いでしょうか？",
                  answer: "施術時には、毛量や毛質を確認するため、事前に剃毛していただく必要はありません。※剃毛料金はかかりません。"
                },
                {
                  question: "レーザーの照射による硬毛化が心配なのですが？",
                  answer: "硬毛化は、レーザーの照射により、かえって毛が「硬く・濃く」なることで、若い方にまれに見られる症状ですが、当クリニックでは2種類のレーザーの波長を調整し、組み合わせて照射するため、あまりご心配はいりません。万が一、硬毛化した場合も、照射を止めると元の毛質の戻りますのでご安心ください。ご心配な場合、あらかじめ硬毛化しやすい部位（上腕）を避けて照射することも可能です。"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#3A9188] text-lg mb-3 flex items-center">
                    <span className="bg-[#3A9188] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">Q</span>
                    {item.question}
                  </h3>
                  <div className="pl-10">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2 border-[#3A9188]/30 pb-3 inline-block">
              料金表
            </h2>
            
            <div className="mb-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#3A9188] text-white p-4">
                  <h3 className="font-bold text-lg">クラリティⅡ 医療レーザー脱毛料金</h3>
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
                        {[
                          { area: "脇or鼻or鼻下", type: "トライアル", price: "¥2,100" },
                          { area: "脇or鼻or鼻下", type: "１回", price: "¥3,000" },
                          { area: "脇or鼻or鼻下", type: "６回コース", price: "¥15,000" },
                          { area: "ひじ下orひざ下", type: "トライアル", price: "¥7,000" },
                          { area: "ひじ下orひざ下", type: "１回", price: "¥10,000" },
                          { area: "ひじ下orひざ下", type: "６回コース", price: "¥50,000" },
                          { area: "ひげor顔", type: "トライアル", price: "¥14,000" },
                          { area: "ひげor顔", type: "１回", price: "¥20,000" },
                          { area: "ひげor顔", type: "６回コース", price: "¥100,000" }
                        ].map((item, index, array) => (
                          <tr 
                            key={index} 
                            className={index !== array.length - 1 ? "border-b border-gray-200" : ""}
                          >
                            <td className="py-4 px-4 font-medium text-gray-700">{item.area} {item.type}</td>
                            <td className="py-4 px-4 text-right text-gray-700">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                    <p>※ すべて税込価格です</p>
                    <p>※ その他の部位や全身脱毛についてはお問い合わせください</p>
                    <p>※ ご希望に応じてカスタマイズプランもご用意しております</p>
                </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#3A9188]/10 to-white p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3A9188]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3A9188]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                ご予約・ご相談について
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl">
                医療レーザー脱毛に関するご質問やお悩みは、カウンセリングの際に担当医師や看護師にご相談ください。お肌や毛質の状態を確認した上で、適切な治療計画をご提案させていただきます。
              </p>
              
              <div className="text-center">
                <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="inline-block bg-[#3A9188] text-white px-10 py-4 rounded-lg hover:bg-[#2D7A73] transition-colors shadow-md hover:shadow-lg text-lg font-medium"
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