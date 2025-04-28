import { MainPage } from '@/pageComponents/MainPage/MainPage';
import type { Metadata } from 'next';

const title = 'Palma Network | AI-Powered Multi-Blockchain CeDeFi Platform';

const description =
  'Palma Network is a AI-powered multi-blockchain CeDeFi trading platform offering secure and efficient trading operations. Join us to access powerful DeFi tools.';

const keywords = [
  'Palma',
  'Network',
  'cryptocurrency',
  'blockchain',
  'CeDeFi',
  'trading',
  'staking',
  'crypto trading',
  'CeDeFi platform',
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
