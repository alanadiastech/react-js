import React from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                    <div className={styles.authorInfo}>
                        <strong>Ana Félix</strong>
                        <span>Dev Front-End</span>
                    </div>
                </div>
                <time title='09 de Março às 16:21h' dateTime='2023-03-09 16:21:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '} 
                    <a href="">#nlw</a>{' '} 
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}