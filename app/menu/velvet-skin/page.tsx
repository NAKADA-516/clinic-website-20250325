export default function VelvetSkinPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl tracking-[.5em] text-[#40A99B] mb-2">
            TREATMENT
          </h1>
          <p className="font-serif text-base text-[#65B5AA]">
            ヴェルベットスキン
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              施術について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              ヴェルベットスキンは、ダーマペン4とビタミン導入を組み合わせた治療です。医師による診察の上、お肌の状態に合わせて施術を行います。
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              治療の流れ
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>1. カウンセリング（医師による診察）</p>
              <p>2. お肌の状態の確認</p>
              <p>3. 麻酔クリームの塗布（30分程度）</p>
              <p>4. ダーマペン施術と美容液の導入（40〜50分程度）</p>
              <p>5. アフターケアのご説明</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              施術後の経過
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>施術直後は赤みが出る場合があります</li>
              <li>翌日から通常の生活が可能です</li>
              <li>施術後1週間程度は、お肌の状態に応じたスキンケアが必要です</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              注意事項
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>施術の効果には個人差があります</li>
              <li>治療に関する詳しい説明は、カウンセリング時に医師が行います</li>
              <li>妊娠中・授乳中の方はご利用いただけません</li>
              <li>施術後は医師の指示に従ってください</li>
            </ul>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg mb-16">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              ご予約・ご相談について
            </h2>
            <p className="text-gray-700 mb-4">
              施術に関するご不安な点やご質問は、カウンセリングの際に担当医師にご相談ください。お肌の状態を確認した上で、適切な治療計画をご提案させていただきます。
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className="inline-block bg-[#40A99B] text-white px-10 py-4 rounded-lg hover:bg-[#65B5AA] transition-colors shadow-md hover:shadow-lg text-lg font-medium"
            >
              カウンセリング予約
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 