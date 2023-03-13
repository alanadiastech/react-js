
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Davi D.</strong>
                            <time title='09 de Março às 16:21h' dateTime='2023-03-09 16:21:00'>Cerca de 1h atrás </time>
                        </div>
                        <button title='Deletarcomentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Conteúdo excelente, Davi! Parabéns!!! 👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}