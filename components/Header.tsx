'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/y-logoy.png"
            alt="代々木駅前美容クリニック"
            width={30}
            height={30}
            className="h-auto"
            priority
          />
          <span className="text-gray-900">代々木駅前美容クリニック</span>
        </Link>

        {/* ハンバーガーメニューボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* サイドメニュー */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-4">
            <nav className="space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                TOP
              </Link>
              <Link
                href="/news"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                NEWS
              </Link>
              <Link
                href="/menu"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                MENU
              </Link>
              <Link
                href="/doctor"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                DOCTOR
              </Link>
              <Link
                href="/access"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ACCESS
              </Link>
              <Link
                href="/recruit"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                採用情報
              </Link>
              <a
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                className="block py-2 text-gray-600 hover:text-[#81D8D0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ご予約
              </a>
            </nav>
          </div>
        </div>

        {/* オーバーレイ */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
} 