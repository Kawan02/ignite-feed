import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/kawan02.png" />
                    <div className={styles.authorInfo}>
                        <strong>Kawan Messias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='10 de Novembro às 13:41h' dateTime="2024-11-10 13:41:00">Publica há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}