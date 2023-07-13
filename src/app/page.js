import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import Features from "@/components/Features/Feature";
import Trust from "@/components/Trust/Trust";
import Step from "../components/Step/Step";
import Faqs from "@/components/Faqs/Faqs";

export default function Home() {
  return (
    <main>
      <section id="hero" className={styles.center}>
        <div className={styles.container}>
          <Hero />
        </div>
      </section>

      <section id="features">
        <div className={styles.container}>
          <Features />
        </div>
      </section>

      <section id="trust">
        <div className={styles.container}>
          <Trust />
        </div>
      </section>

      <section id="step">
        <div className={styles.container}>
          <Step />
        </div>
      </section>

      <section id="faqs">
        <div className={styles.container}>
          <Faqs />
        </div>
      </section>
    </main>
  );
}

{
  /* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */
}

{
  /* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <Heading
          fontFamily={"Sora"}
          fontWeight={800}
          fontSize={{ base: "4xl", sm: "4xl", md: "5xl" }}
          lineHeight={"140%"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          position={"relative"}
          zIndex={"100"}
          color="#201087"
        >
          Next js
          <br />
        </Heading>
      </div> */
}

{
  /* <div className={styles.grid}>
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Docs <span>-&gt;</span>
    </h2>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>

  <a
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Learn <span>-&gt;</span>
    </h2>
    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Templates <span>-&gt;</span>
    </h2>
    <p>Explore the Next.js 13 playground.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Deploy <span>-&gt;</span>
    </h2>
    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
  </a>
</div>; */
}
