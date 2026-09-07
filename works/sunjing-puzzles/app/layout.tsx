import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '榫境 · 指尖上的东方智慧',
  description:
    '转动木作，解开巧思。在榫境体验孔明锁与华容道，探索榫卯与空间推理的乐趣。',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
