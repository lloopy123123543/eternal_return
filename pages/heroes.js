import styles from '../styles/heroes.module.css'
import MainContainer from '../components/MainContainer'
import Link from 'next/link'
import { useState } from 'react'
const Hero = () => {
  const [hero, setHero] = useState([
    {id:1, name:'evelin'},
    {id:2, name:'nicky'},
  ])
}
const Nicky = () =>{
  return(
    <div className={styles.news_heroes_block_n}>
    </div>
  )
}

export default function Heroes(){
    return(
        <div className={styles.containers}>
      <MainContainer></MainContainer>
        <div className={styles.container}>
        <div className={styles.news}>
          <div className={styles.news_title}>
          <div className={styles.news_title_text}>
          Heroes
          </div>
          </div>
          <div className={styles.news_heroes_container}>
          <Link href={'/heroes/Eleven'}>
          <a>
          <div className={styles.news_heroes_block}>
          </div>
          </a>
          </Link>

          <Link href={'/heroes/Nicky'}>
          <a>
          <Nicky></Nicky>
          </a>
          </Link>
          
          <div className={styles.news_heroes_block_r}>
          </div>
          <div className={styles.news_heroes_block_ch}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          <div className={styles.news_heroes_block}>
          </div>
          </div>
      </div>
      </div>
      </div>
    )
}