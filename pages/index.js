import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoNoBG from '../public/images/Logo-Icon-NoBG.png'
import illustrationGirl from '../public/images/illustration_girl.png'
import { WaveDef, WaveSection } from '../components/WaveSection'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return (
    <header>
      <div className="gradient_bar"></div>

      <div className="header-container">
        <div className="header-content">
          <a href="#"><div className={"header-logo"}>
            <img
              width={80}
              height={80}
              src={"/images/Logo-Icon-NoBG.png"}
              alt={"Logo STOP au cyber-harcèlement"}
              className="header-logo-img"
            />
            <h1>
              <b>STOP</b> au<br />
              cyber-harcèlement
            </h1>
          </div></a>

          <button onClick={() => setNavbarVisible(!navbarVisible)} className="mobile-navbar-toggle" aria-controls="header-navbar">
            
          </button>

          <nav>
            <ul id="header-navbar" data-visible={navbarVisible ? "true" : "false"} className="header-navbar">
              <a href="#">
                Accueil
              </a>
              <a href="#numbers">
                Chiffres
              </a>
              <a href="#what-is-it">
                {"C'est quoi ?"}
              </a>
              <a href="#examples">
                Exemples
              </a>
              <a href="#consequences">
                Conséquences
              </a>
              <a href="#what-to-do">
                Que faire ?
              </a>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        header {
          position: relative;
          z-index: 1000;
          display: flex;
          justify-content: center;
          height: 7rem;
        }

        .gradient_bar {
          background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          z-index: 0;
        }

        .header-container {
          position: fixed;
          top: 0;
          display: flex;
          justify-content: center;
          ${scrollY > 0 && "background: white;"}
          transition: background-color 0.5s;
          ${scrollY > 0 && "height: 100px;"}
          width: 100vw;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          padding: ${scrollY > 0 ? "0.8em" : "1.5rem"} 0;
          z-index: 1;
          width: 85vw;
          max-width: 75rem;
        }

        .header-logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: ${scrollY > 0 ? "#0A123A" : "white"};
        }

        .header-logo-img {
          ${scrollY > 0 &&
            "filter: brightness(0) saturate(100%) invert(12%) sepia(8%) saturate(7480%) hue-rotate(200deg) brightness(89%) contrast(109%);"}
        }

        .header-logo > h1 {
          font-size: 1em;
          line-height: 0.95em;
        }

        .header-navbar {
          padding: 0;
          margin: 0;
          margin-top: 2em;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1em;
        }

        .mobile-navbar-toggle {
          display: none;
        }

        .header-navbar a {
          position: relative;
          color: ${scrollY > 0 ? "#0A123A" : "white"};
        }

        .header-navbar a::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          margin: 0 auto;
          bottom: -2px;
          left: 0;
          right: 0;
          background-color: ${scrollY > 0 ? "#0A123A" : "white"};
          transition: width 0.4s;
        }

        .header-navbar a:hover::after {
          width: 100%;
        }

        @media screen and (max-width: 55em) {
          .header-navbar {
            position: fixed;
            margin: 0;
            background: white;
            flex-direction: column;
            align-items: flex-start;
            gap: 2em;
            padding: 10rem 3rem;
            inset: 0 0 0 40%;
            transform: translateX(100%);
            transition: transform 0.35s ease-out;
          }

          .header-navbar[data-visible="true"] {
            transform: translateX(0%);
          }

          .header-navbar a {
            font-size: 1.5em;
            color: #0A123A;
          }

          .header-navbar a::after {
            background-color: #0A123A;
            bottom: -8px;
            height: 3px;
          }

          .mobile-navbar-toggle {
            display: block;
            border: 0;
            position: fixed;
            z-index: 9999;
            background: url('/images/menu_black_24dp.svg');
            background-size: 3rem;
            background-repeat: no-repeat;
            ${scrollY == 0 && !navbarVisible ?
              "filter: invert(98%) sepia(12%) saturate(265%) hue-rotate(324deg) brightness(119%) contrast(100%);" : ""}
            width: 3rem;
            aspect-ratio: 1;
            top: ${scrollY > 0 ? "2rem" : "2.5em"};
            right: 3rem;
          }
          
          .mobile-navbar-toggle:hover {
            cursor: pointer;
          }
        }
      `}</style>
    </header>
  )
}

function HomeSection() {
  return (
    <section id="#home" className={styles.home}>
      <div className={styles.home_container +  " " + styles.content}>
        <div className={styles.home_content}>
          <h2>Le cyber-harcèlement ne cesse de fragiliser le lien social.</h2>
          <p>
            En 2021, <span className='underline'>20 % des jeunes</span> affirment
            avoir déjà été confrontés à <span className='underline'>une situation de cyber-harcèlement</span>{' '}
            (suite à une étude réalisée par e-Enfance et la Caisse d’épargne)
          </p>

          <a href="#numbers" className="dark-contained-button">En apprendre plus</a>
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

// UPDATE: It seems like SwiperJS don't like loop with autoplay and others settings.

// UPDATE 2: It's fix! I'm so happy! So, the bug was that it was messing with default css of swiper.
//           So now, I edit the style of swiper's css classes from global.css.
function NumbersSection() {
  const Wave1 = WaveDef("#ffffff", "#0057FF", "0 0 1440 320", "M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,122.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z");
  const Wave2 = WaveDef("#ffffff", "#0057FF", "0 0 1440 320", "M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,37.3C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z");
  
  return (
    <WaveSection
    id = "numbers"
    Wave1={Wave1}
    Wave2={Wave2}
    marginTop={20}
    contentMarginTop={-120}
    backgroundColor={"white"}
    className="root"
    >
      <h2>Chiffres</h2>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          rewind
          spaceBetween={20}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1000: {
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
        >
          <SwiperSlide key={"1"}>
              <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-8.jpg" alt="Test" />
              
              <div className="swiper-slide-text color-white">
                <h6>2,6</h6>
                <p>
                  <strong>millions de personnes meurent chaque année</strong>
                  {' '}des suites de maladies liées à l&apos;eau insalubre.
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"2"}>
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-1.jpg" alt="Test" />
            
            <div className="swiper-slide-text color-white">
              <h6>29%</h6>
              <p>
                <strong>de la population mondiale</strong>
                {' '}n&apos;ont toujours pas accès à l&apos;eau potable.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"3"}>
            <img src="https://www.solidarites.org/wp-content/uploads/2016/10/chiffre-cle-4.jpg" alt="Test" />
            
            <div className="swiper-slide-text color-white">
              <h6>5</h6>
              <p>
                <strong>personnes</strong>
                {' '}meurent chaque minute des suites de maladies liées à l&apos;eau insalubre.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"4"}>
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
        <a href="#what-is-it" className="light-contained-button">C&apos;est quoi le <br /> cyber-harcèlement ?</a>
      </div>
      <style jsx>{`
        .swiper-pagination {
          bottom: 100px;
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

        .swiper-slide-text {
          color: white;
          position: absolute;
          bottom: 0.5em;
          left: 2em;
          width: 300px;
          text-align: left;
          z-index: 2;
        }
        
        .swiper-slide-text h6 {
          font-size: 4em;
          line-height: 1em;
          font-weight: 700;
          margin-bottom: -0.3em;
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
        }
        
        .button-container {
          margin-top: 60px;
          margin-bottom: -25px;
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
      id="what-is-it"
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
              style={{
                maxWidth: "22.5em"
              }}
              alt="Law sentences"
            />

            <p>
              * Les parents des auteurs mineurs sont  
                responsables civilement
            </p>
          </div>
        </div>
        
        <a href="#examples" className="dark-contained-button">Voir des exemples de <br /> cyber-harcèlement</a>
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
        }

        .card-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin: -16px 0;
        }

        .card h3 {
          font-size: 1.5em;
        }

        .card hr {
          border-top: 3px solid #0A123A;
        }

        @media screen and (max-width: 1200px) {
          .card-container {
            flex-direction: column;
          }

          .card {
            width: auto;
          }
        }
      `}</style>
    </WaveSection>
  )
}

function ExampleCard({ children, id, profileUrl, name, text }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector('html');

    if (showModal) {
      const scrollY = window.scrollY;

      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = `0`;
      body.style.width = "100%"
      body.style.overflowX = 'hidden';
      body.style.overflowY = 'scroll';
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.overflowX = '';
      body.style.overflowY = '';
      html.style.scrollBehavior = 'auto';

      window.scrollTo({
        left: 0, 
        top: parseInt(scrollY || '0') * -1,
        behavior: 'auto' // this option is not working for unknown reason
      });

      html.style.scrollBehavior = '';
    }
  })

  return (
    <>
      <div className="card">
        <div className="card-head">
          <img 
            src={profileUrl} 
            alt="Book icon"
          />
          <div className="card-head-right">
            <h3>{name}</h3>
            <hr />
          </div>
        </div>

        <p>
          {text}
        </p>

        <button onClick={() => setShowModal(true)} className="read-more">Lire la suite</button>
      </div>

      <div id={id} className="modal">
        <div className="modal-card">
          <div className="modal-head">
            <img 
              src={profileUrl} 
              alt="Book icon"
              />
            <div className="modal-head-right">
              <h3>{name}</h3>
              <hr />
            </div>
          </div>

          <div className="modal-content">
            {children}
          </div>

          <button onClick={() => setShowModal(false)} className="modal-close">&times;</button>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: white;
          width: 100%;
          padding: 2.5rem 3rem;
          border-radius: 16px;
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
          margin-top: -22px;
        }

        .card h3 {
          font-size: 1.75em;
          line-height: 1em;
        }

        .card > p {
          position: relative;
          margin-top: 32px;
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

        .read-more::before {
          content: '→ '
        }

        .read-more {
          position: relative;
          background: transparent;
          font-family: Roboto, sans-serif;
          font-size: 1em;
          font-weight: 500;
          color: #0057FF;
          border: 0;
          border-radius: 0.6rem;
        }

        .read-more:hover {
          cursor: pointer;
        }
        
        .read-more::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 1.5em;
          right: 0;
          background-color: #0057FF;
          transition: width 0.3s;
        }

        .read-more:hover::after {
          width: calc(100% - 1.5em);
        }

        .modal {
          visibility: ${showModal ? "visible" : "hidden"};
          opacity: ${showModal ? 1 : 0};
          transition: opacity 0.25s;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          height: 100%;
          bottom: 0;
          z-index: 100000;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-card {
          width: 85vw;
          max-width: 45rem;
          background: white;
          padding: 3.5rem 3rem;
          border-radius: 16px;
          box-shadow: 0px 6px 23px rgba(0, 0, 0, 0.25);
          position: relative;
          margin-top: 100px;
          margin-bottom: 0;
          overflow: auto;
          color: #0A123A;
        }

        .modal-close {
          position: absolute;
          top: 0.75em;
          right: 1em;
          font-size: 2em;
          color: #0A123A;
          background: transparent;
          border: 0;
        }

        .modal-close {
          cursor: pointer;
        }

        .modal-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin: -16px 0;
        }

        .modal-head {
          font-size: 1.75em;
          line-height: 1.2em;
        }

        .modal-head-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-top: -12px;
        }

        .modal-head-right > * {
          width: 100%;
        }

        .modal-head-right > hr {
          border-top: 3px solid #0A123A;
          margin-top: -22px;
        }

        .modal-head > img {
          max-width: 80px;
          max-height: 80px;
          min-width: 80px;
          min-height: 80px;
          object-fit: cover;
          filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25));
          border-radius: 500px;
        }

        .modal-content {
          margin-top: 24px;
          height: 40vh;
          max-height: 40rem;
        }
        
        @media screen and (max-width: 1200px) {
          .card {
            width: auto;
          }
        }
      `}</style>
    </>
  )
}

function ExamplesSection() {
  return (
    <WaveSection
      id="examples"
      marginTop={-160}
      contentMarginTop={-60}
      backgroundColor={"#E5E7F2"}
      zIndex={100} // So modal are in top of the others sections
    >
      <div className="container">
        <h2>Exemples de cyber-harcèlement</h2>

        <div className="card-container">
          <ExampleCard
            profileUrl={"/images/bilal_hassani.png"}
            name={"Bilal Hassani"}
            text={`
              Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans venu petit s’installer en France avec sa mère et son frère.
              Il est maintenant influenceur, chanteur, auteur-compositeur et youtubeur sur Twitteur et Youtube avec plus d’un million d’abonnés. 
              En 2017, Bilil va faire son coming out la veille de la Gay Pride 2017. La Gay Pride est une marche des fiertés LGBT 
              (Lesbiennes, Gays, Bisexuelles, Transgenre et autre. En effet, cette année, B. Hassani va publier sur Twitter une
              chanson annonçant son homosexualité. Ses plus grands fans lui resteront fidèles mais va également être victime de 
              cyber-harcèlement, d’attaques 
            `}
          >
            <p>
              {`Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans
              venu petit s’installer en France avec sa mère et son frère. Il est
              maintenant influenceur, chanteur, auteur-compositeur et youtubeur
              sur Twitteur et Youtube avec plus d’un million d’abonnés. En 2017,
              Bilil va faire son coming out la veille de la Gay Pride 2017. La
              Gay Pride est une marche des fiertés LGBT (Lesbiennes, Gays,
              Bisexuelles, Transgenre et autre. En effet, cette année, B.
              Hassani va publier sur Twitter une chanson annonçant son
              homosexualité. Ses plus grands fans lui resteront fidèles mais va
              également être victime de cyber-harcèlement, d’attaques racistes,
              homophobes voir jusqu’à des menaces de mort. Mais, déterminé, il
              va opter un nouveau look plus “féministe” en portants des péruques
              longues de couleur et des vêtements pour femmes. Mais en 2019,
              Bilal Hassani être innondé de manaces et d’actes de harcèlement dû
              à sa participation à l’Eurovision. En effet il a été élu grâce à
              ses followers et son côté touchant pour certains mais les
              critiques ont afflué. En guise de réponse, il déclare sur France 2
              « C'est une fierté pour moi de représenter mon pays en étant 100 %
              moi-même, malgré des fois des gens qui ont pu me dire sur Internet
              ou autre que je ne représentais pas la France, avait-il déclaré au
              lendemain de sa victoire sur France 2. Il y a beaucoup de haine,
              il y a beaucoup de choses qui pourraient m'affaiblir et me donner
              l'impression que je devrais arrêter ou me brider, m'auto-censurer.
              »`}
              <br />
              <br />
              {`Il portera finalement plainte pour “injures et provocation à la
              haine et à la violence et menaces homophobes”. Aujourd’hui encore,
              il continu d’apparaître dans les grandes émissions et à gagner en
              influence sur les réseaux sociaux.`}
            </p>
          </ExampleCard>
          <ExampleCard
            profileUrl={"/images/bilal_hassani.png"}
            name={"Bilal Hassani"}
            text={`
              Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans venu petit s’installer en France avec sa mère et son frère.
              Il est maintenant influenceur, chanteur, auteur-compositeur et youtubeur sur Twitteur et Youtube avec plus d’un million d’abonnés. 
              En 2017, Bilil va faire son coming out la veille de la Gay Pride 2017. La Gay Pride est une marche des fiertés LGBT 
              (Lesbiennes, Gays, Bisexuelles, Transgenre et autre. En effet, cette année, B. Hassani va publier sur Twitter une
              chanson annonçant son homosexualité. Ses plus grands fans lui resteront fidèles mais va également être victime de 
              cyber-harcèlement, d’attaques 
            `}
          >
          <p>
            {`Bilal Hassani, d’origine marocaine, est un jeune homme de 22 ans
            venu petit s’installer en France avec sa mère et son frère. Il est
            maintenant influenceur, chanteur, auteur-compositeur et youtubeur
            sur Twitteur et Youtube avec plus d’un million d’abonnés. En 2017,
            Bilil va faire son coming out la veille de la Gay Pride 2017. La
            Gay Pride est une marche des fiertés LGBT (Lesbiennes, Gays,
            Bisexuelles, Transgenre et autre. En effet, cette année, B.
            Hassani va publier sur Twitter une chanson annonçant son
            homosexualité. Ses plus grands fans lui resteront fidèles mais va
            également être victime de cyber-harcèlement, d’attaques racistes,
            homophobes voir jusqu’à des menaces de mort. Mais, déterminé, il
            va opter un nouveau look plus “féministe” en portants des péruques
            longues de couleur et des vêtements pour femmes. Mais en 2019,
            Bilal Hassani être innondé de manaces et d’actes de harcèlement dû
            à sa participation à l’Eurovision. En effet il a été élu grâce à
            ses followers et son côté touchant pour certains mais les
            critiques ont afflué. En guise de réponse, il déclare sur France 2
            « C'est une fierté pour moi de représenter mon pays en étant 100 %
            moi-même, malgré des fois des gens qui ont pu me dire sur Internet
            ou autre que je ne représentais pas la France, avait-il déclaré au
            lendemain de sa victoire sur France 2. Il y a beaucoup de haine,
            il y a beaucoup de choses qui pourraient m'affaiblir et me donner
            l'impression que je devrais arrêter ou me brider, m'auto-censurer.
            »`}
            <br />
            <br />
            {`Il portera finalement plainte pour “injures et provocation à la
            haine et à la violence et menaces homophobes”. Aujourd’hui encore,
            il continu d’apparaître dans les grandes émissions et à gagner en
            influence sur les réseaux sociaux.`}
          </p>
          </ExampleCard>
        </div>

        <a href="#consequences" className="dark-outlined-button">
          Découvrir les conséquences <br />
          du cyber-harcèlement
        </a>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #0a123a;
        }

        .card-container {
          display: flex;
          gap: 3em;
        }

        .container > a {
          margin-top: 40px;
          margin-bottom: -20px;
        }

        @media screen and (max-width: 1200px) {
          .card-container {
            flex-direction: column;
          }
        }
      `}</style>
    </WaveSection>
  );
}

function ConsequencesSection() {
  const Wave1 = WaveDef("#0057FF", "#E5E7F2", "0 0 1440 320", "M0,160L120,138.7C240,117,480,75,720,96C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z");

  return (
    <WaveSection
      id="consequences"
      Wave1={Wave1}
      Wave2={null}
      marginTop={-85}
      contentMarginTop={-120}
      backgroundColor={"#0057FF"}
    >
      <h2>
        Les conséquences<br />
        du cyber-harcèlement
      </h2>
      
      <div className="container">
        <div className="short-consequences-container">
          <div className="card">
            <div className="card-head">
              <Image 
                src="/images/psychology_black_24dp.svg" 
                width={52}
                height={48}
                alt="Psychology icon"
              />
              <h3>Conséquences psychiques</h3>
            </div>
            
            <hr />

            <p>
              Sentiments de culpabilité, d’impuissance, de dévalorisation de sa personne, anxiété, honte, perte d’estime de soi, phobie, dépression...
            </p>
          </div>
          <div className="card">
            <div className="card-head">
              { /* I don't know why but nextjs' image behave in a weird way */ }
              { /* eslint-disable-next-line @next/next/no-img-element */ }
              <img 
                src="/images/boy_black_24dp.svg" 
                width="54px"
                height="54px"
                alt="Boy icon"
              />
              <h3>Conséquences physiques</h3>
            </div>
            
            <hr />

            <p>
              Absence de sommeil, nervosité ou manque d’énergie, 
              vertige, fatigue intense, migraines, perte de mémoire, 
              troubles alimentaires, mutilations corporelles…<br />
              <br />
              Les troubles physiques sont parfois plus visibles que les psychiques, 
              mais révèlent souvent l’existence d’un mal-être psychologique. 
            </p>
          </div>
        </div>
        
        <div className="long-term-consequences">
          <div className="card">
            <div className="card-head">
              { /* I don't know why but nextjs' image behave in a weird way */ }
              { /* eslint-disable-next-line @next/next/no-img-element */ }
              <img 
                src="/images/groups_black_24dp.svg" 
                width="48px"
                height="48px"
                alt="Boy icon"
              />
              <h3>Conséquences à long terme</h3>
            </div>
            
            <hr />

            <p>
              Le cyberharcèlement peut fragiliser le lien social. 
              En effet, l’anonymat que procure le cyberharcèlement 
              peut avoir un incident sur la confiance de la victime.
              Elle peut ne plus savoir vers qui se dirigé et lui 
              causé des problèmes lors d’échanges avec des personnes 
              qui lui sont inconnues.<br />
              <br /> 
              Il peut s’ensuivre des maladies psychologiques comme 
              par exemple une phobie scolaire où la victime se renferme 
              sur elle-même et est dans l’incapacité de retourné à l’école. 
            </p>
          </div>

          <a href="#what-to-do" className="dark-contained-button">
            Que faire contre<br />
            le cyber-harcèlement ?
          </a>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5rem;
        }

        .short-consequences-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3em;
          color: #0A123A;
        }

        .short-consequences-container > .card {
          min-width: 20rem;
          width: 60%;
        }

        .long-term-consequences {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3em;
          color: #0A123A;
        }

        .container > * {
          width: 100%;
        }

        .card {
          background: white;
          width: 90%;
          padding: 24px 28px;
          border-radius: 16px;
        }

        .card-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin: -16px 0;
        }

        .card h3 {
          font-size: 1.5em;
          line-height: 1em;
        }

        .card hr {
          border-top: 3px solid #0A123A;
        }

        @media screen and (max-width: 900px) {
          .container {
            flex-direction: column;
          }

          .card {
            width: 75vw;
          }
          
          .short-consequences-container > .card {
            width: 75vw;
            max-width: 75vw;
          }
        }
      `}</style>
    </WaveSection>
  )
}

function WhatToDoSection() {
  const Wave1 = WaveDef("#FFFFFF", "#0057FF", "0 0 1440 320", "M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z");

  return (
    <WaveSection
      id="what-to-do"
      Wave1={Wave1}
      Wave2={null}
      marginTop={-120}
      contentMarginTop={-120}
      backgroundColor={"#FFFFFF"}
    >
      <h2>
        Que faire ?
      </h2>

      <div className="container">
        <div className="section">
          <h3>Si vous êtes victime</h3>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            nunc, lacinia efficitur dolor vel, interdum mollis sapien. Sed
            maximus leo ipsum, a gravida risus malesuada sit amet. Sed sed
            ullamcorper tellus. Phasellus lobortis libero ut sem dapibus, vitae
            faucibus magna fringilla. Vestibulum quam purus, elementum non nulla
            vel, convallis mollis quam. Sed sed sodales justo. Praesent semper
            maximus justo et hendrerit. In id arcu quis erat gravida imperdiet
            quis eu neque. Fusce arcu lectus, congue quis rutrum eu, maximus
            porta lorem. Pellentesque commodo dui purus, id feugiat turpis
            accumsan at. <br /> 
            <br />
            Quisque vitae lacus ullamcorper, molestie massa eget,
            vulputate ex. Curabitur porta mattis ultrices. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Duis porttitor dui ut lectus
            hendrerit aliquam. Cras nec mattis dui, in pellentesque leo. Sed
            quis velit luctus, tincidunt dui sit amet, congue nisi.
          </p>
        </div>

        <div className="divider"></div>

        <div className="section">
          <h3>Si vous êtes témoin</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            nunc, lacinia efficitur dolor vel, interdum mollis sapien. Sed
            maximus leo ipsum, a gravida risus malesuada sit amet. Sed sed
            ullamcorper tellus. Phasellus lobortis libero ut sem dapibus, vitae
            faucibus magna fringilla. Vestibulum quam purus, elementum non nulla
            vel, convallis mollis quam. Sed sed sodales justo. Praesent semper
            maximus justo et hendrerit. In id arcu quis erat gravida imperdiet
            quis eu neque. Fusce arcu lectus, congue quis rutrum eu, maximus
            porta lorem. Pellentesque commodo dui purus, id feugiat turpis
            accumsan at.<br /> 
            <br />
            Quisque vitae lacus ullamcorper, molestie massa eget,
            vulputate ex. Curabitur porta mattis ultrices. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Duis porttitor dui ut lectus
            hendrerit aliquam. Cras nec mattis dui, in pellentesque leo. Sed
            quis velit luctus, tincidunt dui sit amet, congue nisi.
          </p>
        </div>
      </div>

      <style jsx>{`
        * {
          color: #0a123a;
        }

        .container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          margin-top: -1rem;
          gap: 2rem;
          width: 100%;
          flex: 1;
        }

        .section {
          width: 100%;
        }

        .section h3 {
          text-align: center;
          font-size: 1.5em;
          font-weight: 500;
        }

        .section p {
          font-size: 1.2em;
          line-height: 1.1em;
          text-align: justify;
        }

        .divider {
          background-color: #0a123a;
          width: 4px;
        }

        @media screen and (max-width: 900px) {
          .divider {
            width: 100%;
            height: 3px;
          }

          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </WaveSection>
  );
}


function Footer() {
  const Wave1 = WaveDef("#0A123A", "#FFFFFF", "0 0 1440 320", "M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z");

  return (
    <WaveSection
      Wave1={Wave1}
      marginTop={-190}
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
          <nav className={styles.header_navbar}>
            <a href="#">
              Accueil
            </a>
            <a href="#numbers">
              Chiffres
            </a>
            <a href="#what-is-it">
              {"C'est quoi ?"}
            </a>
            <a href="#examples">
              Exemples
            </a>
            <a href="#consequences">
              Conséquences
            </a>
            <a href="#what-to-do">
              Que faire ?
            </a>
          </nav>

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

        .link:hover {
          text-decoration: underline;
        }

        nav {
          flex-wrap: wrap;
        }
      `}</style>
    </WaveSection>
  )
}

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
        <ConsequencesSection />
        <WhatToDoSection />

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