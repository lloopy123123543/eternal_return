import styles from '../styles/Home.module.css'
import Link from 'next/link'
const BgContainer = ({children}) => {
    return (
        <>
      <div className={styles.container}>
      <div className={styles.tringle}>
      <div className={styles.tringle_text}>
      </div>
      </div>
      <div className={styles.main}>
      <div className={styles.main_content}>
        <div className={styles.main_content_logo}></div>
        <div className={styles.main_content_platforms}>
                <div className={styles.main_content_platforms_steam}>
        
        </div>
        <div className={styles.main_content_platforms_steam}>
        
        </div>


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
export default BgContainer;