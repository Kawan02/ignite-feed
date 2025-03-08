import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'


const post = [
    {
        id: 1,
        author: {
            avatar_url: "https://github.com/kawan02.png",
            name: "Kawan Messias",
            role: "Desenvolvedor Jr"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋"},
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            { type: "link", content: "jane.design/doctorcare"},
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatar_url: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            role: "Educador @Rockeseat"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋"},
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            { type: "link", content: "jane.design/doctorcare"},
        ],
        publishedAt: new Date('2022-05-10 20:00:00'),
    },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
