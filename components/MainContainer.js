import styles from '../styles/Home.module.css'
const MainContainer = ({children}) => {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.header_logo}>
        <div className={styles.header_logo_logo}></div>
        </div>
        <div className={styles.header_menu}>
        <div className={styles.header_menu_text}><a href='/heroes/'>heroes</a></div>
        <div className={styles.header_menu_text}><a href='/'>return</a></div>
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