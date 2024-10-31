import { ThemeProvider } from 'next-themes';
import React, { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme='dark'
      themes={['light', 'dark']}
      enableSystem={false}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  );
};
