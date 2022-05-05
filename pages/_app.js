import '@/styles/bootstrap.scss';
import '@/styles/globals.scss';
import { useState, useEffect } from 'react';
import { AppContext } from '@/components/UseContext';

export default function QurnoApp({ Component, pageProps }) {
  const [searchOpen, setSearchOpen] = useState('');

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <AppContext.Provider
      value={{
        toggleSearch: [searchOpen, setSearchOpen],
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
