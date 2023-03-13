import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import "./style.css"

export function App() {

  return (
    <div>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author = "Alana Dias"
          content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum mollitia, quas quae consequuntur eveniet magnam explicabo aliquam odio, veritatis neque in! Maxime deserunt possimus fuga consequatur accusantium laboriosam dolor dignissimos."
      />
      {/* <Post 
          author = "Rafa Dias"
          content = "Lorem ..."
      /> */}
      </main>
     </div>
    </div> 
  
  )
}

