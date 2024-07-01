import { TradePage } from '@/pageComponents/TradePage/TradePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aavaullt Trade',
  description: 'Aavaullt Trade',
};

export default function Trade() {
  return <TradePage />;
}