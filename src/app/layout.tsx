import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import '@/assets/styles/index.scss';
import { GoogleAnalytics } from '@next/third-parties/google';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={mulish.className}>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId='G-4PTRVLFR5Z'/>
    </html>
  );
}
