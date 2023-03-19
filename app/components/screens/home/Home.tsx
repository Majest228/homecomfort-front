import React from "react"
import styles from "./Home.module.scss"
import Intro from "./intro/Intro"
import Concepts from "@/app/components/screens/home/concepts/Concepts"
import Brands from "@/app/components/screens/home/brands/Brands"
import Advantages from "@/app/components/screens/home/advantages/Advantages"
import dynamic from "next/dynamic"

const Products = dynamic(() => import("./products/Products"), {
  ssr: false,
})

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <Intro />
        <Products title='Хит продажи' />
        <Concepts />
        <Products title='Новинки' />
        <Advantages />
        <Brands />
        <div className={styles.home__desc}>
          <p className={styles.home__desc__text}>
            СпортПит, является официальным представителем таких брендов как:
            OptimumNutrition, BSN, RedCon1, Amix, FitnessAuthority,
            EarthsCreation, Now, Natrol, Mutant, NCN, PVL, Quamtrax, GATSport,
            QuestNutrition, UltimateNutrition, BPISports, NutrexResearch, GoOn,
            IronMaxx, Modern (USPlabs), PowerPro, Mabaker, 4move, Zoomadlabs на
            территории России.
            <div className={styles.home__desc__text__br}></div>
            Нам доверяют известные спортсмены и тренеры, среди наших клиентов
            чемпионы по бодибилдингу, атлетизму, спорт модели. Спортивное
            питание, представленное в нашем магазине, подойдет как
            профессионалам, так и любителям, новичкам. Если вам нужна
            консультация, наши специалисты с радостью ее предоставят. Улучшайте
            свои результаты со спортивным питанием от СпортПит!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
