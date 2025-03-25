'use client';
import Image from 'next/image';
import Link from 'next/link';

// ニュース記事のデータ
const newsItems = [
  {
    date: '2024.03.12',
    category: '新メニュー',
    title: 'リジュランダーマ導入のお知らせ',
    link: '/news/rejuran-derma'
  },
  {
    date: '2024.03.12',
    category: '採用情報',
    title: '看護師・准看護師募集のお知らせ',
    link: '/news/nurse-recruitment'
  },
  {
    date: '2024.03.12',
    category: 'お知らせ',
    title: 'クリニック公式サイトリニューアルのお知らせ',
    link: '/news/website-renewal'
  }
];

export default function NewsPage() {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-en text-sm tracking-[.3em] text-gray-500 mb-2">NEWS</p>
            <h2 className="font-serif text-3xl">お知らせ</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <Link 
                  href={item.link} 
                  key={index}
                  className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <time className="text-gray-500 text-sm">{item.date}</time>
                        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 