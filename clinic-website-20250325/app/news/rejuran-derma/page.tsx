'use client';

import Link from 'next/link';

export default function RejuranDermaNewsPage() {
  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <time className="text-gray-500">2024.03.12</time>
                <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
                  新メニュー
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-8">リジュランダーマ導入のお知らせ</h1>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">リジュランダーマとは</h2>
                <p className="mb-4">
                  リジュランダーマとは、肌の再生や若返りを目的とした美容治療の一つです。この治療では、ダーマペンで開けた微小な穴を通じてリジュランを効果的に肌の深層に届けることができます。この技術により、リジュランの有効成分が肌の奥深くまで浸透し、肌の内部から再生と修復を促します。結果として、肌のハリや弾力が向上し、シワや細かい線が目立たなくなるほか、肌の質感やトーンも改善されます。
                </p>
                <p className="mb-8">
                  シワの改善、肌の潤いの向上、毛穴の引き締め、さらにはニキビ跡や傷跡の軽減にも効果的とされており、幅広い肌悩みに対応できる点が魅力です！！また、治療後のダウンタイムが比較的短いため、忙しい生活の中でも取り入れやすい治療法として、多くの方に支持されています。
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">リジュランとは</h2>
                <p className="mb-8">
                  「リジュラン注射」は、サーモン由来のポリヌクレオチド（PN）を主成分とする注入治療です。<br /><br />
                  リジュランを皮下に直接注入することで、コラーゲンやエラスチンの生成が促進され、肌細胞の再生能力が向上します。これにより、皮膚内部の状態が回復し、ハリや弾力が増し、皮膚の厚みも向上してシワの改善が期待できます。さらに、リジュランには抗炎症作用や抗酸化成分が含まれており、これがニキビの発生を抑え、肌のくすみを軽減する効果をもたらします。加えて、保湿力を高め、皮脂の分泌を適切に調整することで、肌のターンオーバーを正常化し、全体的な肌の健康を向上させます。
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">ダーマペンとは</h2>
                <p className="mb-8">
                  ダーマペンとは、髪の毛よりも細い針で肌に小さな穴を開けて、自然治癒力によりさまざまな肌トラブルにアプローチする施術です。コラーゲンやエラスチンといった肌にとって大切な成分を作られやすくするため、肌のハリや弾力が気になる方にも向いています。
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">効果</h2>
                <ul className="list-disc pl-6 mb-8">
                  <li>肌の再生：リジュランはポリヌクレオチド（PN）を含んでおり、細胞の再生を促進し、肌の健康を改善します。</li>
                  <li>シワの改善：小じわや浅いシワの改善に効果的です。</li>
                  <li>肌の弾力アップ：肌の弾力やハリを増し、若々しい肌を取り戻します。</li>
                  <li>保湿効果：肌の水分保持能力を高め、しっとりとした肌にします。</li>
                  <li>傷の修復：小さな傷や炎症を修復し、肌のダメージを軽減します。</li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4">注射の痛みが心配な方へ</h2>
                <p className="mb-4">痛みに弱い方のために、各種麻酔をご用意しておりますのでご安心ください。</p>
                <ul className="list-disc pl-6 mb-8">
                  <li>表面麻酔：局所麻酔薬を針を刺す部分に貼り付けることで痛みを和らげます。</li>
                  <li>笑気麻酔：吸入することで痛みの感覚がくなり、リラックスした感覚になります。</li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4">治療の流れ</h2>
                <ol className="list-decimal pl-6 mb-8">
                  <li className="mb-4">
                    <strong>カウンセリング</strong><br />
                    医師が患者の肌の状態や悩みを確認し、リジュランダーマ治療が適しているかどうかを判断します。
                  </li>
                  <li className="mb-4">
                    <strong>お会計</strong>
                  </li>
                  <li className="mb-4">
                    <strong>準備</strong><br />
                    洗顔後、痛みを軽減するために、施術部位に麻酔クリームを塗布します。
                  </li>
                  <li className="mb-4">
                    <strong>施術</strong><br />
                    ダーマペン4を使って肌に微細な針を当て、リジュランを塗布し肌に浸透させます。
                  </li>
                  <li className="mb-4">
                    <strong>アフターケア</strong><br />
                    施術後は冷却を行い、保湿クリームを塗布します。
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">施術について</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <dt className="font-bold">施術時間</dt>
                    <dd>麻酔の導入を含め約60分</dd>
                  </div>
                  <div>
                    <dt className="font-bold">通院回数</dt>
                    <dd>月に１回が目安、５回くらいが理想的</dd>
                  </div>
                  <div>
                    <dt className="font-bold">痛み</dt>
                    <dd>個人差がありますが麻酔を塗布するので抑えられます</dd>
                  </div>
                  <div>
                    <dt className="font-bold">メイク</dt>
                    <dd>翌日から可能</dd>
                  </div>
                  <div>
                    <dt className="font-bold">洗顔</dt>
                    <dd>翌日から可能</dd>
                  </div>
                  <div>
                    <dt className="font-bold">シャワー・入浴</dt>
                    <dd>当日から可能</dd>
                  </div>
                </dl>

                <h2 className="text-xl font-bold mt-8 mb-4">副作用・ダウンタイム</h2>
                <ul className="list-disc pl-6 mb-8">
                  <li>赤みや腫れ：注射後に一時的な赤みや腫れが生じることがあります。</li>
                  <li>痛み：注射部位に軽い痛みを感じることがありますが、数日で消失します。</li>
                  <li>内出血：まれに注射部位に内出血が生じることがあります。</li>
                  <li>アレルギー反応：ごくまれにアレルギー反応が起こる可能性があります。</li>
                </ul>
                <p className="mb-8">
                  ダウンタイムは比較的短く、1～2日程度で通常の生活に戻れます。ただし、個人差がありますので、長引く場合もあります。
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">注意点</h2>
                <ul className="list-disc pl-6 mb-8">
                  <li>施術後のケア：施術後は注射部位を清潔に保ち、触らないように注意します。</li>
                  <li>激しい運動やアルコールの摂取：施術後24時間以内は激しい運動やアルコールの摂取を避けてください。</li>
                  <li>日焼け：施術後は直射日光を避け、日焼け止めを使用することが推奨されます。</li>
                  <li>妊娠中や授乳中の女性：安全性が確認されていないため、施術は控えるべきです。</li>
                  <li>抗凝固剤・免疫抑制剤等を使用している方</li>
                  <li>アレルギー疾患、自己免疫疾患の方</li>
                  <li>魚、魚卵などのアレルギー体質の方</li>
                </ul>

                <div className="text-center mt-12">
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
        </div>
      </section>
    </main>
  );
} 