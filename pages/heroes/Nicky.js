import MainContainer from '../../components/MainContainer'
import styles from '../../styles/Nicky.module.css'

export default function Nicky_hero(){
    return(
        <div className={styles.containers}>
            <MainContainer></MainContainer>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.hero_img}></div>
                    <div className={styles.hero_text}>
                        <div className={styles.hero_title}>Nicky</div>
                        <div className={styles.hero_undertitle}>
                        <div className={styles.hero_undertitle_text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                    </div>
                </div>
            </div>




            </div>

        

    )
}