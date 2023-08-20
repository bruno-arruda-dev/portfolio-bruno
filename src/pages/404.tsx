import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/404.module.scss';
import { PiSmileyMeh } from 'react-icons/pi';

const PageNotFound = () => {
  const [countdown, setCountdown] = useState(10);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0 && !redirect) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0 && !redirect) {
      router.push('/');
    }
  }, [countdown, redirect, router]);

  const handleRedirect = () => {
    setRedirect(true);
    router.push('/');
  };

  return (
    <main className={styles.pageNotFound}>
      <PiSmileyMeh />
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>
        Redirecionando em {countdown} segundos... Ou{' '}
        <Link href="/" onClick={handleRedirect}>
          clique aqui
        </Link>{' '}
        para ir direto.
      </p>
    </main>
  );
};

export default PageNotFound;