import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoNoBG from '../public/images/Logo-Icon-NoBG.png'
import illustrationGirl from '../public/images/illustration_girl.png'
import { WaveDef, WaveSection } from '../components/WaveSection'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradient_bar}></div>

      <div className={styles.header_container +  " " + styles.content}>
        <div className={styles.header_logo}>
          <Image
            width={80}
            height={80}
            src={logoNoBG}
            alt={"Logo STOP au cyber-harcèlement"}
          />
          <h1>
            <b>STOP</b> au<br />
            cyber-harcèlement
          </h1>
        </div>

        <navbar className={styles.header_navbar}>
          <a>
            <b>Accueil</b>
          </a>
          <a>
            Chiffres
          </a>
          <a>
            {"C'est quoi ?"}
          </a>
          <a>
            Exemples
          </a>
          <a>
            Conséquences
          </a>
          <a>
            Que faire ?
          </a>
        </navbar>
      </div>
    </header>
  )
}

function HomeSection() {
  return (
    <section className={styles.home}>
      <div className={styles.home_container +  " " + styles.content}>
        <div className={styles.home_content}>
          <h2>Le cyber-harcèlement ne cesse de fragiliser le lien social.</h2>
          <p>
            En 2021, <span className='underline'>20 % des jeunes</span> affirment
            avoir déjà été confrontés à <span className='underline'>une situation de cyber-harcèlement</span>{' '}
            (suite à une étude réalisée par e-Enfance et la Caisse d’épargne)
          </p>
          <button className="dark-contained-button">En apprendre plus</button>
        </div>
        
        <div className={styles.home_illustration_parent}>
          <Image
            src={illustrationGirl}
            layout="fill"
            objectFit="contain"
            alt={"Girl victim of cyber bullying"}
            className={styles.home_illustration}
          />
        </div>
      </div>
    </section>
  )
}

// TODO: Fix the swiper, when slidesPerView is 1, it looks buggy and text is not readable.
//       I can't add a radial gradient and I don't know why, I spent too much hours trying
//       to figure it out but there are still the bugs although in another workspace, and with vanilla js (so no react), it worked
//       If someone passes by here and knows how to fix these issues, it wouldn't turn it down.
//       But I think it has to do with how messy my code is :c
function NumbersSection() {
  const Wave1 = WaveDef("#ffffff", "#0057FF", "0 0 1440 320", "M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,122.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z");
  const Wave2 = WaveDef("#ffffff", "#0057FF", "0 0 1440 320", "M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,37.3C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z");
  
  return (
    <WaveSection
    Wave1={Wave1}
    Wave2={Wave2}
    marginTop={20}
    contentMarginTop={-120}
    backgroundColor={"white"}
    className="root"
    >
      <h2>Chiffres</h2>

      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          autoplay={{
            delay: 100,
            disableOnInteraction: true
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
              centerInsufficientSlides: true
            },
            1200: {
              slidesPerView: 2,
            },
            1800: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            el: '.swiper-pagination',
            clickable: true,
          }}
          className={"swiper"}
        >
          <SwiperSlide key={"1"} className="swiper-slide">
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-8.jpg" alt="Test" />

            <div className="swiper-slide-text color-white">
              <h6>2,6</h6>
              <p>
                <strong>millions de personnes meurent chaque année</strong>
                {' '}des suites de maladies liées à l&apos;eau insalubre.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"2"} className="swiper-slide">
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-1.jpg" alt="Test" />
            
            <div className="swiper-slide-text color-white">
              <h6>29%</h6>
              <p>
                <strong>de la population mondiale</strong>
                {' '}n&apos;ont toujours pas accès à l&apos;eau potable.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"3"} className="swiper-slide">
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-4.jpg" alt="Test" />
            
            <div className="swiper-slide-text color-white">
              <h6>5</h6>
              <p>
                <strong>personnes</strong>
                {' '}meurent chaque minute des suites de maladies liées à l&apos;eau insalubre.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"4"} className="swiper-slide">
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-5.jpg" alt="Test" />
            
            <div className="swiper-slide-text color-white">
              <h6>Près d&apos;1/4</h6>
              <p>
                <strong>de la population mondiale</strong>
                {' '}est en situation de stress hydrique très grave.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="button-container">
        <button className="light-contained-button">C&apos;est quoi ?</button>
      </div>
      <style jsx>{`
        .swiper-container {
          box-sizing: border-box;
        }

        .swiper {
          box-sizing: border-box;
        }

        .swiper-pagination {
          bottom: 70px;
        }

        .swiper-button-prev {
          position: absolute;
          margin-top: -45px;
          left: calc(100vw / 2 - min(75rem / 2, 85vw / 2) - 60px)
        }
        .swiper-button-next {
          position: absolute;
          margin-top: -45px;
          left: calc(100vw / 2 + min(75rem / 2, 85vw / 2) + 30px)
        }

        .swiper-slide {
          position: absolute;
          text-align: center;
          font-size: 1em;
          background: #fff;
          box-sizing: border-box;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-slide::before {
          content: '';
          position:absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(200% 200% at 60% 20%, transparent 10%, black 100%);
          z-index: 3;
        }
        
        .swiper-slide-text {
          color: white;
          position: absolute;
          bottom: 1.5em;
          left: 2em;
          width: 300px;
          text-align: left;
          z-index: 2;
        }
        
        .swiper-slide-text h6 {
          font-size: 4em;
          font-weight: 700;
          margin-bottom: 0;
        }
        .swiper-slide-text p {
          font-size: 1.5em;
          line-height: 1em;
        }
        .swiper-slide-text strong {
          font-size: 1.4em;
          line-height: 1em;
          font-weight: bold;
        }

        h2 {
          color: #0A123A;
          font-size: 2em;
        }
        
        .button-container {
          margin-top: 50px;
          margin-bottom: -40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </WaveSection>
  )
}

function WhatIsItSection() {
  const Wave2 = WaveDef("#0057FF", "#E5E7F2", "0 64 1440 320", "M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z");

  return (
    <WaveSection
      Wave1={null}
      Wave2={Wave2}
      marginTop={-160}
      contentMarginTop={-60}
      backgroundColor={"#0057FF"}
    >
      <h2>
        Le cyber-harcèlement,<br />
        — c’est quoi ?
      </h2>
      
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="card-head">
              <Image 
                src="/images/menu_book_black_24dp.svg" 
                width={52}
                height={48}
                alt="Book icon"
              />
              <h3>Définition</h3>
            </div>
            
            <hr />

            <p>
              Le cyber-harcèlement est un acte <strong>agressif, intentionnel</strong> perpétré 
              par un individu ou un groupe d’individus au moyen de formes 
              de <strong>communication électroniques</strong>, <span className='underline'>de façon répétée</span> à l’encontre 
              d’une victime qui ne peut facilement se défendre seule. <br />
              <br />
              Il peut prendre <span className='underline'>différentes</span> formes :
              <ul>
                <li>intimidations, insultes, moqueries, menaces</li>
                <li>propagation de rumeurs</li>
                <li>piratage et usurpation d’identité digitale</li>
                <li>publication de photos/vidéos d’une personne en mauvaise posture</li>
                <li>sexting</li>
              </ul>
            </p>
          </div>
          <div className="card">
            <div className="card-head">
              { /* I don't know why but nextjs' image behave in a weird way */ }
              { /* eslint-disable-next-line @next/next/no-img-element */ }
              <img 
                src="/images/law_icon.svg" 
                width="54px"
                height="54px"
                alt="Law icon"
              />
              <h3>Ce que dit la loi</h3>
            </div>
            
            <hr />

            <p>
              Le gouvernement français est très fortement opposé 
              aux cybercrimes et puni sévèrement les auteurs :
            </p>

            { /* eslint-disable-next-line @next/next/no-img-element */ }
            <img 
              src="/images/law_sentences.png" 
              width="100%"
              height="auto"
              alt="Law sentences"
            />

            <p>
              * Les parents des auteurs mineurs sont  
                responsables civilement
            </p>
          </div>
        </div>
        
        <button className="dark-contained-button">Voir des exemples de <br /> cyber-harcèlement</button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2em;
        }

        .card-container {
          display: flex;
          gap: 3em;
          color: #0A123A;
        }

        .card {
          background: white;
          width: 100%;
          padding: 32px 40px;
          border-radius: 16px;
          font-size: 1.25em;
          line-height: 1.25em;
        }

        .card-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin: -16px 0;
        }

        .card h3 {
          font-size: 1.75em;
        }

        .card hr {
          border-top: 3px solid #0A123A;
        }

        h2 {
          font-size: 2em;
          line-height: 1.1em;
        }
      `}</style>
    </WaveSection>
  )
}


function ExamplesSection() {
  return (
    <WaveSection
      marginTop={-160}
      contentMarginTop={-60}
      backgroundColor={"#E5E7F2"}
    >      
      <div className="container">
        <h2>
          Exemples de cyber-harcèlement
        </h2>
        
        <div className="card-container">
          <div className="card">
            <div className="card-head">
              <img 
                src="/images/bilal_hassani.png" 
                alt="Book icon"
              />
              <div className="card-head-right">
                <h3>Bilal Hassani</h3>
                <hr />
              </div>
            </div>

            <p>
              Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans venu petit s’installer en France avec sa mère et son frère. Il est maintenant influenceur, chanteur, auteur-compositeur et youtubeur sur Twitteur et Youtube avec plus d’un million d’abonnés. En 2017, Bilil va faire son coming out la veille de la Gay Pride 2017. La Gay Pride est une marche des fiertés LGBT (Lesbiennes, Gays, Bisexuelles, Transgenre et autre. En effet, cette année, B. Hassani va publier sur Twitter une chanson annonçant son homosexualité. Ses plus grands fans lui resteront fidèles mais va également être victime de cyber-harcèlement, d’attaques 
            </p>

            <button className="read-more">Lire la suite</button>
          </div>
          <div className="card">
            <div className="card-head">
              <img 
                src="/images/bilal_hassani.png" 
                alt="Book icon"
              />
              <div className="card-head-right">
                <h3>Bilal Hassani</h3>
                <hr />
              </div>
            </div>

            <p>
              Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans venu petit s’installer en France avec sa mère et son frère. Il est maintenant influenceur, chanteur, auteur-compositeur et youtubeur sur Twitteur et Youtube avec plus d’un million d’abonnés. En 2017, Bilil va faire son coming out la veille de la Gay Pride 2017. La Gay Pride est une marche des fiertés LGBT (Lesbiennes, Gays, Bisexuelles, Transgenre et autre. En effet, cette année, B. Hassani va publier sur Twitter une chanson annonçant son homosexualité. Ses plus grands fans lui resteront fidèles mais va également être victime de cyber-harcèlement, d’attaques 
            </p>

            <button className="read-more">Lire la suite</button>
          </div>
        </div>
        
        <button className="dark-outlined-button">
          Découvrir les conséquences <br />
          du cyber-harcèlement
        </button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #0A123A;
        }

        .card-container {
          display: flex;
          gap: 3em;
        }

        .card {
          background: white;
          width: 100%;
          padding: 32px 40px;
          border-radius: 16px;
          font-size: 1.25em;
          line-height: 1.25em;
          box-shadow: 0px 6px 23px rgba(0, 0, 0, 0.25);
        }

        .card-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin: -16px 0;
        }

        .card-head-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-top: -12px;
        }

        .card-head-right > * {
          width: 100%;
        }

        .card-head-right > hr {
          border-top: 3px solid #0A123A;
          margin-top: -24px;
        }

        .card h3 {
          font-size: 1.75em;
        }

        .card > p {
          position: relative;
        }

        .card > p:after {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          content: "";
          background: linear-gradient(to top,
            rgba(255,255,255, 1) 1%, 
            rgba(255,255,255, 0) 40%
          );
          pointer-events: none;
        }

        .card-head > img {
          max-width: 56px;
          max-height: 56px;
          min-width: 56px;
          min-height: 56px;
          object-fit: cover;
          filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25));
          border-radius: 500px;
        }

        h2 {
          font-size: 2em;
          line-height: 1.1em;
        }

        .read-more::before {
          content: '→ '
        }
        
        .read-more {
          background: transparent;
          font-family: Roboto, sans-serif;
          font-size: 1em;
          font-weight: 500;
          color: #0057FF;
          border: 0;
          border-radius: 0.6rem;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .container > button {
          margin-top: 30px;
        }
      `}</style>
    </WaveSection>
  )
}


function Footer() {
  const Wave1 = WaveDef("#0A123A", "#FFFFFF", "0 0 1440 320", "M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z");

  return (
    <WaveSection
      Wave1={Wave1}
      marginTop={-80}
      contentMarginTop={0}
      backgroundColor={"#0A123A"}
      type="footer"
    >
      
      
      <div className="container">
        <div className={styles.header_logo}>
          <Image
            width={80}
            height={80}
            src={logoNoBG}
            alt={"Logo STOP au cyber-harcèlement"}
          />
          <h1>
            <b>STOP</b> au<br />
            cyber-harcèlement
          </h1>
        </div>

        <div className="footer-right">
          <navbar className={styles.header_navbar}>
            <a>
              Accueil
            </a>
            <a>
              Chiffres
            </a>
            <a>
              {"C'est quoi ?"}
            </a>
            <a>
              Exemples
            </a>
            <a>
              Conséquences
            </a>
            <a>
              Que faire ?
            </a>
          </navbar>

          <p>
            Ce site web a été réalisé par François SIGOIGNET et Tom GOBICHON dans le cadre des cours d’EMC. 
            Le code source du site web est disponible <a className="link" href="https://github.com/PixelDeEcran/stop-au-cyberharcelement" target={"_blank"} rel="noreferrer">ici</a>.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          max-width: 65%;
        }

        .link {
          color: #2D74FF;
        }
      `}</style>
    </WaveSection>
  )
}

/*

    <section className={styles.numbers}>
      <svg className={styles.wave_drop_shadow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,32L60,58.7C120,85,240,139,360,176C480,213,600,235,720,229.3C840,224,960,192,1080,202.7C1200,213,1320,267,1380,293.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div className={styles.numbers_container}>
        <div className={styles.numbers_content + " " + styles.content}>
          <h2>Chiffres</h2>
        </div>
      </div>
    </section>
*/

export default function Home() {
  return (
    <>
      <Head>
        <title>STOP au Cyber-Harcèlement</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="STOP au Cyber-Harcèlement is a wesite to help fighting against cyber harassment." />
        <meta name="author" content="François SIGOIGNET et Tom GOBICHON" />

        <meta property="og:title" content="STOP au Cyber-Harcèlement" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cyberharcelement.org/" />
        <meta property="og:description" content="STOP au Cyber-Harcèlement is a wesite to help fighting against cyber harassment." />
        <meta property="og:image" content="images/Logo.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        { /* eslint-disable-next-line @next/next/no-page-custom-font */ }
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      </Head>

      <main>
        <Header />

        <HomeSection />
        <NumbersSection />
        <WhatIsItSection />
        <ExamplesSection />

        <Footer />
      </main>
    </>
  )
}

/*

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
*/