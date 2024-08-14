import { MainPage } from '@/pageComponents/MainPage/MainPage';
import type { Metadata } from 'next';

const title = 'AAVAULT | Multi-Blockchain DeFi Trading Platform';

const description =
  'AAVAULT is a multi-blockchain DeFi trading platform offering secure and efficient trading operations. Join us to access powerful DeFi tools.';

const keywords = [
  'AAVAULT',
  'cryptocurrency',
  'blockchain',
  'DeFi',
  'trading',
  'staking',
  'crypto trading',
  'DeFi platform',
];

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    siteName: 'AAVAULT',
    url: 'https://aavault.io',
    images: { url: '/images/opengraph.png' },
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    description: description,
    images: { url: '/images/opengraph.png', alt: 'aavault_image' },
  },
};

export default function Main() {
  return <MainPage />;
}
