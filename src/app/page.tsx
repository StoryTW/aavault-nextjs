import { MainPage } from '@/pageComponents/MainPage/MainPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aavaullt Main',
  description: 'Aavaullt Main',
};

export default function Main() {
  return <MainPage />;
}
