import styles from '../styles/Home.module.css'
import Link from 'next/link'
const MainContainer = ({children}) => {
    return (
        <>
        you&apos;re free;
        <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.header_logo}>
        <div className={styles.header_logo_logo}></div>
        </div>
        <div className={styles.header_menu}>
        <div className={styles.header_menu_text}><Link href="/heroes"><a>Heroes</a></Link></div>
        <div className={styles.header_menu_text}><Link href='/'><a>Home</a></Link></div>
        <div className={styles.header_menu_text}>About</div>
        <div className={styles.header_menu_text_button}>
        <div className={styles.header_menu_text_button_play}>PLAY</div>
        </div>
        </div>
      </div>

        </div>
        <div>
             {children}
        </div>
        </>
    )
}
export default MainContainer;