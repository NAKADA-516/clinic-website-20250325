import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'メニュー・料金 | 美容クリニック',
  description: '美容クリニックの施術メニューと料金のご案内。ヒアルロン酸注入やその他の美容治療について詳しくご紹介いたします。',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
} 