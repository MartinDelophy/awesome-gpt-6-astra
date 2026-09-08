import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'三分天下 · 百将风云',description:'108位原创头像武将，三方均衡开局。经营城池、统率群英、逐鹿天下。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN" className="dark"><body>{children}</body></html>;}
