'use client';

import Link from 'next/link';

export default function WebsiteRenewalPage() {
  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <time className="text-gray-500">2024.03.12</time>
                <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
                  お知らせ
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-8">クリニック公式サイトリニューアルのお知らせ</h1>
              
              <div className="prose max-w-none">
                <p className="mb-6 leading-relaxed">
                  平素より、代々木駅前美容クリニックのホームページをご利用いただき誠にありがとうございます。
                </p>
                
                <p className="mb-6 leading-relaxed">
                  この度、ホームページを全面的にリニューアルいたしました。
                </p>

                <p className="mb-6 leading-relaxed">
                  より使いやすいホームページを目指して、デザインとページの構成を見直しました。
                </p>

                <p className="mb-6 leading-relaxed">
                  今後とも、皆様に安心、信頼して受診いただけるクリニックを目指していきたいと思います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 