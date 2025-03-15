import { FC } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export const Landing: FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/generator');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GitHub Profile README Generator</h1>
      <p className={styles.description}>
        Create an awesome GitHub profile README in minutes with our easy-to-use generator
      </p>
      <button onClick={handleGetStarted} className={styles.button}>
        Get Started
      </button>
    </div>
  );
};
