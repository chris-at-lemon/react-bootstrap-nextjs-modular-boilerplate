import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import prisma from '../../lib/prisma'

import LoginCard from '../components/login/loginCard'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import { Hero } from '../components/hero/hero'
import { TitleSection } from '../components/titles/titleSection'
import { FeatureExtended } from '../components/featureSections/featured'

import Horn from '../../lib/svg/linearicons/bullhorn.svg'
import Map from '../../lib/svg/linearicons/map.svg'
import Company from '../../lib/svg/linearicons/apartment.svg'

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();
  console.log(users);

  return { props: { users } };
};

const Home: NextPage = () => {
  const { fn, showLoginCard } = HomeController();

  return (
    <>
      <Hero
        heroImg="/img/threadmarks.jpg"
        heroH1="Fonds für jedes Gelände"
      />
      <section id="intro" className={`${styles['section--Separator']} ${styles['section--gray']} ${styles['no-mt']}`}>
        <TitleSection
          img={Company}
          title="Die Veranstalter &amp; Themen"
          subtitle="Fonds für jedes Gelände"
        />
      </section>

      <section className={`${styles['section--Features']} ${styles['features--withText']} ${styles['section--gray']}`}>
      <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <FeatureExtended
                            imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/loys_wRVS2HHAW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860811"
                            title="First Private Systematic Merger Opportunities"
                            body= "Der Fonds profitiert von Unternehmensübernahmen und Fusionen - zudem basiert die Strategie auf Methoden der künstlichen Intelligenz"
                            link= "/company/first-private"
                            ftrBtnTxt="Details"
                        />
                    </div>
                    <div className="col-md-3">
                        <FeatureExtended
                            imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/lfde_fFnDX0-6N.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860815"
                            title="Echiquier Major SRI Growth Europe"
                            body= "Der Fonds ist ein nach Nachhaltigkeitskriterien zertifizierter Fonds mit Fokus auf besonders konjunkturunabhängige Werte"
                            link= "/company/lfde"
                            ftrBtnTxt="Details"
                        />                    </div>
                    <div className="col-md-3">
                        <FeatureExtended
                            imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/loys_wRVS2HHAW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860811"
                            title="LOYS Premium Dividende"
                            body= "Der europäische Aktienfonds fokussiert Unternehmen mit nachhaltigen Dividenden und investiert ausschließlich in Werte, die weniger kosten als sie wert sind"
                            link= "/company/loys"
                            ftrBtnTxt="Details"
                        />                    </div>
                    <div className="col-md-3">
                        <FeatureExtended
                            imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/tbf_7tH7cuGVB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860919"
                            title="TBF Balanced"
                            body= "Der Fonds vereint das Beste aus zwei Welten – als ausgewogener global investierender Mischfonds findet er Opportunitäten in den globalen Industrienationen"
                            link= "/company/tbf"
                            ftrBtnTxt="Details"
                        />
                      </div>
                </div>
            </div>
      </section>

    </>
  )
}

export default Home
