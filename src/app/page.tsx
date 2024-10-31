import { MainPage } from '@/pageComponents/MainPage/MainPage';
import type { Metadata } from 'next';

const title = 'PALMA | AI-Powered Multi-Blockchain DeFi Platform';

const description =
  'Palma is a AI-powered multi-blockchain DeFi trading platform offering secure and efficient trading operations. Join us to access powerful DeFi tools.';

const keywords = [
  'Palma',
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
    siteName: 'Palma',
    url: 'https://palma.network',
    images: { url: '/images/opengraph.png' },
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    description: description,
    images: { url: '/images/opengraph.png', alt: 'Palma_image' },
  },
};

export default function Main() {
  return <MainPage />;
}
