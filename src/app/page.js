import styles from './page.module.css';
import Hero from '../components/Hero/Hero';
import Features from '@/components/Features/Feature';
import Feature from '@/components/Feature/Feature';

import Trust from '@/components/Trust/Trust';
import Step from '../components/Step/Step';
import Faqs from '@/components/Faqs/Faqs';

export default function Home() {
  return (
    <main>
      <section id='hero' className={styles.center}>
        <div className={styles.container}>
          <Hero />
        </div>
      </section>

      <section id='feature'>
        <div className={styles.container}>
          <Feature />
        </div>
      </section>

      <section id='features'>
        <div className={styles.container}>
          <Features />
        </div>
      </section>

      <section id='trust'>
        <div className={styles.container}>
          <Trust />
        </div>
      </section>

      <section id='step'>
        <div className={styles.container}>
          <Step />
        </div>
      </section>

      <section id='faqs'>
        <div className={styles.container}>
          <Faqs />
        </div>
      </section>
    </main>
  );
}
