import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-72Ve5r9BAtP2ad9P7F8eB_nJ11BLj3RMDA&usqp=CAU" />

        <strong>Letícia Frasquette</strong>
        <span>Desenvolvedora</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
